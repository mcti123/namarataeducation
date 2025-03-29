import { Question, Test } from '@/lib/data';

export type DifficultyLevel = 'easy' | 'medium' | 'intermediate' | 'hard';

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
}

export interface TestResult {
  testId: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  score: number;
  userAnswers: UserAnswer[];
  completedAt: Date;
}

// Scientific questions for tests
export const scienceEasyQuestions = [
  {
    id: 'easy-q1',
    text: 'Which of the following is NOT a state of matter?',
    options: ['Solid', 'Liquid', 'Energy', 'Gas'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Energy is not a state of matter. States of matter include solid, liquid, gas, and plasma.'
  },
  {
    id: 'easy-q2',
    text: 'What is the basic unit of matter?',
    options: ['Cell', 'Atom', 'Molecule', 'Compound'],
    correctAnswer: 1,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The atom is the basic unit of matter that makes up all substances.'
  },
  {
    id: 'easy-q3',
    text: 'Which state of matter has a definite shape and volume?',
    options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
    correctAnswer: 0,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Solids have both definite shape and definite volume.'
  },
  {
    id: 'easy-q4',
    text: 'What is the name of the force that pulls objects toward Earth?',
    options: ['Magnetism', 'Friction', 'Gravity', 'Tension'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Gravity is the force that attracts objects toward Earth.'
  },
  {
    id: 'easy-q5',
    text: 'Which of these is a plant cell part that animal cells do not have?',
    options: ['Nucleus', 'Cell membrane', 'Cell wall', 'Mitochondria'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Cell walls are found in plant cells but not in animal cells.'
  }
];

export const scienceMediumQuestions = [
  {
    id: 'medium-q1',
    text: 'Which of the following processes adds water vapor to the air?',
    options: ['Condensation', 'Precipitation', 'Evaporation', 'Infiltration'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Evaporation is the process that converts liquid water to water vapor, adding moisture to the air.'
  },
  {
    id: 'medium-q2',
    text: 'What is the formula for water?',
    options: ['H2O2', 'CO2', 'H2O', 'O2'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Water has the chemical formula H2O, indicating it has two hydrogen atoms and one oxygen atom.'
  },
  {
    id: 'medium-q3',
    text: 'Which organelle is known as the "powerhouse" of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic reticulum'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Mitochondria are called the "powerhouse" because they produce most of the cell\'s energy through cellular respiration.'
  },
  {
    id: 'medium-q4',
    text: 'What process do plants use to make their own food?',
    options: ['Respiration', 'Fermentation', 'Photosynthesis', 'Digestion'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Plants use photosynthesis to convert light energy into chemical energy stored in glucose.'
  },
  {
    id: 'medium-q5',
    text: 'What is the most abundant gas in Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere.'
  }
];

export const scienceIntermediateQuestions = [
  {
    id: 'intermediate-q1',
    text: 'Which of the following is NOT a simple machine?',
    options: ['Lever', 'Pulley', 'Engine', 'Inclined plane'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'An engine is a complex machine made up of multiple simple machines working together.'
  },
  {
    id: 'intermediate-q2',
    text: 'What is the pH of a neutral solution?',
    options: ['0', '7', '14', '10'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'A neutral solution has a pH of 7, which is neither acidic nor basic.'
  },
  {
    id: 'intermediate-q3',
    text: 'Which layer of the Earth is made of liquid iron and nickel?',
    options: ['Crust', 'Mantle', 'Outer core', 'Inner core'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'The outer core of Earth is made of liquid iron and nickel.'
  },
  {
    id: 'intermediate-q4',
    text: 'What is the process by which rocks are broken down into smaller pieces?',
    options: ['Erosion', 'Weathering', 'Deposition', 'Condensation'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Weathering is the process that breaks down rocks into smaller pieces through physical, chemical or biological means.'
  },
  {
    id: 'intermediate-q5',
    text: 'Which type of rock forms from cooling magma or lava?',
    options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Composite'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Igneous rocks form when molten rock (magma or lava) cools and solidifies.'
  }
];

export const scienceHardQuestions = [
  {
    id: 'hard-q1',
    text: 'Which of Newton\'s laws states that for every action, there is an equal and opposite reaction?',
    options: ['First law', 'Second law', 'Third law', 'Law of gravity'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Newton\'s Third Law of Motion states that for every action, there is an equal and opposite reaction.'
  },
  {
    id: 'hard-q2',
    text: 'What is the main function of the enzyme amylase?',
    options: ['To break down proteins', 'To break down fats', 'To break down carbohydrates', 'To break down nucleic acids'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Amylase is an enzyme that helps break down complex carbohydrates into simple sugars.'
  },
  {
    id: 'hard-q3',
    text: 'Which of the following is an example of a chemical change?',
    options: ['Melting ice', 'Cutting paper', 'Rusting iron', 'Dissolving sugar in water'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Rusting iron is a chemical change because it creates a new substance (iron oxide) with different properties.'
  },
  {
    id: 'hard-q4',
    text: 'What is the function of the chlorophyll in plants?',
    options: ['To absorb light for photosynthesis', 'To transport water', 'To store food', 'To provide support'],
    correctAnswer: 0,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Chlorophyll is the green pigment in plants that absorbs light energy needed for photosynthesis.'
  },
  {
    id: 'hard-q5',
    text: 'Which of the following is the correct sequence of the classification hierarchy from largest to smallest?',
    options: ['Kingdom, Phylum, Class, Order, Family, Genus, Species', 'Species, Genus, Family, Order, Class, Phylum, Kingdom', 'Kingdom, Class, Phylum, Order, Family, Genus, Species', 'Phylum, Kingdom, Class, Order, Family, Genus, Species'],
    correctAnswer: 0,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'The correct taxonomic hierarchy from largest to smallest is Kingdom, Phylum, Class, Order, Family, Genus, Species.'
  }
];

// Function to generate tests based on difficulty
export function generateTestByDifficulty(difficulty: DifficultyLevel, subjectId: string) {
  const testQuestions: Question[] = [];
  
  switch(difficulty) {
    case 'easy':
      testQuestions.push(...scienceEasyQuestions.slice(0, 7));
      testQuestions.push(...scienceMediumQuestions.slice(0, 3));
      break;
    case 'medium':
      testQuestions.push(...scienceEasyQuestions.slice(0, 3));
      testQuestions.push(...scienceMediumQuestions.slice(0, 5));
      testQuestions.push(...scienceIntermediateQuestions.slice(0, 2));
      break;
    case 'intermediate':
      testQuestions.push(...scienceMediumQuestions.slice(0, 3));
      testQuestions.push(...scienceIntermediateQuestions.slice(0, 5));
      testQuestions.push(...scienceHardQuestions.slice(0, 2));
      break;
    case 'hard':
      testQuestions.push(...scienceIntermediateQuestions.slice(0, 2));
      testQuestions.push(...scienceHardQuestions);
      break;
    default:
      testQuestions.push(...scienceEasyQuestions.slice(0, 3));
      testQuestions.push(...scienceMediumQuestions.slice(0, 4));
      testQuestions.push(...scienceIntermediateQuestions.slice(0, 3));
  }
  
  // Take exactly 10 questions or pad with defaults if needed
  let finalQuestions = testQuestions;
  if (testQuestions.length > 10) {
    finalQuestions = testQuestions.slice(0, 10);
  } else if (testQuestions.length < 10) {
    const additionalQuestions = [...scienceMediumQuestions]
      .filter(q => !testQuestions.some(existing => existing.id === q.id))
      .slice(0, 10 - testQuestions.length);
    finalQuestions = [...testQuestions, ...additionalQuestions];
  }
  
  // Shuffle questions - creating a copy to avoid mutating
  const shuffled = [...finalQuestions].sort(() => Math.random() - 0.5);
  
  return {
    id: `science-test-${Date.now()}`,
    subjectId,
    title: `Science ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Test`,
    chapter: "Chapter 3: Matter and Materials",
    icon: "fa-atom",
    duration: 30,
    difficulty,
    generatedBy: 'ai' as const,
    questions: shuffled
  };
}

// Default science test with 10 questions (for backward compatibility)
export const scienceTest: Test = {
  id: 'science-test-1',
  subjectId: 'science',
  title: 'Science Mock Test',
  chapter: 'Chapter 3: Matter and Materials',
  icon: 'fa-atom',
  duration: 30,
  difficulty: 'medium',
  generatedBy: 'system',
  questions: [
    ...scienceEasyQuestions.slice(0, 3),
    ...scienceMediumQuestions.slice(0, 4),
    ...scienceIntermediateQuestions.slice(0, 3)
  ]
};