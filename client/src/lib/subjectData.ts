import { Question, Test } from '@/lib/data';
import { 
  DifficultyLevel, 
  scienceEasyQuestions, 
  scienceMediumQuestions, 
  scienceIntermediateQuestions, 
  scienceHardQuestions 
} from './testData';

// Math Chapters based on NCERT 6th class syllabus
export const mathChapters = [
  "Chapter 1: Knowing Our Numbers",
  "Chapter 2: Whole Numbers",
  "Chapter 3: Playing with Numbers",
  "Chapter 4: Basic Geometrical Ideas",
  "Chapter 5: Understanding Elementary Shapes",
  "Chapter 6: Integers",
  "Chapter 7: Fractions",
  "Chapter 8: Decimals",
  "Chapter 9: Data Handling",
  "Chapter 10: Mensuration",
  "Chapter 11: Algebra",
  "Chapter 12: Ratio and Proportion",
  "Chapter 13: Symmetry",
  "Chapter 14: Practical Geometry",
];

// Science Chapters based on NCERT 6th class syllabus
export const scienceChapters = [
  "Chapter 1: Food: Where Does It Come From?",
  "Chapter 2: Components of Food",
  "Chapter 3: Fibre to Fabric",
  "Chapter 4: Sorting Materials into Groups",
  "Chapter 5: Separation of Substances",
  "Chapter 6: Changes Around Us",
  "Chapter 7: Getting to Know Plants",
  "Chapter 8: Body Movements",
  "Chapter 9: The Living Organisms and Their Surroundings",
  "Chapter 10: Motion and Measurement of Distances",
  "Chapter 11: Light, Shadows and Reflections",
  "Chapter 12: Electricity and Circuits",
  "Chapter 13: Fun with Magnets",
  "Chapter 14: Water",
  "Chapter 15: Air Around Us",
  "Chapter 16: Garbage In, Garbage Out",
];

// English Chapters based on NCERT 6th class syllabus (from Honeysuckle textbook)
export const englishChapters = [
  "Chapter 1: Who Did Patrick's Homework?",
  "Chapter 2: How the Dog Found Himself a New Master!",
  "Chapter 3: Taro's Reward",
  "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
  "Chapter 5: A Different Kind of School",
  "Chapter 6: Who I Am",
  "Chapter 7: Fair Play",
  "Chapter 8: A Game of Chance",
  "Chapter 9: Desert Animals",
  "Chapter 10: The Banyan Tree",
  "Poetry: A House, A Home",
  "Poetry: The Kite",
  "Poetry: The Quarrel",
  "Poetry: Beauty",
  "Poetry: Where Do All the Teachers Go?",
  "Poetry: The Wonderful Words",
];

// Hindi Chapters based on NCERT 6th class syllabus (from Vasant)
export const hindiChapters = [
  "पाठ 1: वह चिड़िया जो",
  "पाठ 2: बचपन",
  "पाठ 3: नादान दोस्त",
  "पाठ 4: चाँद से थोड़ी सी गप्पें",
  "पाठ 5: अक्षरों का महत्व",
  "पाठ 6: पार नज़र के",
  "पाठ 7: साथी हाथ बढ़ाना",
  "पाठ 8: ऐसे-ऐसे",
  "पाठ 9: टिकट-अलबम",
  "पाठ 10: झाँसी की रानी",
  "पाठ 11: जो देखकर भी नहीं देखते",
  "पाठ 12: संसार पुस्तक है",
  "पाठ 13: मैं सबसे छोटी होऊँ",
  "पाठ 14: लोकगीत",
  "पाठ 15: नौकर",
  "पाठ 16: वन के मार्ग में",
  "पाठ 17: साँस-साँस में बाँस",
];

// Social Studies Chapters based on NCERT 6th class syllabus
export const socialChapters = [
  // History (Our Pasts)
  "Chapter 1: What, Where, How and When?",
  "Chapter 2: On the Trail of the Earliest People",
  "Chapter 3: From Gathering to Growing Food",
  "Chapter 4: In the Earliest Cities",
  "Chapter 5: What Books and Burials Tell Us",
  "Chapter 6: Kingdoms, Kings and an Early Republic",
  "Chapter 7: New Questions and Ideas",
  "Chapter 8: Ashoka, the Emperor Who Gave Up War",
  "Chapter 9: Vital Villages, Thriving Towns",
  "Chapter 10: Traders, Kings and Pilgrims",
  "Chapter 11: New Empires and Kingdoms",
  // Geography (The Earth: Our Habitat)
  "Chapter 1: The Earth in the Solar System",
  "Chapter 2: Globe: Latitudes and Longitudes",
  "Chapter 3: Motions of the Earth",
  "Chapter 4: Maps",
  "Chapter 5: Major Domains of the Earth",
  "Chapter 6: Major Landforms of the Earth",
  "Chapter 7: Our Country – India",
  "Chapter 8: India: Climate, Vegetation and Wildlife",
  // Civics (Social and Political Life)
  "Chapter 1: Understanding Diversity",
  "Chapter 2: Diversity and Discrimination",
  "Chapter 3: What is Government?",
  "Chapter 4: Key Elements of a Democratic Government",
  "Chapter 5: Panchayati Raj",
  "Chapter 6: Rural Administration",
  "Chapter 7: Urban Administration",
  "Chapter 8: Rural Livelihoods",
  "Chapter 9: Urban Livelihoods",
];

// Sanskrit Chapters based on NCERT 6th class syllabus
export const sanskritChapters = [
  "पाठ 1: शब्द परिचयः",
  "पाठ 2: अकारान्त-पुँल्लिङ्गः",
  "पाठ 3: आकारान्त-स्त्रीलिङ्गः",
  "पाठ 4: अकारान्त-नपुंसकलिङ्गः",
  "पाठ 5: सर्वनाम-परिचयः",
  "पाठ 6: धातु-परिचयः (वर्तमानकालः)",
  "पाठ 7: मम विद्यालयः",
  "पाठ 8: मम परिवारः",
  "पाठ 9: मम दिनचर्या",
  "पाठ 10: वृक्षाः",
  "पाठ 11: सन्तोष: परमं सुखम्",
  "पाठ 12: अस्माकं प्रिय: देशः",
  "पाठ 13: विद्या धनम्",
  "पाठ 14: अहम् खादामि",
  "पाठ 15: किम् करोति कः",
];

// Math Questions based on NCERT 6th class syllabus
export const mathEasyQuestions: Question[] = [
  {
    id: 'math-easy-q1',
    text: 'What is the place value of 5 in 7,654,321?',
    options: ['5', '50', '5,000', '50,000'],
    correctAnswer: 3,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The place value of 5 in 7,654,321 is 50,000 (5 × 10,000).'
  },
  {
    id: 'math-easy-q2',
    text: 'Which of the following is the successor of 9999?',
    options: ['9998', '9990', '10000', '10001'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The successor of a number is the number that comes immediately after it. So the successor of 9999 is 10000.'
  },
  {
    id: 'math-easy-q3',
    text: 'What is the sum of 325 + 457?',
    options: ['682', '782', '772', '872'],
    correctAnswer: 1,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '325 + 457 = 782'
  },
  {
    id: 'math-easy-q4',
    text: 'Which is the smallest whole number?',
    options: ['0', '1', '-1', 'None of these'],
    correctAnswer: 0,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Zero (0) is the smallest whole number.'
  },
  {
    id: 'math-easy-q5',
    text: 'How many lines of symmetry does a rectangle have?',
    options: ['1', '2', '4', 'Infinite'],
    correctAnswer: 1,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'A rectangle has 2 lines of symmetry - one horizontal through the middle and one vertical through the middle.'
  },
];

export const mathMediumQuestions: Question[] = [
  {
    id: 'math-medium-q1',
    text: 'What is the HCF of 24 and 36?',
    options: ['6', '12', '18', '24'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36. The highest common factor is 12.'
  },
  {
    id: 'math-medium-q2',
    text: 'Simplify: -5 + 8',
    options: ['3', '-3', '13', '-13'],
    correctAnswer: 0,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '-5 + 8 = 3'
  },
  {
    id: 'math-medium-q3',
    text: 'Express 3/5 as a decimal.',
    options: ['0.3', '0.6', '0.35', '0.6 repeating'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '3/5 = 3 ÷ 5 = 0.6'
  },
  {
    id: 'math-medium-q4',
    text: 'What is the perimeter of a square with side 7 cm?',
    options: ['14 cm', '21 cm', '28 cm', '49 cm'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The perimeter of a square = 4 × side = 4 × 7 = 28 cm'
  },
  {
    id: 'math-medium-q5',
    text: 'If the cost of 5 pens is ₹75, what is the cost of 8 pens?',
    options: ['₹90', '₹100', '₹120', '₹125'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Cost of 1 pen = ₹75 ÷ 5 = ₹15, Cost of 8 pens = 8 × ₹15 = ₹120'
  },
];

export const mathIntermediateQuestions: Question[] = [
  {
    id: 'math-intermediate-q1',
    text: 'Solve for x: 3x - 7 = 14',
    options: ['5', '7', '9', '21'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: '3x - 7 = 14, 3x = 21, x = 7'
  },
  {
    id: 'math-intermediate-q2',
    text: 'If a train covers 240 km in 4 hours, how much distance will it cover in 7 hours at the same speed?',
    options: ['380 km', '400 km', '420 km', '440 km'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Speed = 240 ÷ 4 = 60 km/hr, Distance in 7 hours = 60 × 7 = 420 km'
  },
  {
    id: 'math-intermediate-q3',
    text: 'What is the area of a triangle with base 12 cm and height 8 cm?',
    options: ['24 cm²', '48 cm²', '72 cm²', '96 cm²'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Area of a triangle = (1/2) × base × height = (1/2) × 12 × 8 = 48 cm²'
  },
  {
    id: 'math-intermediate-q4',
    text: 'Find the value of x in the proportion 8:12 :: 20:x',
    options: ['15', '24', '30', '36'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: '8:12 :: 20:x, so 8/12 = 20/x, Cross multiply: 8x = 12 × 20, 8x = 240, x = 30'
  },
  {
    id: 'math-intermediate-q5',
    text: 'A box contains 3 red balls, 5 green balls, and 2 blue balls. If a ball is drawn at random, what is the probability of getting a green ball?',
    options: ['3/10', '5/10', '2/10', '8/10'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Total number of balls = 3 + 5 + 2 = 10, Probability of green ball = 5/10 = 1/2'
  },
];

export const mathHardQuestions: Question[] = [
  {
    id: 'math-hard-q1',
    text: 'Find the value of x: 2x + 5 = 3(x - 2)',
    options: ['7', '9', '11', '13'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: '2x + 5 = 3(x - 2), 2x + 5 = 3x - 6, 2x - 3x = -6 - 5, -x = -11, x = 11'
  },
  {
    id: 'math-hard-q2',
    text: 'If a car travels 280 km in 4 hours and a bike travels 120 km in 3 hours, how much faster is the car than the bike?',
    options: ['15 km/h', '30 km/h', '40 km/h', '70 km/h'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Speed of car = 280 ÷ 4 = 70 km/h, Speed of bike = 120 ÷ 3 = 40 km/h, Difference = 70 - 40 = 30 km/h'
  },
  {
    id: 'math-hard-q3',
    text: 'If the diagonal of a square is 8√2 cm, what is its area?',
    options: ['32 cm²', '64 cm²', '128 cm²', '256 cm²'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Diagonal = 8√2 cm, Side = diagonal/√2 = (8√2)/√2 = 8 cm, Area = side² = 8² = 64 cm²'
  },
  {
    id: 'math-hard-q4',
    text: 'Two numbers are in the ratio 3:5. If their sum is 120, find the larger number.',
    options: ['45', '72', '75', '80'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Let the numbers be 3x and 5x. Then 3x + 5x = 120, 8x = 120, x = 15. Larger number = 5x = 5 × 15 = 75'
  },
  {
    id: 'math-hard-q5',
    text: 'What is the average of all odd numbers from 1 to 100?',
    options: ['49', '50', '50.5', '51'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'There are 50 odd numbers from 1 to 100. The average is the same as the middle value between 1 and 99, which is 50.'
  },
];

// English Questions based on NCERT 6th class syllabus
export const englishEasyQuestions: Question[] = [
  {
    id: 'english-easy-q1',
    text: 'Who did Patrick\'s homework in the story "Who Did Patrick\'s Homework?"',
    options: ['His mother', 'His friend', 'An elf', 'His teacher'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'In the story, an elf did Patrick\'s homework.'
  },
  {
    id: 'english-easy-q2',
    text: 'What is an antonym for "happy"?',
    options: ['Sad', 'Glad', 'Joyful', 'Merry'],
    correctAnswer: 0,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '"Sad" is an antonym (opposite) of "happy".'
  },
  {
    id: 'english-easy-q3',
    text: 'Identify the noun in this sentence: "The children played in the park."',
    options: ['The', 'Played', 'Children', 'Park'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '"Children" is a noun - it names a person, place, thing, or idea.'
  },
  {
    id: 'english-easy-q4',
    text: 'Which of these is a proper noun?',
    options: ['Book', 'Car', 'London', 'House'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '"London" is a proper noun - it names a specific place and begins with a capital letter.'
  },
  {
    id: 'english-easy-q5',
    text: 'What is the plural of "child"?',
    options: ['Childs', 'Childen', 'Children', 'Childes'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The plural of "child" is "children". It\'s an irregular plural noun.'
  },
];

export const englishMediumQuestions: Question[] = [
  {
    id: 'english-medium-q1',
    text: 'What was Taro\'s reward in the story "Taro\'s Reward"?',
    options: ['Gold', 'A magical stream', 'A beautiful garden', 'A new house'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'In the story, Taro was rewarded with a magical stream that gave sake (wine) instead of water.'
  },
  {
    id: 'english-medium-q2',
    text: 'Identify the verb in this sentence: "She quickly wrote the letter."',
    options: ['She', 'Quickly', 'Wrote', 'Letter'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '"Wrote" is the verb - it shows action.'
  },
  {
    id: 'english-medium-q3',
    text: 'What is the past tense of "go"?',
    options: ['Goed', 'Gone', 'Went', 'Going'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The past tense of "go" is "went". "Gone" is the past participle.'
  },
  {
    id: 'english-medium-q4',
    text: 'Identify the adjective in this sentence: "The old man walked slowly."',
    options: ['Old', 'Man', 'Walked', 'Slowly'],
    correctAnswer: 0,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '"Old" is an adjective - it describes the noun "man".'
  },
  {
    id: 'english-medium-q5',
    text: 'Which sentence uses the correct form of punctuation?',
    options: ['Where are you going.', 'Where are you going?', 'Where are you going!', 'Where are you going,'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Questions should end with a question mark (?)'
  },
];

export const englishIntermediateQuestions: Question[] = [
  {
    id: 'english-intermediate-q1',
    text: 'What type of text is "The Banyan Tree" from your textbook?',
    options: ['A poem', 'A biography', 'A short story', 'A play'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: '"The Banyan Tree" is a short story in the NCERT Class 6 textbook.'
  },
  {
    id: 'english-intermediate-q2',
    text: 'In the poem "The Kite," what makes the kite rise?',
    options: ['The sun', 'The wind', 'The rain', 'Magic'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'In the poem "The Kite," it is the wind that makes the kite rise in the sky.'
  },
  {
    id: 'english-intermediate-q3',
    text: 'Which of these is a compound sentence?',
    options: ['He ran quickly.', 'He ran quickly and he won the race.', 'Running quickly, he won the race.', 'He won the race because he ran quickly.'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'A compound sentence contains two independent clauses joined by a conjunction. "He ran quickly and he won the race" has two independent clauses.'
  },
  {
    id: 'english-intermediate-q4',
    text: 'What is alliteration?',
    options: ['Repetition of same sounds at the end of words', 'Repetition of consonant sounds at the beginning of words', 'Comparison using "like" or "as"', 'Exaggeration for effect'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Alliteration is the repetition of consonant sounds at the beginning of words, like "Peter Piper picked a peck of pickled peppers."'
  },
  {
    id: 'english-intermediate-q5',
    text: 'What is the correct meaning of the idiom "a piece of cake"?',
    options: ['A dessert', 'Something very sweet', 'Something very easy', 'A small portion'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'The idiom "a piece of cake" means that something is very easy to do.'
  },
];

export const englishHardQuestions: Question[] = [
  {
    id: 'english-hard-q1',
    text: 'In the story "Who I Am," what talent does the author\'s grandmother have?',
    options: ['Painting', 'Storytelling', 'Cooking', 'Gardening'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'In the story "Who I Am," the author\'s grandmother has a talent for storytelling.'
  },
  {
    id: 'english-hard-q2',
    text: 'What is a metaphor?',
    options: ['A comparison using "like" or "as"', 'A direct comparison where one thing is said to be another', 'The main idea of a story', 'Repetition of sounds'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'A metaphor is a figure of speech that directly compares one thing to another, without using words like "like" or "as".'
  },
  {
    id: 'english-hard-q3',
    text: 'Identify the type of pronoun in this sentence: "She gave herself a day off."',
    options: ['Personal pronoun', 'Possessive pronoun', 'Reflexive pronoun', 'Relative pronoun'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: '"Herself" is a reflexive pronoun - it refers back to the subject "she".'
  },
  {
    id: 'english-hard-q4',
    text: 'What is the difference between "its" and "it\'s"?',
    options: ['"Its" is a verb, "it\'s" is a noun', '"Its" is a possessive, "it\'s" is a contraction', '"Its" is a contraction, "it\'s" is a possessive', 'They are different spellings of the same word'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: '"Its" is a possessive pronoun showing ownership. "It\'s" is a contraction of "it is" or "it has".'
  },
  {
    id: 'english-hard-q5',
    text: 'Which literary device is used in this sentence: "The stars danced in the night sky"?',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Personification is used here - giving human qualities (dancing) to non-human things (stars).'
  },
];

// Function to generate test for a specific subject
export function generateSubjectTest(subjectId: string, difficulty: DifficultyLevel, chapterId?: string): Test {
  // Create timestamp for unique ID
  const timestamp = Date.now();
  
  // Select questions based on subject
  let easyQuestions: Question[] = [];
  let mediumQuestions: Question[] = [];
  let intermediateQuestions: Question[] = [];
  let hardQuestions: Question[] = [];
  let subjectName = '';
  let chapters: string[] = [];
  let icon = '';
  
  switch(subjectId) {
    case 'math':
      easyQuestions = mathEasyQuestions;
      mediumQuestions = mathMediumQuestions;
      intermediateQuestions = mathIntermediateQuestions;
      hardQuestions = mathHardQuestions;
      subjectName = 'Mathematics';
      chapters = mathChapters;
      icon = 'fa-calculator';
      break;
    case 'english':
      easyQuestions = englishEasyQuestions;
      mediumQuestions = englishMediumQuestions;
      intermediateQuestions = englishIntermediateQuestions;
      hardQuestions = englishHardQuestions;
      subjectName = 'English';
      chapters = englishChapters;
      icon = 'fa-book';
      break;
    case 'science':
    default:
      // Use existing science questions from testData.ts
      easyQuestions = scienceEasyQuestions;
      mediumQuestions = scienceMediumQuestions;
      intermediateQuestions = scienceIntermediateQuestions;
      hardQuestions = scienceHardQuestions;
      subjectName = 'Science';
      chapters = scienceChapters;
      icon = 'fa-atom';
  }
  
  // Shuffle all question arrays to ensure randomness
  const shuffledEasy = [...easyQuestions].sort(() => Math.random() - 0.5);
  const shuffledMedium = [...mediumQuestions].sort(() => Math.random() - 0.5);
  const shuffledIntermediate = [...intermediateQuestions].sort(() => Math.random() - 0.5);
  const shuffledHard = [...hardQuestions].sort(() => Math.random() - 0.5);
  
  // Create unique IDs for questions to ensure they're treated as new
  const uniqueId = timestamp.toString();
  
  // Select questions based on difficulty
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
  }
  
  // Take exactly 10 questions or pad with medium questions if needed
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
  
  // Get a chapter based on chapterId or select random chapter
  let selectedChapter = '';
  
  if (chapterId && !isNaN(parseInt(chapterId))) {
    const index = parseInt(chapterId) - 1;
    if (index >= 0 && index < chapters.length) {
      selectedChapter = chapters[index];
    } else {
      selectedChapter = chapters[0];
    }
  } else {
    selectedChapter = chapters[Math.floor(Math.random() * chapters.length)];
  }
  
  // Final shuffle of questions
  const shuffled = [...finalQuestions].sort(() => Math.random() - 0.5);
  
  return {
    id: `${subjectId}-test-${timestamp}`,
    subjectId,
    title: `${subjectName} ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Test`,
    chapter: selectedChapter,
    icon,
    duration: 300, // 5 minutes
    difficulty,
    generatedBy: 'ai' as const,
    questions: shuffled
  };
}

// Get available chapters for a subject
export function getChaptersForSubject(subjectId: string): string[] {
  switch(subjectId) {
    case 'math':
      return mathChapters;
    case 'english':
      return englishChapters;
    case 'hindi':
      return hindiChapters;
    case 'social':
      return socialChapters;
    case 'sanskrit':
      return sanskritChapters;
    case 'science':
    default:
      return scienceChapters;
  }
}