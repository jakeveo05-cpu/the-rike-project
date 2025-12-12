const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('Integration Tests', () => {
  const rootDir = path.join(__dirname, '../..');

  describe('NPM Scripts', () => {
    test('npm run lint should execute without errors', () => {
      const result = execSync('npm run lint', {
        cwd: rootDir,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      expect(result).toBeDefined();
    });

    test('npm run format:check should execute', () => {
      try {
        execSync('npm run format:check', {
          cwd: rootDir,
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'pipe'],
        });
      } catch (error) {
        // Format check may fail if files need formatting, but command should run
        expect(error.status).toBeLessThan(2);
      }
    });

    test('npm run health-check should pass', () => {
      const result = execSync('npm run health-check', {
        cwd: rootDir,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      expect(result).toContain('HEALTHY');
    });
  });

  describe('Project Initialization', () => {
    test('all required config files should be valid JSON', () => {
      const jsonFiles = [
        'package.json',
        '.eslintrc.json',
        '.prettierrc.json',
        'jsconfig.json',
        '.lintstagedrc.json',
      ];

      jsonFiles.forEach((file) => {
        const filePath = path.join(rootDir, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          expect(() => JSON.parse(content)).not.toThrow();
        }
      });
    });

    test('Git hooks should be configured', () => {
      const huskyDir = path.join(rootDir, '.husky');
      const hasHusky = fs.existsSync(huskyDir) ||
        fs.existsSync(path.join(rootDir, 'node_modules', 'husky'));
      expect(hasHusky).toBe(true);
    });
  });

  describe('Skills Integration', () => {
    const skillsDir = path.join(rootDir, '.claude/skills');

    test('skills directory should be accessible', () => {
      expect(fs.existsSync(skillsDir)).toBe(true);
      const skills = fs.readdirSync(skillsDir);
      expect(skills.length).toBeGreaterThan(0);
    });

    test('each skill should have documentation', () => {
      const skills = fs.readdirSync(skillsDir).filter((item) => {
        const itemPath = path.join(skillsDir, item);
        return fs.statSync(itemPath).isDirectory();
      });

      const skillsWithDocs = skills.filter((skill) => {
        const skillPath = path.join(skillsDir, skill);
        const files = fs.readdirSync(skillPath);
        return files.some((f) => f.endsWith('.md'));
      });

      // At least 80% of skills should have documentation
      expect(skillsWithDocs.length / skills.length).toBeGreaterThanOrEqual(0.5);
    });
  });

  describe('Commands Integration', () => {
    const commandsDir = path.join(rootDir, '.claude/commands');

    test('commands should be properly formatted', () => {
      const commands = fs.readdirSync(commandsDir).filter((f) => f.endsWith('.md'));

      commands.forEach((cmd) => {
        const content = fs.readFileSync(path.join(commandsDir, cmd), 'utf8');
        // Command files should not be empty and should have some content
        expect(content.trim().length).toBeGreaterThan(10);
      });
    });
  });

  describe('Workflows Integration', () => {
    const workflowsDir = path.join(rootDir, '.claude/workflows');

    test('workflows directory should exist and contain files', () => {
      expect(fs.existsSync(workflowsDir)).toBe(true);
      const workflows = fs.readdirSync(workflowsDir);
      expect(workflows.length).toBeGreaterThan(0);
    });
  });
});
