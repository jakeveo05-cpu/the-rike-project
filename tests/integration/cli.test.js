const { execSync } = require('child_process');
const path = require('path');

describe('CLI Integration Tests', () => {
  const rootDir = path.join(__dirname, '../..');

  describe('Node.js Environment', () => {
    test('Node.js version should be 18+', () => {
      const version = execSync('node --version', { encoding: 'utf8' }).trim();
      const majorVersion = parseInt(version.slice(1).split('.')[0], 10);
      expect(majorVersion).toBeGreaterThanOrEqual(18);
    });

    test('npm should be available', () => {
      const result = execSync('npm --version', { encoding: 'utf8' });
      expect(result).toBeDefined();
    });
  });

  describe('Package Scripts', () => {
    test('package.json should have all required scripts', () => {
      const pkg = require(path.join(rootDir, 'package.json'));
      const requiredScripts = [
        'test',
        'lint',
        'lint:fix',
        'format',
        'format:check',
        'validate',
        'health-check',
      ];

      requiredScripts.forEach((script) => {
        expect(pkg.scripts[script]).toBeDefined();
      });
    });
  });

  describe('Dependencies', () => {
    test('all dependencies should be installed', () => {
      const result = execSync('npm ls --depth=0', {
        cwd: rootDir,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      expect(result).not.toContain('MISSING');
    });
  });
});
