#!/usr/bin/env node

/**
 * Health Check Script for ClaudeKit Engineer
 * Validates project structure, skills, and configurations
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const CLAUDE_DIR = path.join(ROOT_DIR, '.claude');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}!${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.blue}=== ${msg} ===${colors.reset}`),
};

let totalChecks = 0;
let passedChecks = 0;
let warnings = 0;

function check(condition, successMsg, failMsg, isWarning = false) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    log.success(successMsg);
    return true;
  } else if (isWarning) {
    warnings++;
    log.warn(failMsg);
    return true;
  } else {
    log.error(failMsg);
    return false;
  }
}

function checkRequiredFiles() {
  log.header('Required Files');

  const files = [
    'README.md',
    'CLAUDE.md',
    'LICENSE',
    'package.json',
    '.gitignore',
    '.eslintrc.json',
    '.prettierrc.json',
  ];

  files.forEach((file) => {
    const filePath = path.join(ROOT_DIR, file);
    check(fs.existsSync(filePath), `${file} exists`, `${file} is missing`);
  });
}

function checkRequiredDirectories() {
  log.header('Required Directories');

  const dirs = [
    '.claude',
    '.claude/commands',
    '.claude/skills',
    '.claude/workflows',
    '.opencode',
    'docs',
    'tests',
  ];

  dirs.forEach((dir) => {
    const dirPath = path.join(ROOT_DIR, dir);
    check(
      fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory(),
      `${dir}/ exists`,
      `${dir}/ is missing`
    );
  });
}

function checkSkills() {
  log.header('Skills Validation');

  const skillsDir = path.join(CLAUDE_DIR, 'skills');

  if (!fs.existsSync(skillsDir)) {
    log.error('Skills directory not found');
    return;
  }

  const skills = fs.readdirSync(skillsDir).filter((item) => {
    const itemPath = path.join(skillsDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  check(skills.length >= 10, `${skills.length} skills found`, 'Less than 10 skills found', true);

  const coreSkills = ['planning', 'debugging', 'code-review', 'research'];
  coreSkills.forEach((skill) => {
    check(skills.includes(skill), `Core skill '${skill}' exists`, `Core skill '${skill}' is missing`);
  });
}

function checkCommands() {
  log.header('Commands Validation');

  const commandsDir = path.join(CLAUDE_DIR, 'commands');

  if (!fs.existsSync(commandsDir)) {
    log.error('Commands directory not found');
    return;
  }

  const commands = fs.readdirSync(commandsDir).filter((item) => item.endsWith('.md'));

  check(commands.length >= 5, `${commands.length} commands found`, 'Less than 5 commands found');

  const coreCommands = ['plan.md', 'cook.md', 'fix.md'];
  coreCommands.forEach((cmd) => {
    check(commands.includes(cmd), `Core command '${cmd}' exists`, `Core command '${cmd}' is missing`);
  });
}

function checkPackageJson() {
  log.header('Package.json Validation');

  const pkgPath = path.join(ROOT_DIR, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  check(pkg.name, 'Package name is defined', 'Package name is missing');
  check(pkg.version, 'Package version is defined', 'Package version is missing');
  check(pkg.license === 'MIT', 'MIT license', 'License is not MIT', true);

  const requiredScripts = ['test', 'lint'];
  requiredScripts.forEach((script) => {
    const hasRealScript =
      pkg.scripts[script] && !pkg.scripts[script].includes('echo') && pkg.scripts[script] !== 'exit 0';
    check(hasRealScript, `Script '${script}' is properly configured`, `Script '${script}' is fake or missing`);
  });
}

function checkEnvExample() {
  log.header('Environment Configuration');

  const envExamplePath = path.join(ROOT_DIR, '.env.example');
  check(fs.existsSync(envExamplePath), '.env.example exists', '.env.example is missing', true);

  const claudeEnvPath = path.join(CLAUDE_DIR, '.env.example');
  check(fs.existsSync(claudeEnvPath), '.claude/.env.example exists', '.claude/.env.example is missing', true);
}

function printSummary() {
  log.header('Summary');

  const percentage = Math.round((passedChecks / totalChecks) * 100);
  const status = percentage >= 80 ? 'HEALTHY' : percentage >= 60 ? 'NEEDS ATTENTION' : 'CRITICAL';

  console.log(`\nTotal checks: ${totalChecks}`);
  console.log(`${colors.green}Passed: ${passedChecks}${colors.reset}`);
  console.log(`${colors.red}Failed: ${totalChecks - passedChecks - warnings}${colors.reset}`);
  console.log(`${colors.yellow}Warnings: ${warnings}${colors.reset}`);
  console.log(`\nHealth Score: ${percentage}% - ${status}`);

  if (percentage < 100) {
    console.log('\nRun the following to fix issues:');
    console.log('  npm run lint:fix    # Fix linting issues');
    console.log('  npm run format      # Fix formatting issues');
  }

  process.exit(percentage >= 60 ? 0 : 1);
}

// Run all checks
console.log('ClaudeKit Engineer - Health Check\n');
console.log('Running project health validation...');

checkRequiredFiles();
checkRequiredDirectories();
checkSkills();
checkCommands();
checkPackageJson();
checkEnvExample();
printSummary();
