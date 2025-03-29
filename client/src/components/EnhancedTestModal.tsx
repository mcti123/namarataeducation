import React, { useState, useEffect } from 'react';
import { Test, Question } from '@/lib/data';
import { DifficultyLevel, UserAnswer, TestResult, generateTestByDifficulty } from '@/lib/testData';
import ConfettiEffect from './ConfettiEffect';
import TrophyAnimation from './TrophyAnimation';

interface EnhancedTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTest: Test;
  reducedMotion: boolean;
  subjectId: string;
}

const EnhancedTestModal: React.FC<EnhancedTestModalProps> = ({ 
  isOpen, 
  onClose, 
  initialTest, 
  reducedMotion,
  subjectId
}) => {
  const [currentTest, setCurrentTest] = useState<Test>(initialTest);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<UserAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(initialTest.duration * 60); // in seconds
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTrophy, setShowTrophy] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [showTestReview, setShowTestReview] = useState(false);
  
  useEffect(() => {
    // Initialize selected answers array
    if (isOpen) {
      resetTest(initialTest);
    }
  }, [isOpen, initialTest]);
  
  useEffect(() => {
    // Timer for the test
    if (!isOpen || showResults) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit when time's up
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isOpen, showResults]);
  
  const resetTest = (test: Test) => {
    setCurrentTest(test);
    setShowResults(false);
    setShowTestReview(false);
    setCurrentQuestionIndex(0);
    setTimeLeft(test.duration * 60);
    setSelectedAnswers(
      test.questions.map(q => ({
        questionId: q.id,
        selectedOption: null
      }))
    );
    setShowConfetti(false);
    setShowTrophy(false);
    setTestResult(null);
  };
  
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex].selectedOption = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmitTest = () => {
    const result = calculateTestResult();
    setTestResult(result);
    setShowResults(true);
    
    // Show confetti and trophy animation if not in reduced motion mode
    if (!reducedMotion) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowTrophy(true);
        
        // Hide animations after a delay
        setTimeout(() => {
          setShowConfetti(false);
          setShowTrophy(false);
        }, 4000);
      }, 1000);
    }
  };
  
  const calculateTestResult = (): TestResult => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unattempted = 0;
    
    selectedAnswers.forEach((answer, index) => {
      if (answer.selectedOption === null) {
        unattempted++;
      } else if (answer.selectedOption === currentTest.questions[index].correctAnswer) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });
    
    const score = (correctAnswers / currentTest.questions.length) * 100;
    
    return {
      testId: currentTest.id,
      totalQuestions: currentTest.questions.length,
      correctAnswers,
      incorrectAnswers,
      unattempted,
      score: Math.round(score),
      userAnswers: selectedAnswers,
      completedAt: new Date()
    };
  };
  
  const handleStartNewTest = () => {
    // Determine the next difficulty level based on the score
    let nextDifficulty: DifficultyLevel = 'medium';
    
    if (testResult) {
      if (testResult.correctAnswers < 5) {
        nextDifficulty = 'easy';
      } else if (testResult.correctAnswers === 5) {
        nextDifficulty = 'medium';
      } else if (testResult.correctAnswers >= 6 && testResult.correctAnswers <= 8) {
        nextDifficulty = 'intermediate';
      } else if (testResult.correctAnswers >= 9) {
        nextDifficulty = 'hard';
      }
    }
    
    // Generate a new test with appropriate difficulty
    const newTest = generateTestByDifficulty(nextDifficulty, subjectId);
    resetTest(newTest);
  };
  
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  if (!isOpen) return null;
  
  const currentQuestion = currentTest.questions[currentQuestionIndex];
  
  // Review mode shows detailed analysis of test results
  if (showTestReview && testResult) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div 
            className="fixed inset-0 bg-space bg-opacity-75 transition-opacity" 
            aria-hidden="true"
            onClick={onClose}
          ></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
          <div className="inline-block align-bottom bg-spaceLight rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="bg-spaceLight px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-2xl leading-6 font-baloo font-bold text-spaceWhite mb-4" id="modal-title">
                    Test Review
                  </h3>
                  
                  <div className="bg-space rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-spaceWhite">Your Score</span>
                      <span className="text-2xl font-bold text-primary">{testResult.score}<span className="text-lg">%</span></span>
                    </div>
                    <div className="w-full bg-spaceMid rounded-full h-3 mb-4">
                      <div className="bg-primary h-3 rounded-full" style={{ width: `${testResult.score}%` }}></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-500">{testResult.correctAnswers}</div>
                        <div className="text-xs text-spaceWhite/70">Correct</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-500">{testResult.incorrectAnswers}</div>
                        <div className="text-xs text-spaceWhite/70">Incorrect</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-500">{testResult.unattempted}</div>
                        <div className="text-xs text-spaceWhite/70">Unattempted</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="overflow-y-auto max-h-96">
                    <h4 className="text-lg font-medium text-spaceWhite mb-3">Question Analysis</h4>
                    {currentTest.questions.map((question, index) => {
                      const userAnswer = testResult.userAnswers[index];
                      const isCorrect = userAnswer.selectedOption === question.correctAnswer;
                      const isUnattempted = userAnswer.selectedOption === null;
                      
                      return (
                        <div 
                          key={question.id} 
                          className={`p-4 rounded-lg mb-4 ${
                            isUnattempted 
                              ? 'bg-yellow-900/20 border border-yellow-900/40' 
                              : isCorrect 
                                ? 'bg-green-900/20 border border-green-900/40' 
                                : 'bg-red-900/20 border border-red-900/40'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="mr-3">
                              {isUnattempted ? (
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
                                  <i className="fas fa-question-circle"></i>
                                </span>
                              ) : isCorrect ? (
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                  <i className="fas fa-check"></i>
                                </span>
                              ) : (
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                                  <i className="fas fa-times"></i>
                                </span>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-spaceWhite mb-2">
                                {index + 1}. {question.text}
                              </p>
                              
                              <div className="space-y-2 mb-3">
                                {question.options.map((option, optIndex) => (
                                  <div 
                                    key={optIndex}
                                    className={`text-xs p-2 rounded ${
                                      optIndex === question.correctAnswer
                                        ? 'bg-green-500/20 text-green-300'
                                        : userAnswer.selectedOption === optIndex && userAnswer.selectedOption !== question.correctAnswer
                                          ? 'bg-red-500/20 text-red-300'
                                          : 'bg-spaceMid/50 text-spaceWhite/70'
                                    }`}
                                  >
                                    {optIndex === question.correctAnswer && (
                                      <i className="fas fa-check-circle mr-1"></i>
                                    )}
                                    {userAnswer.selectedOption === optIndex && userAnswer.selectedOption !== question.correctAnswer && (
                                      <i className="fas fa-times-circle mr-1"></i>
                                    )}
                                    {option}
                                  </div>
                                ))}
                              </div>
                              
                              {question.explanation && (
                                <div className="bg-spaceMid/30 p-2 rounded text-xs text-spaceWhite/80">
                                  <p className="font-medium text-primary mb-1">Explanation:</p>
                                  {question.explanation}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-space px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                type="button" 
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleStartNewTest}
              >
                Try Another Test
              </button>
              <button 
                type="button" 
                className="mt-3 w-full inline-flex justify-center rounded-md border border-spaceMid shadow-sm px-4 py-2 bg-spaceLight text-base font-medium text-spaceWhite hover:bg-space focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setShowTestReview(false);
                  setShowResults(true);
                }}
              >
                Back to Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-space bg-opacity-75 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-spaceLight rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {showResults ? (
            // Test Results View
            <>
              <div className="bg-spaceLight px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <h3 className="text-2xl leading-6 font-baloo font-bold text-spaceWhite mb-2" id="modal-title">
                    Test Completed!
                  </h3>
                  <div className="mt-6 mb-4">
                    <div className="relative h-44 w-44 mx-auto">
                      <i className="fas fa-trophy text-8xl text-yellow-400"></i>
                    </div>
                  </div>
                  {testResult && (
                    <div className="bg-space rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-spaceWhite">Your Score</span>
                        <span className="text-2xl font-bold text-primary">{testResult.score}<span className="text-lg">%</span></span>
                      </div>
                      <div className="w-full bg-spaceMid rounded-full h-3 mb-4">
                        <div className="bg-primary h-3 rounded-full" style={{ width: `${testResult.score}%` }}></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-lg font-bold text-green-500">{testResult.correctAnswers}</div>
                          <div className="text-xs text-spaceWhite/70">Correct</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-red-500">{testResult.incorrectAnswers}</div>
                          <div className="text-xs text-spaceWhite/70">Incorrect</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-yellow-500">{testResult.unattempted}</div>
                          <div className="text-xs text-spaceWhite/70">Unattempted</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Feedback based on score */}
                  {testResult && (
                    <div className="bg-space rounded-lg p-4 mb-4 text-left">
                      <h4 className="text-lg font-baloo font-semibold text-spaceWhite mb-2">
                        Performance Analysis
                      </h4>
                      <p className="text-sm text-spaceWhite/80 mb-2">
                        {testResult.score >= 90 ? (
                          "Excellent work! You've mastered this material. Try a harder test next!"
                        ) : testResult.score >= 70 ? (
                          "Great job! You have a solid understanding of the concepts."
                        ) : testResult.score >= 50 ? (
                          "Good effort! With some more practice, you'll improve your score."
                        ) : (
                          "Keep practicing! Review the material and try again with an easier test."
                        )}
                      </p>
                      <p className="text-xs text-spaceWhite/60">
                        Next test difficulty: {
                          testResult.correctAnswers < 5 ? "Easier" : 
                          testResult.correctAnswers === 5 ? "Same level" : 
                          testResult.correctAnswers >= 6 && testResult.correctAnswers <= 8 ? "More challenging" : 
                          "Advanced"
                        }
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-space px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowTestReview(true)}
                >
                  View Solutions
                </button>
                <button 
                  type="button" 
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-spaceMid shadow-sm px-4 py-2 bg-spaceLight text-base font-medium text-spaceWhite hover:bg-space focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleStartNewTest}
                >
                  Take Another Test
                </button>
              </div>
            </>
          ) : (
            // Test Questions View
            <>
              {/* Test Header */}
              <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <i className={`fas ${currentTest.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-baloo font-semibold text-white">{currentTest.title}</h3>
                    <p className="text-sm text-white/80">{currentTest.chapter}</p>
                  </div>
                </div>
                <div className="text-sm text-white/80">
                  <i className="fas fa-clock mr-1"></i> {formatTime(timeLeft)}
                </div>
              </div>
              
              {/* Test difficulty badge */}
              <div className="px-6 py-2 bg-space flex justify-between items-center">
                <span className="text-xs text-spaceWhite/70">
                  <i className="fas fa-graduation-cap mr-1"></i> Difficulty: 
                  <span className={`ml-1 ${
                    currentTest.difficulty === 'easy' ? 'text-green-400' : 
                    currentTest.difficulty === 'medium' ? 'text-yellow-400' : 
                    currentTest.difficulty === 'intermediate' ? 'text-orange-400' : 
                    currentTest.difficulty === 'hard' ? 'text-red-400' :
                    'text-yellow-400'
                  }`}>
                    {(currentTest.difficulty || 'Medium').charAt(0).toUpperCase() + (currentTest.difficulty || 'medium').slice(1)}
                  </span>
                </span>
                
                <span className="text-xs">
                  <span className={`px-2 py-1 rounded-full ${
                    selectedAnswers.filter(a => a.selectedOption !== null).length === 0 ? 'bg-red-500/20 text-red-300' :
                    selectedAnswers.filter(a => a.selectedOption !== null).length < 5 ? 'bg-orange-500/20 text-orange-300' :
                    selectedAnswers.filter(a => a.selectedOption !== null).length < currentTest.questions.length ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {selectedAnswers.filter(a => a.selectedOption !== null).length}/{currentTest.questions.length} Answered
                  </span>
                </span>
              </div>
              
              {/* Question */}
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1} of {currentTest.questions.length}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-spaceWhite mb-3">{currentQuestion.text}</h4>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <div 
                          key={index}
                          className={`flex items-center p-3 rounded-lg border ${selectedAnswers[currentQuestionIndex]?.selectedOption === index ? 'border-primary bg-space/50' : 'border-spaceMid'} hover:border-primary hover:bg-space/50 transition cursor-pointer`}
                          onClick={() => handleOptionSelect(currentQuestionIndex, index)}
                        >
                          <input 
                            type="radio" 
                            name={`q${currentQuestionIndex}`} 
                            id={`q${currentQuestionIndex}a${index}`} 
                            className="h-4 w-4 text-primary focus:ring-primary border-spaceMid"
                            checked={selectedAnswers[currentQuestionIndex]?.selectedOption === index}
                            onChange={() => handleOptionSelect(currentQuestionIndex, index)}
                          />
                          <label 
                            htmlFor={`q${currentQuestionIndex}a${index}`} 
                            className="ml-3 block text-sm font-medium text-spaceWhite"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button 
                    className="px-4 py-2 border border-spaceMid text-spaceWhite rounded-lg hover:bg-spaceMid transition disabled:opacity-50"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    <i className="fas fa-arrow-left mr-2"></i> Previous
                  </button>
                  <div className="flex space-x-2 overflow-x-auto py-2 max-w-[150px] scrollbar-hide">
                    {currentTest.questions.map((_, index) => (
                      <span 
                        key={index} 
                        className={`w-7 h-7 rounded-full ${
                          index === currentQuestionIndex ? 'bg-primary' : 
                          selectedAnswers[index]?.selectedOption !== null ? 'bg-green-500' : 'bg-spaceMid'
                        } text-white text-xs flex items-center justify-center cursor-pointer flex-shrink-0`}
                        onClick={() => setCurrentQuestionIndex(index)}
                      >
                        {index + 1}
                      </span>
                    ))}
                  </div>
                  {currentQuestionIndex === currentTest.questions.length - 1 ? (
                    <button 
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      onClick={handleSubmitTest}
                    >
                      Submit <i className="fas fa-check ml-2"></i>
                    </button>
                  ) : (
                    <button 
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                      onClick={handleNextQuestion}
                    >
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Show confetti if test is completed */}
      {showConfetti && <ConfettiEffect />}
      
      {/* Show trophy animation if test is completed */}
      {showTrophy && testResult && (
        <TrophyAnimation 
          trophy={{
            id: 'completion',
            name: testResult.score >= 90 ? 'Stellar Achievement!' : 
                  testResult.score >= 70 ? 'Great Performance!' : 
                  testResult.score >= 50 ? 'Good Effort!' : 'Keep Learning!',
            description: `You've scored ${testResult.score}% on the ${currentTest.title}!`,
            icon: testResult.score >= 90 ? 'fa-award' : 
                  testResult.score >= 70 ? 'fa-trophy' : 
                  testResult.score >= 50 ? 'fa-medal' : 'fa-thumbs-up',
            iconColor: testResult.score >= 90 ? 'text-yellow-400' : 
                       testResult.score >= 70 ? 'text-blue-400' : 
                       testResult.score >= 50 ? 'text-green-400' : 'text-orange-400',
            status: 'unlocked'
          }}
        />
      )}
    </div>
  );
};

export default EnhancedTestModal;