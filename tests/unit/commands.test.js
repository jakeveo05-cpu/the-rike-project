const fs = require('fs');
const path = require('path');

describe('Claude Commands', () => {
  const commandsDir = path.join(__dirname, '../../.claude/commands');

  let commandFiles;

  beforeAll(() => {
    commandFiles = fs.readdirSync(commandsDir).filter(item => {
      return item.endsWith('.md');
    });
  });

  test('should have at least 5 commands', () => {
    expect(commandFiles.length).toBeGreaterThanOrEqual(5);
  });

  describe('Core commands existence', () => {
    const coreCommands = [
      'plan.md',
      'cook.md',
      'fix.md',
      'scout.md',
    ];

    test.each(coreCommands)('should have %s command', (cmd) => {
      expect(commandFiles).toContain(cmd);
    });
  });

  describe('Command file content', () => {
    test('command files should not be empty', () => {
      commandFiles.forEach(cmd => {
        const content = fs.readFileSync(path.join(commandsDir, cmd), 'utf8');
        expect(content.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
