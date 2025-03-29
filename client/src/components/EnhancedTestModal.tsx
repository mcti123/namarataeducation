import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  HiOutlineArrowLeft, 
  HiOutlineArrowRight, 
  HiCheck, 
  HiX, 
  HiOutlineClock, 
  HiOutlineCheckCircle, 
  HiOutlineXCircle, 
  HiOutlineQuestionMarkCircle, 
  HiOutlineTag, 
  HiOutlineLightningBolt, 
  HiOutlineClock as HiClock, 
  HiOutlineBadgeCheck
} from 'react-icons/hi';
import { Test, Question, UserAnswer, TestResult, DifficultyLevel } from '@/lib/data';
import { 
  scienceEasyQuestions, 
  scienceMediumQuestions, 
  scienceIntermediateQuestions, 
  scienceHardQuestions,
  generateTestByDifficulty
} from '@/lib/testData';
import { 
  generateSubjectTest, 
  getChaptersForSubject,
  mathChapters,
  scienceChapters,
  englishChapters,
  hindiChapters,
  socialChapters,
  sanskritChapters
} from '@/lib/subjectData';
import ConfettiEffect from './ConfettiEffect';
import TrophyAnimation from './TrophyAnimation';

interface EnhancedTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTest: Test;
  reducedMotion: boolean;
  subjectId: string;
}

type TestState = 'intro' | 'in-progress' | 'completed' | 'review';

const EnhancedTestModal: React.FC<EnhancedTestModalProps> = ({
  isOpen,
  onClose,
  initialTest,
  reducedMotion,
  subjectId
}) => {
  const [currentTest, setCurrentTest] = useState<Test>({ ...initialTest, questions: [...initialTest.questions] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [testState, setTestState] = useState<TestState>('intro');
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [showTrophy, setShowTrophy] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('easy');
  const [availableChapters, setAvailableChapters] = useState<string[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  
  // Load chapters based on subject ID
  useEffect(() => {
    // Get the appropriate chapters for the selected subject
    const subjectChapters = getChaptersForSubject(subjectId);
    setAvailableChapters(subjectChapters);
    
    // Create initial test for this subject
    const initialSubjectTest = generateSubjectTest(subjectId, difficulty);
    setCurrentTest(initialSubjectTest);
  }, [subjectId]);
  
  // Generate a new test with different questions based on difficulty
  const generateNewTest = (difficulty: DifficultyLevel, chapter?: string) => {
    let newTest;
    
    if (chapter) {
      // Find the chapter index (removing the "Chapter X: " prefix if needed)
      const chapterIndex = availableChapters.findIndex(c => c === chapter);
      // Generate a chapter-specific test
      newTest = generateSubjectTest(subjectId, difficulty, (chapterIndex + 1).toString());
    } else {
      // Generate a full subject test
      newTest = generateSubjectTest(subjectId, difficulty);
    }
    
    setCurrentTest(newTest);
    resetTest(newTest);
  };
  
  // Reset the test
  const resetTest = (test: Test) => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeRemaining(test.duration);
    setTestState('intro');
    setTestResult(null);
    setShowConfetti(false);
    setShowTrophy(false);
  };
  
  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (testState === 'in-progress' && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (testState === 'in-progress' && timeRemaining === 0) {
      // Auto-submit if time runs out
      submitTest();
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [testState, timeRemaining]);
  
  // Calculate the progress
  const progress = currentTest.questions.length > 0 
    ? ((currentQuestionIndex + 1) / currentTest.questions.length) * 100 
    : 0;
  
  // Get the current question
  const currentQuestion = currentTest.questions[currentQuestionIndex];
  
  // Format the remaining time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    const updatedAnswers = [...userAnswers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      answer => answer.questionId === currentQuestion.id
    );
    
    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex].selectedOption = optionIndex;
    } else {
      updatedAnswers.push({
        questionId: currentQuestion.id,
        selectedOption: optionIndex
      });
    }
    
    setUserAnswers(updatedAnswers);
  };
  
  // Get the selected option for the current question
  const getSelectedOption = (): number | null => {
    const answer = userAnswers.find(
      answer => answer.questionId === currentQuestion?.id
    );
    return answer ? answer.selectedOption : null;
  };
  
  // Navigate to the next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Last question, prompt for submission
      submitTest();
    }
  };
  
  // Navigate to the previous question
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  // Start the test
  const startTest = () => {
    setTestState('in-progress');
    setTimeRemaining(currentTest.duration);
  };
  
  // Start a new test with chapter selection
  const startChapterTest = (chapter: string) => {
    setSelectedChapter(chapter);
    generateNewTest(difficulty, chapter);
    setTestState('intro');
  };
  
  // Submit the test
  const submitTest = () => {
    const result = calculateTestResult();
    setTestResult(result);
    setTestState('completed');
    
    // Show confetti and trophy animations
    setTimeout(() => {
      setShowConfetti(true);
    }, 300);
    
    if (result.score >= 70) {
      setTimeout(() => {
        setShowTrophy(true);
      }, 1000);
    }
    
    // Determine next difficulty based on score
    if (result.score >= 90) {
      // If they did really well, increase difficulty by 2 levels if possible
      if (difficulty === 'easy') setDifficulty('intermediate');
      else if (difficulty === 'medium') setDifficulty('hard');
      else setDifficulty('hard'); // Stay at hard if already there
    } else if (result.score >= 70) {
      // If they did well, increase difficulty by 1 level
      if (difficulty === 'easy') setDifficulty('medium');
      else if (difficulty === 'medium') setDifficulty('intermediate');
      else if (difficulty === 'intermediate') setDifficulty('hard');
      else setDifficulty('hard'); // Stay at hard if already there
    } else if (result.score < 40) {
      // If they did poorly, decrease difficulty
      if (difficulty === 'hard') setDifficulty('intermediate');
      else if (difficulty === 'intermediate') setDifficulty('medium');
      else if (difficulty === 'medium') setDifficulty('easy');
      else setDifficulty('easy'); // Stay at easy if already there
    }
    // Otherwise keep the same difficulty
  };
  
  // View the test review
  const viewTestReview = () => {
    setTestState('review');
  };
  
  // Start a new test with new questions
  const takeTestAgain = () => {
    generateNewTest(difficulty);
    setTestState('intro');
  };
  
  // Calculate the test result
  const calculateTestResult = (): TestResult => {
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    
    currentTest.questions.forEach(question => {
      const answer = userAnswers.find(a => a.questionId === question.id);
      
      if (!answer || answer.selectedOption === null) {
        unattemptedCount++;
      } else if (answer.selectedOption === question.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    
    const totalQuestions = currentTest.questions.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    return {
      testId: currentTest.id,
      totalQuestions,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      unattempted: unattemptedCount,
      score,
      userAnswers,
      completedAt: new Date()
    };
  };
  
  // Get the difficulty badge color
  const getDifficultyColor = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'medium':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/50';
      case 'intermediate':
        return 'bg-orange-500/20 text-orange-500 border-orange-500/50';
      case 'hard':
        return 'bg-red-500/20 text-red-500 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/50';
    }
  };
  
  // Render the intro screen
  const renderIntroScreen = () => (
    <div className="flex flex-col items-center justify-center p-4 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{currentTest.title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Chapter: {currentTest.chapter}
          <span className="mx-2">•</span>
          <span className="flex items-center gap-1 inline-flex">
            <HiClock className="inline" />
            {Math.floor(currentTest.duration / 60)} minutes
          </span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="outline" className={`${getDifficultyColor(currentTest.difficulty || 'medium')}`}>
            <HiOutlineTag className="mr-1" /> {currentTest.difficulty || 'Medium'} Difficulty
          </Badge>
          <Badge variant="outline">
            <HiOutlineLightningBolt className="mr-1" /> {currentTest.questions.length} Questions
          </Badge>
        </div>
      </div>
      
      <Tabs defaultValue="full" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="full">Full Test</TabsTrigger>
          <TabsTrigger value="chapter">Chapter Tests</TabsTrigger>
        </TabsList>
        
        <TabsContent value="full" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Take Full Subject Test</CardTitle>
              <CardDescription>
                This test includes questions from all chapters. Choose your difficulty level below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={difficulty === 'easy' ? 'default' : 'outline'} 
                  onClick={() => setDifficulty('easy')}
                  className="flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-green-500"></span> Easy
                </Button>
                <Button 
                  variant={difficulty === 'medium' ? 'default' : 'outline'} 
                  onClick={() => setDifficulty('medium')}
                  className="flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span> Medium
                </Button>
                <Button 
                  variant={difficulty === 'intermediate' ? 'default' : 'outline'} 
                  onClick={() => setDifficulty('intermediate')}
                  className="flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span> Intermediate
                </Button>
                <Button 
                  variant={difficulty === 'hard' ? 'default' : 'outline'} 
                  onClick={() => setDifficulty('hard')}
                  className="flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-red-500"></span> Hard
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => { 
                generateNewTest(difficulty);
                startTest();
              }} className="w-full">Start Test</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="chapter" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chapter-wise Tests</CardTitle>
              <CardDescription>
                Select a specific chapter to test your knowledge on that topic.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[300px] overflow-y-auto scrollbar-hide">
              <div className="space-y-2">
                {availableChapters.map((chapter, index) => (
                  <div 
                    key={index} 
                    className="p-3 border rounded-lg hover:bg-muted/50 flex justify-between items-center group"
                  >
                    <span className="cursor-text">{chapter}</span>
                    <Button 
                      size="sm" 
                      className="transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        startChapterTest(chapter);
                        startTest();
                      }}
                    >
                      Take Test
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
  
  // Render the test in progress
  const renderTestInProgress = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center">
          <span className="font-medium">Question {currentQuestionIndex + 1}/{currentTest.questions.length}</span>
          <Badge variant="outline" className={`ml-3 ${getDifficultyColor(currentQuestion.difficulty)}`}>
            {currentQuestion.difficulty}
          </Badge>
        </div>
        <div className="flex items-center">
          <HiOutlineClock className="mr-1" />
          <span className="font-mono">{formatTime(timeRemaining)}</span>
        </div>
      </div>
      
      <Progress value={progress} className="mb-6" />
      
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xl font-medium mb-6">{currentQuestion.text}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div 
              key={index}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                getSelectedOption() === index 
                  ? 'border-primary bg-primary/10' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  getSelectedOption() === index
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-gray-300 dark:border-gray-600'
                }`}>
                  {getSelectedOption() === index && <HiCheck />}
                </div>
                <div>
                  {option}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t mt-4 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <HiOutlineArrowLeft className="mr-2" /> Previous
        </Button>
        
        {currentQuestionIndex < currentTest.questions.length - 1 ? (
          <Button onClick={goToNextQuestion}>
            Next <HiOutlineArrowRight className="ml-2" />
          </Button>
        ) : (
          <Button onClick={submitTest}>
            Submit Test
          </Button>
        )}
      </div>
    </div>
  );
  
  // Render the test completion screen
  const renderTestCompletion = () => (
    <div className="flex flex-col items-center justify-center p-4 space-y-6 relative">
      {showConfetti && !reducedMotion && <ConfettiEffect count={100} duration={3000} />}
      
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">Test Completed!</h2>
        <p className="text-gray-500 dark:text-gray-400">
          You've completed the {currentTest.title}
        </p>
      </div>
      
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Your Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="flex items-center justify-center w-32 h-32 rounded-full bg-primary/10">
                  <span className="text-4xl font-bold">{testResult?.score}%</span>
                </div>
                {showTrophy && !reducedMotion && (
                  <div className="absolute -top-4 -right-4">
                    <TrophyAnimation trophy={{
                      id: '1',
                      name: 'Test Achievement',
                      description: 'Completed a test with excellent score',
                      icon: 'trophy',
                      iconColor: 'gold',
                      status: 'unlocked'
                    }} />
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col items-center p-3 bg-green-500/10 rounded-lg">
                <HiOutlineCheckCircle className="text-green-500 text-xl mb-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Correct</span>
                <span className="font-bold text-lg">{testResult?.correctAnswers}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-red-500/10 rounded-lg">
                <HiOutlineXCircle className="text-red-500 text-xl mb-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Incorrect</span>
                <span className="font-bold text-lg">{testResult?.incorrectAnswers}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-blue-500/10 rounded-lg">
                <HiOutlineBadgeCheck className="text-blue-500 text-xl mb-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Total</span>
                <span className="font-bold text-lg">{testResult?.totalQuestions}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-amber-500/10 rounded-lg">
                <HiOutlineQuestionMarkCircle className="text-amber-500 text-xl mb-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Unattempted</span>
                <span className="font-bold text-lg">{testResult?.unattempted}</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Next Steps:</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {testResult && testResult.score >= 90 
                  ? "Excellent work! You're ready for a more challenging test." 
                  : testResult && testResult.score >= 70 
                    ? "Good job! You've mastered most of the concepts." 
                    : testResult && testResult.score >= 50 
                      ? "Nice effort! Review the questions you missed and try again." 
                      : "Keep practicing! Review the material and try again."}
              </p>
              
              <div className="flex gap-2 flex-col sm:flex-row">
                <Button onClick={viewTestReview} className="flex-1">
                  Review Answers
                </Button>
                <Button onClick={takeTestAgain} variant="outline" className="flex-1">
                  Take Again
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  
  // Render the test review screen
  const renderTestReview = () => {
    if (!testResult) return null;
    
    return (
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Review: {currentTest.title}</h2>
          <Badge className={`${getDifficultyColor(currentTest.difficulty || 'medium')}`}>
            {currentTest.difficulty}
          </Badge>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {currentTest.questions.map((question, qIndex) => {
            const userAnswer = userAnswers.find(a => a.questionId === question.id);
            const isCorrect = userAnswer?.selectedOption === question.correctAnswer;
            const isUnattempted = !userAnswer || userAnswer.selectedOption === null;
            
            return (
              <div key={qIndex} className="mb-6 border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium">Question {qIndex + 1}</h3>
                  {isUnattempted ? (
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/50">
                      <HiOutlineQuestionMarkCircle className="mr-1" /> Unattempted
                    </Badge>
                  ) : isCorrect ? (
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/50">
                      <HiOutlineCheckCircle className="mr-1" /> Correct
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/50">
                      <HiOutlineXCircle className="mr-1" /> Incorrect
                    </Badge>
                  )}
                </div>
                
                <p className="mb-4">{question.text}</p>
                
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <div 
                      key={oIndex}
                      className={`p-3 border rounded-lg flex items-start ${
                        question.correctAnswer === oIndex
                          ? 'bg-green-500/10 border-green-500/50'
                          : userAnswer?.selectedOption === oIndex && userAnswer.selectedOption !== question.correctAnswer
                            ? 'bg-red-500/10 border-red-500/50'
                            : ''
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        question.correctAnswer === oIndex
                          ? 'bg-green-500 text-white'
                          : userAnswer?.selectedOption === oIndex && userAnswer.selectedOption !== question.correctAnswer
                            ? 'bg-red-500 text-white'
                            : 'border'
                      }`}>
                        {question.correctAnswer === oIndex ? (
                          <HiCheck />
                        ) : userAnswer?.selectedOption === oIndex ? (
                          <HiX />
                        ) : null}
                      </div>
                      <div className="flex-1">
                        <div>{option}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {question.explanation && (
                  <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                    <p className="text-sm font-medium text-blue-500 mb-1">Explanation:</p>
                    <p className="text-sm">{question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="border-t pt-4 mt-4 flex gap-2 justify-end">
          <Button onClick={() => setTestState('completed')} variant="outline">
            Back to Results
          </Button>
          <Button onClick={takeTestAgain}>
            Take Test Again
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>
            {testState === 'intro' && 'Start Test'}
            {testState === 'in-progress' && currentTest.title}
            {testState === 'completed' && 'Test Completed'}
            {testState === 'review' && 'Test Review'}
          </DialogTitle>
          {testState === 'intro' && (
            <DialogDescription>
              Answer the questions to test your knowledge.
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden">
          {testState === 'intro' && renderIntroScreen()}
          {testState === 'in-progress' && renderTestInProgress()}
          {testState === 'completed' && renderTestCompletion()}
          {testState === 'review' && renderTestReview()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedTestModal;