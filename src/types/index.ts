export type DifficultyLevel = 'basic' | 'intermediate' | 'advanced' | 'combined';

export type AttackOutcome = 'success' | 'partial' | 'failure';

export type ModelProfile = 'weak' | 'medium' | 'hardened';

export interface SubtopicIntroduction {
  what: string;
  why: string;
  where: string;
  problem: string;
}

export interface Term {
  term: string;
  definition: string;
}

export interface SubtopicTheory {
  terms: Term[];
  principles: string;
  architecture: string;
  connections: string;
}

/* ─── Diagram Types ─── */

export type DiagramNodeRole = 'input' | 'process' | 'decision' | 'output' | 'danger' | 'success' | 'warning' | 'neutral';

// Split Flow — canonical WCD diagram showing cache vs origin divergence
export interface SplitFlowStep {
  label: string;
  detail?: string;
  role: DiagramNodeRole;
}

export interface SplitFlowBranch {
  label: string;
  subtitle?: string;
  steps: SplitFlowStep[];
}

export interface SplitFlowDiagramData {
  type: 'split-flow';
  title: string;
  input: { label: string; subtitle?: string; url?: string };
  leftBranch: SplitFlowBranch;
  rightBranch: SplitFlowBranch;
  conclusion?: { left: string; right: string; highlight: string };
}

// Processing Flow — sequential flow with decisions
export interface ProcessingFlowStep {
  label: string;
  detail?: string;
  role: DiagramNodeRole;
  branchLabel?: string;
}

export interface ProcessingFlowDiagramData {
  type: 'processing-flow';
  title: string;
  steps: ProcessingFlowStep[];
}

// Dependency Graph — hierarchical tree
export interface DependencyNode {
  label: string;
  detail?: string;
  children?: DependencyNode[];
}

export interface DependencyGraphData {
  type: 'dependency-graph';
  title: string;
  root: DependencyNode;
}

// Cause → Effect chain
export interface CauseEffectStep {
  label: string;
  detail?: string;
  role: 'cause' | 'effect' | 'danger';
}

export interface CauseEffectData {
  type: 'cause-effect';
  title: string;
  steps: CauseEffectStep[];
}

// Attack Tree
export interface AttackTreeBranch {
  label: string;
  items: string[];
}

export interface AttackTreeData {
  type: 'attack-tree';
  title: string;
  root: string;
  branches: AttackTreeBranch[];
}

// Knowledge Map — interconnected topics
export interface KnowledgeMapTopic {
  label: string;
  children?: string[];
}

export interface KnowledgeMapData {
  type: 'knowledge-map';
  title: string;
  center: string;
  topics: KnowledgeMapTopic[];
}

// Union type for all diagrams
export type DiagramData =
  | SplitFlowDiagramData
  | ProcessingFlowDiagramData
  | DependencyGraphData
  | CauseEffectData
  | AttackTreeData
  | KnowledgeMapData;

/* ─── End Diagram Types ─── */

export interface PracticalExample {
  title: string;
  description: string;
  code?: string;
  language?: string;
  /** Why this attack works — the vulnerability mechanism */
  vulnerabilityMechanism?: string;
  /** Expected model behaviour (what the model does when attacked) */
  expectedBehavior?: string;
  /** Was the attack successful, partially successful, or failed? */
  outcome?: AttackOutcome;
  /** Breakdown/analysis of the attack result */
  breakdown?: string;
}

export type SandboxType =
  | 'jailbreak-lab' | 'prompt-inject-lab' | 'chain-attack-lab' | 'exfiltration-lab'
  | 'model-extract-lab' | 'rag-inject-lab' | 'adversarial-suffix-lab' | 'roleplay-bypass-lab'
  | 'multimodal-attack-lab' | 'api-exploit-lab' | 'data-poison-lab' | 'output-weaponize-lab'
  | 'side-channel-lab' | 'context-inject-lab' | 'token-smuggle-lab' | 'agent-hijack-lab'
  | 'multi-step-lab' | 'cross-model-lab' | 'semantic-para-lab' | 'external-source-lab'
  | 'formatted-data-lab' | 'tool-attack-lab' | 'tool-chain-lab' | 'economic-attack-lab'
  | 'hidden-channel-lab' | 'long-context-lab' | 'metrics-lab' | 'classification-lab'
  | 'variability-lab' | 'generator-lab';

export interface Sandbox {
  type: SandboxType;
  title: string;
  description: string;
  defaultPrompt?: string;
  defaultSystem?: string;
  defaultTemperature?: number;
  placeholder?: string;
  /** Success criteria for this sandbox exercise */
  successCriteria?: string;
  /** Hints to help the student */
  hints?: string[];
}

export interface CommonMistake {
  mistake: string;
  explanation: string;
  correctApproach: string;
}

export interface FurtherReading {
  topic: string;
  slug: string;
  categorySlug: string;
}

/* ─── New: Vulnerability Mechanism ─── */

export interface VulnerabilityMechanism {
  /** Why the vulnerability exists at the architectural level */
  rootCause: string;
  /** How the attack exploits this root cause */
  exploitationPath: string;
  /** Why standard defences fail against this attack */
  defenseFailureReason: string;
}

/* ─── New: Attack Logic (cognitive model) ─── */

export interface AttackLogicStep {
  hypothesis: string;
  verification: string;
  expectedResult: string;
  analysis: string;
}

/* ─── New: Failed Scenario (anti-example) ─── */

export interface FailedScenario {
  /** The failed attack prompt */
  attack: string;
  /** Why it failed */
  failureReason: string;
  /** What the model responded */
  modelResponse: string;
  /** What can be learned from this failure */
  lesson: string;
}

/* ─── New: Model Profile Adaptation ─── */

export interface ModelProfileAdaptation {
  /** Profile type */
  profile: ModelProfile;
  /** Example models in this profile */
  exampleModels: string;
  /** How to adapt the attack for this profile */
  adaptationStrategy: string;
  /** Expected success rate for this profile */
  expectedSuccessRate: string;
}

/* ─── New: Success Criteria ─── */

export interface SuccessCriteriaItem {
  /** Criterion name */
  criterion: string;
  /** Description */
  description: string;
  /** Outcome type */
  outcome: AttackOutcome;
}

/* ─── New: Lesson Template (mandatory standard) ─── */

export interface LessonTemplate {
  /** Lesson objective */
  objective: string;
  /** Attack scenario */
  scenario: string;
  /** Student task */
  task: string;
  /** Expected behaviour of the model */
  expectedBehavior: string;
  /** Detailed breakdown of the attack */
  breakdown: string;
}

/* ─── New: Learning Module ─── */

export interface LearningModule {
  /** Module slug */
  slug: string;
  /** Module title */
  title: string;
  /** Module description */
  description: string;
  /** Ordered list of subtopic slugs in this module */
  subtopics: string[];
  /** Difficulty level of the module */
  difficulty: DifficultyLevel;
  /** Prerequisite module slugs */
  prerequisites: string[];
}

/* ─── New: Learning Path ─── */

export interface LearningPath {
  /** Path slug */
  slug: string;
  /** Path title */
  title: string;
  /** Path description */
  description: string;
  /** Ordered modules */
  modules: string[];
  /** Target audience */
  targetAudience: string;
}

/* ─── Updated Subtopic with all new fields ─── */

export interface Subtopic {
  slug: string;
  title: string;
  categorySlug: string;
  difficulty: DifficultyLevel;
  introduction: SubtopicIntroduction;
  theory: SubtopicTheory;
  diagram: DiagramData;
  practicalExamples: PracticalExample[];
  sandboxes?: Sandbox[];
  commonMistakes: CommonMistake[];
  furtherReading: FurtherReading[];
  /** Why the vulnerability exists and how it's exploited at the architecture level */
  vulnerabilityMechanism: VulnerabilityMechanism;
  /** Cognitive model: how to think like an attacker */
  attackLogic: AttackLogicStep[];
  /** Failed attack scenarios — anti-examples */
  failedScenarios: FailedScenario[];
  /** How to adapt attacks for different model profiles */
  modelProfiles: ModelProfileAdaptation[];
  /** Success criteria for measuring attack outcomes */
  successCriteria: SuccessCriteriaItem[];
  /** Mandatory lesson template */
  lesson: LessonTemplate;
}

/* ─── Updated TopicCategory with module reference ─── */

export interface TopicCategory {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  subtopics: Subtopic[];
  /** Learning module this category belongs to */
  moduleSlug?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface SearchItem {
  type: 'category' | 'subtopic' | 'term';
  title: string;
  description: string;
  categorySlug: string;
  subtopicSlug?: string;
  keywords: string[];
}

export interface AgentData {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  gradient: string;
  greeting: string;
  suggestions: string[];
}

export interface GamificationState {
  xp: number;
  level: number;
  achievements: Achievement[];
  streak: number;
  lastActiveDate: string | null;
  dailyQuests: DailyQuest[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: number | null;
  xpReward: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  completed: boolean;
}
