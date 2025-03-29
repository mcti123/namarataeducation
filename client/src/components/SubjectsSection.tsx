import React from 'react';
import SubjectCard from './SubjectCard';
import { Subject } from '@/lib/data';

interface SubjectsSectionProps {
  subjects: Subject[];
  onSelectSubject: (subjectId: string) => void;
}

const SubjectsSection: React.FC<SubjectsSectionProps> = ({ subjects, onSelectSubject }) => {
  return (
    <section id="subjects" className="relative py-16 bg-spaceLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-baloo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Core Subjects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-spaceWhite/80">
            Practice mock tests in all your core subjects to prepare for exams
          </p>
        </div>
        
        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={() => onSelectSubject(subject.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
