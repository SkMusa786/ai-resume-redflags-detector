// AI Resume Analysis Utilities
// This file contains the core logic for analyzing resumes and detecting red flags

export interface ResumeIssue {
  category: "pii" | "bias" | "exaggeration" | "clarity" | "compliance"
  severity: "high" | "medium" | "low"
  text: string
  reason: string
  suggestion: string
  lineNumber?: number
}

export interface ResumeAnalysisResult {
  overallScore: number
  totalIssues: number
  issues: ResumeIssue[]
  categoryScores: {
    privacy: number
    language: number
    clarity: number
  }
  complianceChecks: {
    gdprCompliant: boolean
    noBiasedLanguage: boolean
    privacySafe: boolean
  }
}

// PII Detection Patterns
const PII_PATTERNS = {
  fullAddress:
    /\d+\s+[\w\s]+(?:street|st|avenue|ave|road|rd|lane|ln|drive|dr|court|ct|circle|cir|boulevard|blvd|way|place|pl)[\s,]+(?:apt|apartment|unit|#)?\s*\d*[\s,]+[\w\s]+,?\s*[A-Z]{2}\s*\d{5}/gi,
  phoneNumber: /(?:\+?1[-.\s]?)?$$?\d{3}$$?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  ssn: /\d{3}[-\s]?\d{2}[-\s]?\d{4}/g,
  dateOfBirth:
    /(?:date of birth|dob|born)[\s:]*(?:january|february|march|april|may|june|july|august|september|october|november|december|\d{1,2})[,\s]+\d{1,2}[,\s]+\d{4}/gi,
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
}

// Biased Language Patterns
const BIAS_PATTERNS = [
  { pattern: /native\s+(?:english|speaker)/gi, category: "language discrimination" },
  { pattern: /young\s+(?:team|professional|candidate)/gi, category: "age bias" },
  { pattern: /experienced\s+(?:only|professionals)/gi, category: "age bias" },
  { pattern: /recent\s+graduate/gi, category: "age bias" },
  { pattern: /guys?\s+(?:team|culture)/gi, category: "gender bias" },
  { pattern: /(?:he|him|his)\s+(?:team|group|department)/gi, category: "gender bias" },
  { pattern: /aggressive|assertive|dominant/gi, category: "gendered language" },
]

// Exaggeration Patterns
const EXAGGERATION_PATTERNS = [
  /single[-\s]?handedly/gi,
  /(?:increased|boosted|grew).*?(?:1000%|500%|10x)/gi,
  /world['']?s\s+(?:best|leading|top)/gi,
  /expert\s+in\s+everything/gi,
  /responsible\s+for\s+(?:all|every|entire)/gi,
]

// Passive Voice Patterns (clarity issues)
const PASSIVE_PATTERNS = [
  /(?:was|were|is|are|been)\s+responsible\s+for/gi,
  /(?:was|were|is|are|been)\s+in\s+charge\s+of/gi,
  /(?:was|were|is|are|been)\s+tasked\s+with/gi,
]

/**
 * Analyzes a resume text and returns detected issues
 */
export function analyzeResume(resumeText: string): ResumeAnalysisResult {
  const issues: ResumeIssue[] = []

  // Detect PII
  detectPII(resumeText, issues)

  // Detect biased language
  detectBiasedLanguage(resumeText, issues)

  // Detect exaggerations
  detectExaggerations(resumeText, issues)

  // Detect clarity issues
  detectClarityIssues(resumeText, issues)

  // Calculate scores
  const categoryScores = calculateCategoryScores(issues)
  const overallScore = calculateOverallScore(categoryScores, issues.length)
  const complianceChecks = checkCompliance(issues)

  return {
    overallScore,
    totalIssues: issues.length,
    issues,
    categoryScores,
    complianceChecks,
  }
}

function detectPII(text: string, issues: ResumeIssue[]) {
  // Full Address
  const addressMatches = text.match(PII_PATTERNS.fullAddress)
  if (addressMatches) {
    addressMatches.forEach((match) => {
      issues.push({
        category: "pii",
        severity: "high",
        text: match,
        reason: "Full home address detected. This is sensitive PII that should not be included in resumes.",
        suggestion: "Replace with city and state only (e.g., 'San Francisco, CA')",
      })
    })
  }

  // Phone Numbers
  const phoneMatches = text.match(PII_PATTERNS.phoneNumber)
  if (phoneMatches && phoneMatches.length > 1) {
    issues.push({
      category: "pii",
      severity: "medium",
      text: phoneMatches.join(", "),
      reason: "Multiple phone numbers detected. Consider keeping only one professional contact number.",
      suggestion: "Include one mobile or professional contact number only.",
    })
  }

  // SSN
  const ssnMatches = text.match(PII_PATTERNS.ssn)
  if (ssnMatches) {
    ssnMatches.forEach((match) => {
      issues.push({
        category: "pii",
        severity: "high",
        text: match.replace(/\d/g, "X"),
        reason: "Social Security Number or similar ID detected. Never include this in a resume.",
        suggestion: "Remove all SSN or identification numbers from your resume.",
      })
    })
  }

  // Date of Birth
  const dobMatches = text.match(PII_PATTERNS.dateOfBirth)
  if (dobMatches) {
    dobMatches.forEach((match) => {
      issues.push({
        category: "pii",
        severity: "medium",
        text: match,
        reason: "Date of birth is PII and can lead to age discrimination.",
        suggestion: "Remove date of birth entirely from resume.",
      })
    })
  }
}

function detectBiasedLanguage(text: string, issues: ResumeIssue[]) {
  BIAS_PATTERNS.forEach((pattern) => {
    const matches = text.match(pattern.pattern)
    if (matches) {
      matches.forEach((match) => {
        let suggestion = ""
        if (pattern.category === "language discrimination") {
          suggestion = "Replace with 'Excellent written and verbal communication skills'"
        } else if (pattern.category === "age bias") {
          suggestion = "Focus on skills and achievements rather than age-related terms"
        } else if (pattern.category === "gender bias") {
          suggestion = "Use gender-neutral language like 'team members' or 'colleagues'"
        } else {
          suggestion = "Use neutral, inclusive language that focuses on professional qualities"
        }

        issues.push({
          category: "bias",
          severity: "medium",
          text: match,
          reason: `Potentially biased language detected (${pattern.category}). Could be seen as discriminatory.`,
          suggestion,
        })
      })
    }
  })
}

function detectExaggerations(text: string, issues: ResumeIssue[]) {
  EXAGGERATION_PATTERNS.forEach((pattern) => {
    const matches = text.match(pattern)
    if (matches) {
      matches.forEach((match) => {
        issues.push({
          category: "exaggeration",
          severity: "low",
          text: match,
          reason: "Claim appears exaggerated or unverifiable without supporting context.",
          suggestion:
            "Provide specific, verifiable metrics with context (e.g., 'Led team to achieve 35% revenue increase')",
        })
      })
    }
  })
}

function detectClarityIssues(text: string, issues: ResumeIssue[]) {
  PASSIVE_PATTERNS.forEach((pattern) => {
    const matches = text.match(pattern)
    if (matches) {
      matches.slice(0, 3).forEach((match) => {
        // Limit to first 3 to avoid overwhelming
        issues.push({
          category: "clarity",
          severity: "low",
          text: match,
          reason: "Passive voice detected. Active language is more impactful and shows ownership.",
          suggestion: "Use action verbs: 'Led', 'Managed', 'Developed', 'Implemented', etc.",
        })
      })
    }
  })
}

function calculateCategoryScores(issues: ResumeIssue[]): {
  privacy: number
  language: number
  clarity: number
} {
  const piiIssues = issues.filter((i) => i.category === "pii")
  const biasIssues = issues.filter((i) => i.category === "bias")
  const clarityIssues = issues.filter((i) => i.category === "clarity" || i.category === "exaggeration")

  // Calculate scores (100 - penalties)
  const privacyScore = Math.max(0, 100 - piiIssues.length * 15)
  const languageScore = Math.max(0, 100 - biasIssues.length * 12)
  const clarityScore = Math.max(0, 100 - clarityIssues.length * 8)

  return {
    privacy: privacyScore,
    language: languageScore,
    clarity: clarityScore,
  }
}

function calculateOverallScore(
  categoryScores: { privacy: number; language: number; clarity: number },
  totalIssues: number,
): number {
  // Weighted average: Privacy (40%), Language (35%), Clarity (25%)
  const weightedScore = categoryScores.privacy * 0.4 + categoryScores.language * 0.35 + categoryScores.clarity * 0.25

  // Additional penalty for high issue count
  const issuePenalty = Math.min(totalIssues * 2, 20)

  return Math.max(0, Math.round(weightedScore - issuePenalty))
}

function checkCompliance(issues: ResumeIssue[]) {
  const hasPII = issues.some((i) => i.category === "pii" && i.severity === "high")
  const hasBias = issues.some((i) => i.category === "bias")
  const hasPrivacyIssues = issues.some((i) => i.category === "pii")

  return {
    gdprCompliant: !hasPII,
    noBiasedLanguage: !hasBias,
    privacySafe: !hasPrivacyIssues,
  }
}

/**
 * Determines risk level based on analysis result
 */
export function getRiskLevel(analysis: ResumeAnalysisResult): "low" | "medium" | "high" {
  const highSeverityCount = analysis.issues.filter((i) => i.severity === "high").length

  if (highSeverityCount >= 2 || analysis.overallScore < 50) {
    return "high"
  } else if (highSeverityCount === 1 || analysis.overallScore < 75) {
    return "medium"
  }
  return "low"
}

/**
 * Mock function to extract text from files
 * In production, this would use proper file parsing libraries
 */
export async function extractTextFromFile(file: File): Promise<string> {
  // This is a mock implementation
  // In production, you would use libraries like:
  // - pdf-parse for PDF files
  // - mammoth for DOCX files
  // - simple text reader for TXT files

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      resolve(text || "")
    }
    reader.readAsText(file)
  })
}
