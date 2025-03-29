import React from 'react';
import { Subject } from '@/lib/data';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }
    
    return stars;
  };

  return (
    <div className="relative bg-space border border-spaceMid rounded-xl overflow-hidden transition transform hover:-translate-y-2 duration-300 shadow-xl book-hover">
      <div className={`absolute top-3 right-3 w-10 h-10 rounded-full ${subject.backgroundColor} flex items-center justify-center`}>
        <i className={`fas ${subject.icon} ${subject.color}`}></i>
      </div>
      <div className="p-6">
        <div className={`w-16 h-16 mb-4 rounded-lg ${subject.iconBackgroundColor} flex items-center justify-center`}>
          <i className={`fas ${subject.icon} text-3xl ${subject.color}`}></i>
        </div>
        <h3 className="text-2xl font-baloo font-bold mb-2 text-spaceWhite">{subject.name}</h3>
        <p className="text-sm text-spaceWhite/70 mb-4">
          {subject.description}
        </p>
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-xs font-medium text-spaceWhite/70">Progress</span>
            <span className="text-xs font-medium text-spaceWhite/70">{subject.progress}%</span>
          </div>
          <div className="w-full bg-spaceMid rounded-full h-2">
            <div 
              className={`h-2 rounded-full`} 
              style={{ 
                width: `${subject.progress}%`,
                backgroundColor: subject.color 
              }}
            ></div>
          </div>
        </div>
        {/* Star Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {renderStars(subject.rating)}
          </div>
          <span className="ml-2 text-xs text-spaceWhite/70">{subject.rating}/5 Rating</span>
        </div>
        <button 
          onClick={onClick}
          className="w-full px-4 py-2 text-white rounded-lg font-medium transition"
          style={{ backgroundColor: subject.color }}
        >
          Start Practice Test
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
