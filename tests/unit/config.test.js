const fs = require('fs');
const path = require('path');

describe('Project Configuration', () => {
  const rootDir = path.join(__dirname, '../..');

  describe('package.json', () => {
    let packageJson;

    beforeAll(() => {
      const content = fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8');
      packageJson = JSON.parse(content);
    });

    test('should have valid name', () => {
      expect(packageJson.name).toBeDefined();
      expect(typeof packageJson.name).toBe('string');
    });

    test('should have valid version', () => {
      expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+/);
    });

    test('should have required scripts', () => {
      expect(packageJson.scripts).toBeDefined();
      expect(packageJson.scripts.test).toBeDefined();
      expect(packageJson.scripts.lint).toBeDefined();
    });

    test('should have MIT license', () => {
      expect(packageJson.license).toBe('MIT');
    });

    test('should require Node.js 18+', () => {
      expect(packageJson.engines.node).toMatch(/>=\s*18/);
    });
  });

  describe('ESLint Configuration', () => {
    test('should have .eslintrc.json', () => {
      const eslintPath = path.join(rootDir, '.eslintrc.json');
      expect(fs.existsSync(eslintPath)).toBe(true);
    });

    test('should have valid ESLint config', () => {
      const content = fs.readFileSync(path.join(rootDir, '.eslintrc.json'), 'utf8');
      const config = JSON.parse(content);
      expect(config.extends).toContain('eslint:recommended');
    });
  });

  describe('Prettier Configuration', () => {
    test('should have .prettierrc.json', () => {
      const prettierPath = path.join(rootDir, '.prettierrc.json');
      expect(fs.existsSync(prettierPath)).toBe(true);
    });
  });
});
