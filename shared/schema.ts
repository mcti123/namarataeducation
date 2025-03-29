import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Subjects table
export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  backgroundColor: text("background_color").notNull(),
  iconBackgroundColor: text("icon_background_color").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Tests table
export const tests = pgTable("tests", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subjectId: integer("subject_id").notNull(),
  chapter: text("chapter").notNull(),
  icon: text("icon").notNull(),
  difficulty: text("difficulty").notNull(),
  generatedBy: text("generated_by").notNull(),
  duration: integer("duration").notNull(),
  questions: json("questions").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// User Progress table
export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  subjectId: integer("subject_id").notNull(),
  progress: integer("progress").notNull(),
  rating: integer("rating").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// Test Results table
export const testResults = pgTable("test_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  testId: integer("test_id").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  correctAnswers: integer("correct_answers").notNull(),
  incorrectAnswers: integer("incorrect_answers").notNull(),
  unattempted: integer("unattempted").notNull(),
  score: integer("score").notNull(),
  userAnswers: json("user_answers").notNull(),
  completedAt: timestamp("completed_at").defaultNow(),
});

// Trophies table
export const trophies = pgTable("trophies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// User Trophies table
export const userTrophies = pgTable("user_trophies", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  trophyId: integer("trophy_id").notNull(),
  status: text("status").notNull(), // 'locked' | 'unlocked' | 'in-progress'
  earnedAt: timestamp("earned_at"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  displayName: true,
  avatarUrl: true,
});

export const insertSubjectSchema = createInsertSchema(subjects).pick({
  name: true,
  description: true,
  icon: true,
  color: true,
  backgroundColor: true,
  iconBackgroundColor: true,
});

export const insertTestSchema = createInsertSchema(tests).pick({
  title: true,
  subjectId: true,
  chapter: true,
  icon: true,
  difficulty: true,
  generatedBy: true,
  duration: true,
  questions: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).pick({
  userId: true,
  subjectId: true,
  progress: true,
  rating: true,
});

export const insertTestResultSchema = createInsertSchema(testResults).pick({
  userId: true,
  testId: true,
  totalQuestions: true,
  correctAnswers: true,
  incorrectAnswers: true,
  unattempted: true,
  score: true,
  userAnswers: true,
});

export const insertTrophySchema = createInsertSchema(trophies).pick({
  name: true,
  description: true,
  icon: true,
  iconColor: true,
});

export const insertUserTrophySchema = createInsertSchema(userTrophies).pick({
  userId: true,
  trophyId: true,
  status: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSubject = z.infer<typeof insertSubjectSchema>;
export type Subject = typeof subjects.$inferSelect;

export type InsertTest = z.infer<typeof insertTestSchema>;
export type Test = typeof tests.$inferSelect;

export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type UserProgress = typeof userProgress.$inferSelect;

export type InsertTestResult = z.infer<typeof insertTestResultSchema>;
export type TestResult = typeof testResults.$inferSelect;

export type InsertTrophy = z.infer<typeof insertTrophySchema>;
export type Trophy = typeof trophies.$inferSelect;

export type InsertUserTrophy = z.infer<typeof insertUserTrophySchema>;
export type UserTrophy = typeof userTrophies.$inferSelect;
