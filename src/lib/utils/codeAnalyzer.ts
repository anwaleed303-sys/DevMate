export interface ParsedCode {
  language: string;
  code: string;
  imports: string[];
  functions: string[];
  classes: string[];
  variables: string[];
}

export class CodeParser {
  static detectLanguage(code: string): string {
    const patterns = {
      javascript: /(\bconst\b|\blet\b|\bvar\b|\bfunction\b|\b=>\b)/,
      typescript: /(\binterface\b|\btype\b|\benum\b|:\s*\w+)/,
      python: /(\bdef\b|\bclass\b|\bimport\b|\bfrom\b.*\bimport\b)/,
      java: /(\bpublic\b|\bprivate\b|\bclass\b.*\{|\bvoid\b)/,
      cpp: /(#include|using namespace|std::)/,
      csharp: /(\bnamespace\b|\busing\b.*;\s*$|\bpublic\b.*\bclass\b)/m,
      go: /(\bfunc\b|\bpackage\b|\bimport\b)/,
      rust: /(\bfn\b|\blet\b.*=|\buse\b|\bstruct\b)/,
      php: /(<\?php|\$\w+\s*=)/,
      ruby: /(\bdef\b|\bend\b|\brequire\b)/,
    };

    for (const [lang, pattern] of Object.entries(patterns)) {
      if (pattern.test(code)) {
        return lang;
      }
    }

    return "plaintext";
  }

  static extractImports(code: string, language: string): string[] {
    const imports: string[] = [];

    switch (language) {
      case "javascript":
      case "typescript":
        const jsImports = code.match(/import\s+.+\s+from\s+['"][^'"]+['"]/g);
        if (jsImports) imports.push(...jsImports);
        break;
      case "python":
        const pyImports = code.match(
          /(import\s+\w+|from\s+\w+\s+import\s+.+)/g
        );
        if (pyImports) imports.push(...pyImports);
        break;
      case "java":
        const javaImports = code.match(/import\s+[\w.]+;/g);
        if (javaImports) imports.push(...javaImports);
        break;
    }

    return imports;
  }

  static extractFunctions(code: string, language: string): string[] {
    const functions: string[] = [];

    switch (language) {
      case "javascript":
      case "typescript":
        const jsFuncs = code.match(
          /function\s+\w+|const\s+\w+\s*=\s*\(.*?\)\s*=>/g
        );
        if (jsFuncs) functions.push(...jsFuncs);
        break;
      case "python":
        const pyFuncs = code.match(/def\s+\w+\s*\([^)]*\)/g);
        if (pyFuncs) functions.push(...pyFuncs);
        break;
      case "java":
        const javaFuncs = code.match(/\b\w+\s+\w+\s*\([^)]*\)\s*\{/g);
        if (javaFuncs) functions.push(...javaFuncs);
        break;
    }

    return functions;
  }

  static parse(code: string): ParsedCode {
    const language = this.detectLanguage(code);
    const imports = this.extractImports(code, language);
    const functions = this.extractFunctions(code, language);

    return {
      language,
      code,
      imports,
      functions,
      classes: [],
      variables: [],
    };
  }

  static formatCode(code: string, language: string): string {
    return code.trim();
  }

  static countLines(code: string): number {
    return code.split("\n").length;
  }

  static estimateComplexity(code: string): "low" | "medium" | "high" {
    const lines = this.countLines(code);
    const complexity = (code.match(/if|else|for|while|switch|case/g) || [])
      .length;

    if (lines < 20 && complexity < 3) return "low";
    if (lines < 100 && complexity < 10) return "medium";
    return "high";
  }
}

export default CodeParser;
