import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Get subjects
  app.get('/api/subjects', (req, res) => {
    res.json({
      message: 'Subjects data available on the client side'
    });
  });
  
  // Get trophies
  app.get('/api/trophies', (req, res) => {
    res.json({
      message: 'Trophies data available on the client side'
    });
  });
  
  // Get test by subject ID
  app.get('/api/tests/:subjectId', (req, res) => {
    const { subjectId } = req.params;
    res.json({
      message: `Test data for subject ${subjectId} available on the client side`
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
