# Contributing to ClaudeKit Engineer

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/claudekit-engineer.git
   cd claudekit-engineer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # With coverage
```

### Linting & Formatting
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
npm run format        # Format code
npm run format:check  # Check formatting
```

### Health Check
```bash
npm run health-check  # Validate project structure
```

### Full Validation
```bash
npm run validate      # Run lint + tests
```

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(skills): add new debugging skill
fix(commands): resolve plan command parsing error
docs(readme): update installation instructions
test(health-check): add validation tests
```

## Adding New Skills

1. Create folder in `.claude/skills/your-skill-name/`
2. Add required files:
   - `README.md` - Skill documentation
   - `skill.md` or `index.js` - Skill implementation
3. Update tests in `tests/unit/skills.test.js`
4. Run health check to validate

## Adding New Commands

1. Create file in `.claude/commands/your-command.md`
2. Follow existing command format
3. Update tests in `tests/unit/commands.test.js`
4. Document usage in README if significant

## Pull Request Process

1. Update documentation for any new features
2. Add/update tests as needed
3. Ensure all checks pass:
   ```bash
   npm run validate
   npm run health-check
   ```
4. Create PR with clear description
5. Wait for review and address feedback

## Questions?

Open an issue with the `question` label or reach out to maintainers.

Thank you for contributing!
