import React, { useState } from 'react';
import { Test, Question } from '@/lib/data';

interface TestSampleSectionProps {
  test: Test;
}

const TestSampleSection: React.FC<TestSampleSectionProps> = ({ test }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState('28:45');
  
  const currentQuestion = test.questions[currentQuestionIndex];
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  return (
    <section id="test-sample" className="relative py-16 bg-space">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-baloo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            How Does It Work?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-spaceWhite/80">
            Take interactive mock tests, track your progress, and improve your scores
          </p>
        </div>
        
        {/* Sample Test Card */}
        <div className="bg-spaceLight rounded-2xl shadow-2xl overflow-hidden border border-spaceMid">
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
            <div className="flex items-center">
              <div className="text-sm text-white/80 mr-4">
                <i className="fas fa-clock mr-1"></i> {test.duration} mins
              </div>
              <div className="text-sm text-white/80">
                <i className="fas fa-question-circle mr-1"></i> {test.questions.length} Questions
              </div>
            </div>
          </div>
          
          {/* Question Sample */}
          <div className="p-6">
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1} of {test.questions.length}</span>
                <span className="text-sm font-medium text-spaceWhite/70">Time left: {timeLeft}</span>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium text-spaceWhite mb-3">{currentQuestion.text}</h4>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <div 
                      key={index}
                      className={`flex items-center p-3 rounded-lg border ${selectedOption === index ? 'border-primary bg-space/50' : 'border-spaceMid'} hover:border-primary hover:bg-space/50 transition cursor-pointer`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <input 
                        type="radio" 
                        name={`q${currentQuestionIndex}`} 
                        id={`q${currentQuestionIndex}a${index}`} 
                        className="h-4 w-4 text-primary focus:ring-primary border-spaceMid"
                        checked={selectedOption === index}
                        onChange={() => handleOptionSelect(index)}
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
                        className={`w-6 h-6 rounded-full ${index === currentQuestionIndex ? 'bg-primary' : 'bg-spaceMid'} text-white text-xs flex items-center justify-center`}
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
              <button 
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === test.questions.length - 1}
              >
                Next <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* 3D Decorative Elements - These will be implemented using React Three Fiber */}
        <div className="relative mt-12 h-32 pointer-events-none">
          {/* These would be implemented as actual 3D objects in a production app */}
          <div className="ruler-placeholder absolute top-10 left-[15%] w-40 h-6 bg-yellow-200 rounded-sm"></div>
          <div className="calculator-placeholder absolute top-5 right-[20%] w-16 h-20 bg-gray-800 rounded-md"></div>
          <div className="paintbrush-placeholder absolute bottom-5 left-[40%] w-2 h-24 bg-amber-700 rounded-b-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default TestSampleSection;
