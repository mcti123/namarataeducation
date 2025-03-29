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

// Additional science questions for more variety
const moreEasyQuestions: Question[] = [
  {
    id: 'easy-q6',
    text: 'Which of the following is the closest planet to the Sun?',
    options: ['Earth', 'Venus', 'Mercury', 'Mars'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Mercury is the closest planet to the Sun.'
  },
  {
    id: 'easy-q7',
    text: 'What is the name of the largest organ in the human body?',
    options: ['Brain', 'Liver', 'Heart', 'Skin'],
    correctAnswer: 3,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The skin is the largest organ in the human body.'
  },
  {
    id: 'easy-q8',
    text: 'What is the main function of the lungs?',
    options: ['To pump blood', 'To digest food', 'To breathe', 'To filter waste'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The main function of the lungs is to take in oxygen and expel carbon dioxide.'
  },
  {
    id: 'easy-q9',
    text: 'Which of these is NOT a sense organ?',
    options: ['Eye', 'Ear', 'Heart', 'Nose'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The heart is an organ that pumps blood, not a sense organ.'
  },
  {
    id: 'easy-q10',
    text: 'Which of the following animals is a mammal?',
    options: ['Snake', 'Fish', 'Frog', 'Rabbit'],
    correctAnswer: 3,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'A rabbit is a mammal because it has fur and feeds its young with milk.'
  }
];

const moreMediumQuestions: Question[] = [
  {
    id: 'medium-q6',
    text: 'What is the name of the process by which plants lose water through their leaves?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Condensation'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Transpiration is the process by which plants lose water vapor through pores in their leaves.'
  },
  {
    id: 'medium-q7',
    text: 'Which of the following is NOT a vertebrate?',
    options: ['Fish', 'Bird', 'Insect', 'Mammal'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Insects are invertebrates because they do not have a backbone.'
  },
  {
    id: 'medium-q8',
    text: 'Which layer of the atmosphere contains the ozone layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The ozone layer is located in the stratosphere, the second layer of Earth\'s atmosphere.'
  },
  {
    id: 'medium-q9',
    text: 'What type of energy is stored in food?',
    options: ['Kinetic energy', 'Thermal energy', 'Chemical energy', 'Nuclear energy'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Food contains chemical energy stored in the bonds between atoms.'
  },
  {
    id: 'medium-q10',
    text: 'Which of the following is NOT a renewable energy source?',
    options: ['Solar', 'Wind', 'Coal', 'Hydroelectric'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Coal is a fossil fuel and is not renewable because it takes millions of years to form.'
  }
];

const moreIntermediateQuestions: Question[] = [
  {
    id: 'intermediate-q6',
    text: 'What do we call the change of state from solid directly to gas without becoming a liquid?',
    options: ['Condensation', 'Sublimation', 'Deposition', 'Evaporation'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Sublimation is the process where a solid changes directly to a gas without passing through the liquid state.'
  },
  {
    id: 'intermediate-q7',
    text: 'Which of the following is an example of a physical change?',
    options: ['Burning wood', 'Cooking an egg', 'Melting ice', 'Rusting iron'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Melting ice is a physical change because the chemical composition remains unchanged.'
  },
  {
    id: 'intermediate-q8',
    text: 'Which planet has the Great Red Spot?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'The Great Red Spot is a persistent storm on the planet Jupiter.'
  },
  {
    id: 'intermediate-q9',
    text: 'What instrument is used to measure air pressure?',
    options: ['Thermometer', 'Barometer', 'Hygrometer', 'Anemometer'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'A barometer is used to measure atmospheric pressure.'
  },
  {
    id: 'intermediate-q10',
    text: 'What is the largest part of the human brain?',
    options: ['Cerebellum', 'Brain stem', 'Cerebrum', 'Hypothalamus'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'The cerebrum is the largest part of the human brain and controls voluntary actions, speech, and thinking.'
  }
];

const moreHardQuestions: Question[] = [
  {
    id: 'hard-q6',
    text: 'Which of these is NOT one of the four fundamental forces in physics?',
    options: ['Strong nuclear force', 'Electromagnetic force', 'Centrifugal force', 'Gravity'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Centrifugal force is not one of the four fundamental forces. The four fundamental forces are gravity, electromagnetic force, strong nuclear force, and weak nuclear force.'
  },
  {
    id: 'hard-q7',
    text: 'What is the process by which unstable atoms lose energy by emitting radiation?',
    options: ['Nuclear fission', 'Nuclear fusion', 'Radioactive decay', 'Thermal decomposition'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Radioactive decay is the process by which unstable nuclei emit radiation to reach a more stable state.'
  },
  {
    id: 'hard-q8',
    text: 'What law states that energy cannot be created or destroyed, only transformed?',
    options: ['Law of Conservation of Mass', 'Law of Conservation of Energy', 'Newton\'s First Law', 'Ohm\'s Law'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'The Law of Conservation of Energy states that energy cannot be created or destroyed, only converted from one form to another.'
  },
  {
    id: 'hard-q9',
    text: 'What is the name of the tiny particles that make up light?',
    options: ['Atoms', 'Molecules', 'Photons', 'Electrons'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Photons are the tiny particles that make up light and other forms of electromagnetic radiation.'
  },
  {
    id: 'hard-q10',
    text: 'Which of these is a characteristic of all living things?',
    options: ['Ability to fly', 'Ability to reproduce', 'Ability to speak', 'Ability to swim'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'The ability to reproduce is a characteristic of all living things.'
  }
];

// Function to generate tests based on difficulty
export function generateTestByDifficulty(difficulty: DifficultyLevel, subjectId: string) {
  // Combine original and additional questions
  const allEasyQuestions = [...scienceEasyQuestions, ...moreEasyQuestions];
  const allMediumQuestions = [...scienceMediumQuestions, ...moreMediumQuestions];
  const allIntermediateQuestions = [...scienceIntermediateQuestions, ...moreIntermediateQuestions];
  const allHardQuestions = [...scienceHardQuestions, ...moreHardQuestions];
  
  // Shuffle all question arrays first to ensure randomness
  const shuffledEasy = [...allEasyQuestions].sort(() => Math.random() - 0.5);
  const shuffledMedium = [...allMediumQuestions].sort(() => Math.random() - 0.5);
  const shuffledIntermediate = [...allIntermediateQuestions].sort(() => Math.random() - 0.5);
  const shuffledHard = [...allHardQuestions].sort(() => Math.random() - 0.5);
  
  // Create a unique ID for each question to ensure they're treated as new
  const uniqueId = Date.now().toString();
  
  const testQuestions: Question[] = [];
  
  switch(difficulty) {
    case 'easy':
      testQuestions.push(...shuffledEasy.slice(0, 7).map((q, i) => ({...q, id: `${uniqueId}-easy-${i}`})));
      testQuestions.push(...shuffledMedium.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      break;
    case 'medium':
      testQuestions.push(...shuffledEasy.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-easy-${i}`})));
      testQuestions.push(...shuffledMedium.slice(0, 5).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      testQuestions.push(...shuffledIntermediate.slice(0, 2).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
      break;
    case 'intermediate':
      testQuestions.push(...shuffledMedium.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      testQuestions.push(...shuffledIntermediate.slice(0, 5).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
      testQuestions.push(...shuffledHard.slice(0, 2).map((q, i) => ({...q, id: `${uniqueId}-hard-${i}`})));
      break;
    case 'hard':
      testQuestions.push(...shuffledIntermediate.slice(0, 2).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
      testQuestions.push(...shuffledHard.slice(0, 8).map((q, i) => ({...q, id: `${uniqueId}-hard-${i}`})));
      break;
    default:
      testQuestions.push(...shuffledEasy.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-easy-${i}`})));
      testQuestions.push(...shuffledMedium.slice(0, 4).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      testQuestions.push(...shuffledIntermediate.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
  }
  
  // Take exactly 10 questions or pad with defaults if needed
  let finalQuestions = testQuestions;
  if (testQuestions.length > 10) {
    finalQuestions = testQuestions.slice(0, 10);
  } else if (testQuestions.length < 10) {
    const additionalQuestions = [...shuffledMedium]
      .filter(q => !testQuestions.some(existing => existing.id === q.id))
      .slice(0, 10 - testQuestions.length)
      .map((q, i) => ({...q, id: `${uniqueId}-additional-${i}`}));
    finalQuestions = [...testQuestions, ...additionalQuestions];
  }
  
  // Get a random chapter based on subjectId
  const scienceChapters = [
    "Chapter 1: Introduction to Science",
    "Chapter 2: The Living World",
    "Chapter 3: Matter and Materials",
    "Chapter 4: Motion and Forces",
    "Chapter 5: Energy",
    "Chapter 6: Earth and Space",
    "Chapter 7: Human Body Systems",
    "Chapter 8: Environment and Ecosystems"
  ];
  
  const randomChapter = scienceChapters[Math.floor(Math.random() * scienceChapters.length)];
  
  // Shuffle final questions - creating a copy to avoid mutating
  const shuffled = [...finalQuestions].sort(() => Math.random() - 0.5);
  
  return {
    id: `science-test-${Date.now()}`,
    subjectId,
    title: `Science ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Test`,
    chapter: randomChapter,
    icon: "fa-atom",
    duration: 300, // 5 minutes for easier testing
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