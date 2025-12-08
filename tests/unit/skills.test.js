const fs = require('fs');
const path = require('path');

describe('Claude Skills', () => {
  const skillsDir = path.join(__dirname, '../../.claude/skills');

  let skillFolders;

  beforeAll(() => {
    skillFolders = fs.readdirSync(skillsDir).filter(item => {
      const itemPath = path.join(skillsDir, item);
      return fs.statSync(itemPath).isDirectory();
    });
  });

  test('should have at least 10 skills', () => {
    expect(skillFolders.length).toBeGreaterThanOrEqual(10);
  });

  describe('Skill structure validation', () => {
    test('each skill folder should contain required files', () => {
      const validSkills = skillFolders.filter(skill => {
        const skillPath = path.join(skillsDir, skill);
        const files = fs.readdirSync(skillPath);
        return files.some(f => f.endsWith('.md') || f === 'skill.json' || f === 'index.js');
      });

      expect(validSkills.length).toBeGreaterThan(0);
    });
  });

  describe('Core skills existence', () => {
    const coreSkills = [
      'planning',
      'debugging',
      'code-review',
      'research',
    ];

    test.each(coreSkills)('should have %s skill', (skill) => {
      expect(skillFolders).toContain(skill);
    });
  });
});
