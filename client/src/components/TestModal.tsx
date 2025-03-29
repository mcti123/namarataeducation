import React, { useState, useEffect } from 'react';
import { Test } from '@/lib/data';
import ConfettiEffect from './ConfettiEffect';
import TrophyAnimation from './TrophyAnimation';

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  test: Test;
  reducedMotion: boolean;
}

const TestModal: React.FC<TestModalProps> = ({ isOpen, onClose, test, reducedMotion }) => {
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(test.duration * 60); // in seconds
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTrophy, setShowTrophy] = useState(false);
  
  useEffect(() => {
    // Initialize selected answers array
    setSelectedAnswers(new Array(test.questions.length).fill(-1));
  }, [test]);
  
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
  
  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setShowResults(false);
      setCurrentQuestionIndex(0);
      setTimeLeft(test.duration * 60);
      setSelectedAnswers(new Array(test.questions.length).fill(-1));
      setShowConfetti(false);
      setShowTrophy(false);
    }
  }, [isOpen, test]);
  
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmitTest = () => {
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
  
  const calculateScore = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unattempted = 0;
    
    selectedAnswers.forEach((answer, index) => {
      if (answer === -1) {
        unattempted++;
      } else if (answer === test.questions[index].correctAnswer) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });
    
    const score = (correctAnswers / test.questions.length) * 100;
    
    return {
      score: Math.round(score),
      correctAnswers,
      incorrectAnswers,
      unattempted
    };
  };
  
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  if (!isOpen) return null;
  
  const scoreData = calculateScore();
  const currentQuestion = test.questions[currentQuestionIndex];
  
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
                  <div className="bg-space rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-spaceWhite">Your Score</span>
                      <span className="text-2xl font-bold text-primary">{scoreData.score}<span className="text-lg">%</span></span>
                    </div>
                    <div className="w-full bg-spaceMid rounded-full h-3 mb-4">
                      <div className="bg-primary h-3 rounded-full" style={{ width: `${scoreData.score}%` }}></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-500">{scoreData.correctAnswers}</div>
                        <div className="text-xs text-spaceWhite/70">Correct</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-500">{scoreData.incorrectAnswers}</div>
                        <div className="text-xs text-spaceWhite/70">Incorrect</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-500">{scoreData.unattempted}</div>
                        <div className="text-xs text-spaceWhite/70">Unattempted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-space px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  View Solutions
                </button>
                <button 
                  type="button" 
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-spaceMid shadow-sm px-4 py-2 bg-spaceLight text-base font-medium text-spaceWhite hover:bg-space focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
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
                    <i className={`fas ${test.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-baloo font-semibold text-white">{test.title}</h3>
                    <p className="text-sm text-white/80">{test.chapter}</p>
                  </div>
                </div>
                <div className="text-sm text-white/80">
                  <i className="fas fa-clock mr-1"></i> {formatTime(timeLeft)}
                </div>
              </div>
              
              {/* Question */}
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1} of {test.questions.length}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-spaceWhite mb-3">{currentQuestion.text}</h4>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <div 
                          key={index}
                          className={`flex items-center p-3 rounded-lg border ${selectedAnswers[currentQuestionIndex] === index ? 'border-primary bg-space/50' : 'border-spaceMid'} hover:border-primary hover:bg-space/50 transition cursor-pointer`}
                          onClick={() => handleOptionSelect(currentQuestionIndex, index)}
                        >
                          <input 
                            type="radio" 
                            name={`q${currentQuestionIndex}`} 
                            id={`q${currentQuestionIndex}a${index}`} 
                            className="h-4 w-4 text-primary focus:ring-primary border-spaceMid"
                            checked={selectedAnswers[currentQuestionIndex] === index}
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
                  <div className="flex space-x-2">
                    {test.questions.map((_, index) => {
                      if (index < 5) {
                        return (
                          <span 
                            key={index} 
                            className={`w-6 h-6 rounded-full ${index === currentQuestionIndex ? 'bg-primary' : selectedAnswers[index] !== -1 ? 'bg-green-500' : 'bg-spaceMid'} text-white text-xs flex items-center justify-center cursor-pointer`}
                            onClick={() => setCurrentQuestionIndex(index)}
                          >
                            {index + 1}
                          </span>
                        );
                      }
                      return null;
                    })}
                    {test.questions.length > 5 && (
                      <span className="text-spaceWhite/70">...</span>
                    )}
                  </div>
                  {currentQuestionIndex === test.questions.length - 1 ? (
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
      {showTrophy && (
        <TrophyAnimation 
          trophy={{
            id: 'completion',
            name: 'Test Completed!',
            description: `You've completed the ${test.title}!`,
            icon: 'fa-trophy',
            iconColor: 'text-yellow-400',
            status: 'unlocked'
          }}
        />
      )}
    </div>
  );
};

export default TestModal;
