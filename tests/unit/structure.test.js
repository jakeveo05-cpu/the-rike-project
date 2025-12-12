const fs = require('fs');
const path = require('path');

describe('Project Structure', () => {
  const rootDir = path.join(__dirname, '../..');

  describe('Required directories', () => {
    const requiredDirs = [
      '.claude',
      '.claude/commands',
      '.claude/skills',
      '.claude/workflows',
      '.claude/hooks',
      '.opencode',
      'docs',
      'tests',
    ];

    test.each(requiredDirs)('should have %s directory', (dir) => {
      const dirPath = path.join(rootDir, dir);
      expect(fs.existsSync(dirPath)).toBe(true);
      expect(fs.statSync(dirPath).isDirectory()).toBe(true);
    });
  });

  describe('Required files', () => {
    const requiredFiles = [
      'README.md',
      'CLAUDE.md',
      'LICENSE',
      'package.json',
      '.gitignore',
    ];

    test.each(requiredFiles)('should have %s file', (file) => {
      const filePath = path.join(rootDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  describe('Documentation', () => {
    const docFiles = [
      'docs/project-overview-pdr.md',
      'docs/code-standards.md',
      'docs/codebase-summary.md',
      'docs/system-architecture.md',
    ];

    test.each(docFiles)('should have %s', (doc) => {
      const docPath = path.join(rootDir, doc);
      expect(fs.existsSync(docPath)).toBe(true);
    });
  });
});
