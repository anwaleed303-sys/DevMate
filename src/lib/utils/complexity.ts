export function calculateComplexity(code: string): {
  level: "Low" | "Moderate" | "High";
  score: number;
} {
  let score = 1; // Base complexity

  // Count control structures
  const ifStatements = (code.match(/\bif\b/g) || []).length;
  const forLoops = (code.match(/\bfor\b/g) || []).length;
  const whileLoops = (code.match(/\bwhile\b/g) || []).length;
  const switchCases = (code.match(/\bswitch\b/g) || []).length;
  const tryCatch = (code.match(/\btry\b/g) || []).length;

  // Calculate cyclomatic complexity
  score += ifStatements;
  score += forLoops;
  score += whileLoops;
  score += switchCases * 2; // Switch adds more complexity
  score += tryCatch;

  // Count logical operators
  const andOr = (code.match(/&&|\|\|/g) || []).length;
  score += andOr;

  // Count nested structures (approximation)
  const nestingLevel = Math.max(
    ...code.split("\n").map((line) => (line.match(/^\s*/)?.[0].length || 0) / 2)
  );
  score += Math.floor(nestingLevel / 2);

  // Determine level
  let level: "Low" | "Moderate" | "High";
  if (score <= 10) {
    level = "Low";
  } else if (score <= 20) {
    level = "Moderate";
  } else {
    level = "High";
  }

  return {
    level,
    score: Math.min(Math.round((score / 30) * 100), 100),
  };
}

export function analyzePerformance(code: string): string {
  const issues = [];

  // Check for common performance issues
  if (
    code.includes("document.querySelector") &&
    code.match(/document\.querySelector/g)!.length > 3
  ) {
    issues.push("Multiple DOM queries");
  }

  if (code.includes("for") && code.includes("for")) {
    issues.push("Nested loops detected");
  }

  if (code.includes("setTimeout") || code.includes("setInterval")) {
    issues.push("Timing functions present");
  }

  if (issues.length === 0) {
    return "+15%";
  } else {
    return `Potential: +${20 + issues.length * 10}%`;
  }
}
