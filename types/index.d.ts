/**
 * ClaudeKit Engineer Type Definitions
 */

declare namespace ClaudeKit {
  /** Skill configuration */
  interface Skill {
    name: string;
    description: string;
    version?: string;
    author?: string;
    tags?: string[];
    dependencies?: string[];
  }

  /** Command configuration */
  interface Command {
    name: string;
    description: string;
    usage?: string;
    examples?: string[];
    aliases?: string[];
  }

  /** Agent configuration */
  interface Agent {
    name: string;
    role: string;
    capabilities: string[];
    instructions: string;
  }

  /** Workflow step */
  interface WorkflowStep {
    id: string;
    name: string;
    agent?: string;
    command?: string;
    inputs?: Record<string, unknown>;
    outputs?: string[];
    dependsOn?: string[];
  }

  /** Workflow configuration */
  interface Workflow {
    name: string;
    description: string;
    steps: WorkflowStep[];
    triggers?: string[];
  }

  /** Health check result */
  interface HealthCheckResult {
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
    warnings: number;
    score: number;
    status: 'HEALTHY' | 'NEEDS_ATTENTION' | 'CRITICAL';
  }

  /** Project metadata */
  interface ProjectMetadata {
    name: string;
    version: string;
    description: string;
    author: string;
    license: string;
    repository: string;
  }

  /** MCP Server configuration */
  interface MCPServer {
    command: string;
    args: string[];
    env?: Record<string, string>;
  }

  /** MCP configuration */
  interface MCPConfig {
    mcpServers: Record<string, MCPServer>;
  }
}

export = ClaudeKit;
export as namespace ClaudeKit;
