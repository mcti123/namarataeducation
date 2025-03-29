import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertSubjectSchema, 
  insertTestSchema,
  insertUserProgressSchema,
  insertTestResultSchema,
  insertTrophySchema,
  insertUserTrophySchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // ==================== API Routes ====================
  
  // ========== Subject Routes ==========
  // Get all subjects
  app.get('/api/subjects', async (req: Request, res: Response) => {
    try {
      const subjects = await storage.getSubjects();
      res.json(subjects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subjects" });
    }
  });
  
  // Get subject by ID
  app.get('/api/subjects/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const subject = await storage.getSubject(id);
      
      if (!subject) {
        return res.status(404).json({ error: "Subject not found" });
      }
      
      res.json(subject);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subject" });
    }
  });
  
  // Create subject
  app.post('/api/subjects', async (req: Request, res: Response) => {
    try {
      const parseResult = insertSubjectSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const subject = await storage.createSubject(parseResult.data);
      res.status(201).json(subject);
    } catch (error) {
      res.status(500).json({ error: "Failed to create subject" });
    }
  });
  
  // ========== Test Routes ==========
  // Get all tests for a subject
  app.get('/api/subjects/:subjectId/tests', async (req: Request, res: Response) => {
    try {
      const subjectId = parseInt(req.params.subjectId);
      const tests = await storage.getTestsBySubject(subjectId);
      res.json(tests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tests" });
    }
  });
  
  // Get test by ID
  app.get('/api/tests/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const test = await storage.getTest(id);
      
      if (!test) {
        return res.status(404).json({ error: "Test not found" });
      }
      
      res.json(test);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch test" });
    }
  });
  
  // Create test
  app.post('/api/tests', async (req: Request, res: Response) => {
    try {
      const parseResult = insertTestSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const test = await storage.createTest(parseResult.data);
      res.status(201).json(test);
    } catch (error) {
      res.status(500).json({ error: "Failed to create test" });
    }
  });
  
  // ========== User Progress Routes ==========
  // Get progress for a user
  app.get('/api/users/:userId/progress', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      const progress = await storage.getUserProgressBySubject(userId);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user progress" });
    }
  });
  
  // Get specific progress for a user and subject
  app.get('/api/users/:userId/subjects/:subjectId/progress', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      const subjectId = parseInt(req.params.subjectId);
      const progress = await storage.getUserProgress(userId, subjectId);
      
      if (!progress) {
        return res.status(404).json({ error: "Progress not found" });
      }
      
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user progress" });
    }
  });
  
  // Create/Update user progress
  app.post('/api/users/:userId/progress', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      // Validate userId matches body.userId
      if (req.body.userId && req.body.userId !== userId) {
        return res.status(400).json({ error: "UserId in route and body must match" });
      }
      
      // Set userId in request body to ensure consistency
      req.body.userId = userId;
      
      const parseResult = insertUserProgressSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const progress = await storage.createOrUpdateUserProgress(parseResult.data);
      res.status(201).json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user progress" });
    }
  });
  
  // ========== Test Results Routes ==========
  // Get test results for a user
  app.get('/api/users/:userId/results', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      const results = await storage.getTestResultsByUser(userId);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch test results" });
    }
  });
  
  // Get test result by ID
  app.get('/api/results/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await storage.getTestResult(id);
      
      if (!result) {
        return res.status(404).json({ error: "Test result not found" });
      }
      
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch test result" });
    }
  });
  
  // Create test result
  app.post('/api/users/:userId/results', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      // Validate userId matches body.userId
      if (req.body.userId && req.body.userId !== userId) {
        return res.status(400).json({ error: "UserId in route and body must match" });
      }
      
      // Set userId in request body to ensure consistency
      req.body.userId = userId;
      
      const parseResult = insertTestResultSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const result = await storage.createTestResult(parseResult.data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to create test result" });
    }
  });
  
  // ========== Trophy Routes ==========
  // Get all trophies
  app.get('/api/trophies', async (req: Request, res: Response) => {
    try {
      const trophies = await storage.getAllTrophies();
      res.json(trophies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trophies" });
    }
  });
  
  // Get trophy by ID
  app.get('/api/trophies/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const trophy = await storage.getTrophy(id);
      
      if (!trophy) {
        return res.status(404).json({ error: "Trophy not found" });
      }
      
      res.json(trophy);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trophy" });
    }
  });
  
  // Create trophy
  app.post('/api/trophies', async (req: Request, res: Response) => {
    try {
      const parseResult = insertTrophySchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const trophy = await storage.createTrophy(parseResult.data);
      res.status(201).json(trophy);
    } catch (error) {
      res.status(500).json({ error: "Failed to create trophy" });
    }
  });
  
  // ========== User Trophy Routes ==========
  // Get user trophies
  app.get('/api/users/:userId/trophies', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      const trophies = await storage.getUserTrophies(userId);
      res.json(trophies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user trophies" });
    }
  });
  
  // Update user trophy status
  app.patch('/api/users/:userId/trophies/:trophyId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      const trophyId = parseInt(req.params.trophyId);
      
      const statusSchema = z.object({
        status: z.enum(['locked', 'unlocked', 'in-progress'])
      });
      
      const parseResult = statusSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const userTrophy = await storage.updateUserTrophyStatus(
        userId, 
        trophyId, 
        parseResult.data.status
      );
      
      res.json(userTrophy);
    } catch (error) {
      if (error instanceof Error && error.message.includes('not found')) {
        return res.status(404).json({ error: error.message });
      }
      
      res.status(500).json({ error: "Failed to update user trophy status" });
    }
  });
  
  // Create user trophy
  app.post('/api/users/:userId/trophies', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      // Validate userId matches body.userId
      if (req.body.userId && req.body.userId !== userId) {
        return res.status(400).json({ error: "UserId in route and body must match" });
      }
      
      // Set userId in request body to ensure consistency
      req.body.userId = userId;
      
      const parseResult = insertUserTrophySchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
      }
      
      const userTrophy = await storage.createUserTrophy(parseResult.data);
      res.status(201).json(userTrophy);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user trophy" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
