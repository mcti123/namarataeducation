import { 
  users, type User, type InsertUser,
  type Subject, type InsertSubject,
  type Test, type InsertTest,
  type UserProgress, type InsertUserProgress,
  type TestResult, type InsertTestResult,
  type Trophy, type InsertTrophy,
  type UserTrophy, type InsertUserTrophy
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subject methods
  getSubject(id: number): Promise<Subject | undefined>;
  getSubjects(): Promise<Subject[]>;
  createSubject(subject: InsertSubject): Promise<Subject>;
  
  // Test methods
  getTest(id: number): Promise<Test | undefined>;
  getTestsBySubject(subjectId: number): Promise<Test[]>;
  createTest(test: InsertTest): Promise<Test>;
  
  // User Progress methods
  getUserProgress(userId: number, subjectId: number): Promise<UserProgress | undefined>;
  getUserProgressBySubject(userId: number): Promise<UserProgress[]>;
  createOrUpdateUserProgress(progress: InsertUserProgress): Promise<UserProgress>;
  
  // Test Results methods
  getTestResult(id: number): Promise<TestResult | undefined>;
  getTestResultsByUser(userId: number): Promise<TestResult[]>;
  createTestResult(result: InsertTestResult): Promise<TestResult>;
  
  // Trophy methods
  getTrophy(id: number): Promise<Trophy | undefined>;
  getAllTrophies(): Promise<Trophy[]>;
  createTrophy(trophy: InsertTrophy): Promise<Trophy>;
  
  // User Trophy methods
  getUserTrophies(userId: number): Promise<UserTrophy[]>;
  updateUserTrophyStatus(userId: number, trophyId: number, status: string): Promise<UserTrophy>;
  createUserTrophy(userTrophy: InsertUserTrophy): Promise<UserTrophy>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subjects: Map<number, Subject>;
  private tests: Map<number, Test>;
  private userProgress: Map<string, UserProgress>; // key = `${userId}-${subjectId}`
  private testResults: Map<number, TestResult>;
  private trophies: Map<number, Trophy>;
  private userTrophies: Map<string, UserTrophy>; // key = `${userId}-${trophyId}`
  
  private currentIds: {
    users: number;
    subjects: number;
    tests: number;
    userProgress: number;
    testResults: number;
    trophies: number;
    userTrophies: number;
  };

  constructor() {
    this.users = new Map();
    this.subjects = new Map();
    this.tests = new Map();
    this.userProgress = new Map();
    this.testResults = new Map();
    this.trophies = new Map();
    this.userTrophies = new Map();
    
    this.currentIds = {
      users: 1,
      subjects: 1,
      tests: 1,
      userProgress: 1,
      testResults: 1,
      trophies: 1,
      userTrophies: 1
    };
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentIds.users++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id,
      displayName: insertUser.displayName || null,
      avatarUrl: insertUser.avatarUrl || null,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }
  
  // Subject methods
  async getSubject(id: number): Promise<Subject | undefined> {
    return this.subjects.get(id);
  }
  
  async getSubjects(): Promise<Subject[]> {
    return Array.from(this.subjects.values());
  }
  
  async createSubject(insertSubject: InsertSubject): Promise<Subject> {
    const id = this.currentIds.subjects++;
    const now = new Date();
    const subject: Subject = {
      ...insertSubject,
      id,
      createdAt: now
    };
    this.subjects.set(id, subject);
    return subject;
  }
  
  // Test methods
  async getTest(id: number): Promise<Test | undefined> {
    return this.tests.get(id);
  }
  
  async getTestsBySubject(subjectId: number): Promise<Test[]> {
    return Array.from(this.tests.values())
      .filter(test => test.subjectId === subjectId);
  }
  
  async createTest(insertTest: InsertTest): Promise<Test> {
    const id = this.currentIds.tests++;
    const now = new Date();
    const test: Test = {
      ...insertTest,
      id,
      createdAt: now
    };
    this.tests.set(id, test);
    return test;
  }
  
  // User Progress methods
  async getUserProgress(userId: number, subjectId: number): Promise<UserProgress | undefined> {
    return this.userProgress.get(`${userId}-${subjectId}`);
  }
  
  async getUserProgressBySubject(userId: number): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values())
      .filter(progress => progress.userId === userId);
  }
  
  async createOrUpdateUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    const key = `${insertProgress.userId}-${insertProgress.subjectId}`;
    const existing = this.userProgress.get(key);
    
    if (existing) {
      // Update existing progress
      const updated: UserProgress = {
        ...existing,
        progress: insertProgress.progress,
        rating: insertProgress.rating,
        lastUpdated: new Date()
      };
      this.userProgress.set(key, updated);
      return updated;
    } else {
      // Create new progress entry
      const id = this.currentIds.userProgress++;
      const now = new Date();
      const progress: UserProgress = {
        ...insertProgress,
        id,
        lastUpdated: now
      };
      this.userProgress.set(key, progress);
      return progress;
    }
  }
  
  // Test Results methods
  async getTestResult(id: number): Promise<TestResult | undefined> {
    return this.testResults.get(id);
  }
  
  async getTestResultsByUser(userId: number): Promise<TestResult[]> {
    return Array.from(this.testResults.values())
      .filter(result => result.userId === userId);
  }
  
  async createTestResult(insertResult: InsertTestResult): Promise<TestResult> {
    const id = this.currentIds.testResults++;
    const now = new Date();
    const result: TestResult = {
      ...insertResult,
      id,
      completedAt: now
    };
    this.testResults.set(id, result);
    return result;
  }
  
  // Trophy methods
  async getTrophy(id: number): Promise<Trophy | undefined> {
    return this.trophies.get(id);
  }
  
  async getAllTrophies(): Promise<Trophy[]> {
    return Array.from(this.trophies.values());
  }
  
  async createTrophy(insertTrophy: InsertTrophy): Promise<Trophy> {
    const id = this.currentIds.trophies++;
    const now = new Date();
    const trophy: Trophy = {
      ...insertTrophy,
      id,
      createdAt: now
    };
    this.trophies.set(id, trophy);
    return trophy;
  }
  
  // User Trophy methods
  async getUserTrophies(userId: number): Promise<UserTrophy[]> {
    return Array.from(this.userTrophies.values())
      .filter(userTrophy => userTrophy.userId === userId);
  }
  
  async updateUserTrophyStatus(userId: number, trophyId: number, status: string): Promise<UserTrophy> {
    const key = `${userId}-${trophyId}`;
    const existing = this.userTrophies.get(key);
    
    if (!existing) {
      throw new Error(`User trophy with userId ${userId} and trophyId ${trophyId} not found`);
    }
    
    let earnedAt: Date | null = existing.earnedAt;
    if (status === 'unlocked' && existing.status !== 'unlocked') {
      earnedAt = new Date();
    }
    
    const updated: UserTrophy = {
      ...existing,
      status,
      earnedAt
    };
    
    this.userTrophies.set(key, updated);
    return updated;
  }
  
  async createUserTrophy(insertUserTrophy: InsertUserTrophy): Promise<UserTrophy> {
    const id = this.currentIds.userTrophies++;
    const key = `${insertUserTrophy.userId}-${insertUserTrophy.trophyId}`;
    
    let earnedAt: Date | null = null;
    if (insertUserTrophy.status === 'unlocked') {
      earnedAt = new Date();
    }
    
    const userTrophy: UserTrophy = {
      ...insertUserTrophy,
      id,
      earnedAt
    };
    
    this.userTrophies.set(key, userTrophy);
    return userTrophy;
  }
}

export const storage = new MemStorage();
