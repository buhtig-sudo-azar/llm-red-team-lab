import { LearningModule, LearningPath } from '@/types';

export const learningModules: LearningModule[] = [
  {
    slug: 'injection-fundamentals',
    title: 'Внедрение инструкций',
    description: 'Фундаментальный модуль: прямые и косвенные инъекции, jailbreak-техники и обход RLHF-защиты. Базовые навыки Red Team-оператора.',
    subtopics: ['classic-jailbreak', 'direct-injection', 'indirect-injection'],
    difficulty: 'basic',
    prerequisites: [],
  },
  {
    slug: 'context-attacks',
    title: 'Контекстные атаки',
    description: 'Атаки через манипуляцию контекстом: переполнение, извлечение системного промпта, обфускация и стеганография. Продвинутые техники уклонения.',
    subtopics: ['filter-evasion', 'context-manipulation', 'adversarial-suffix'],
    difficulty: 'intermediate',
    prerequisites: ['injection-fundamentals'],
  },
  {
    slug: 'multi-step-attacks',
    title: 'Многошаговые атаки',
    description: 'Постепенная эскалация, цепочки эксплуатации, перехват агентов. Комбинированные атаки, требующие планирования и терпения.',
    subtopics: ['chain-attacks', 'agent-hijacking', 'multi-step-injection'],
    difficulty: 'advanced',
    prerequisites: ['injection-fundamentals', 'context-attacks'],
  },
  {
    slug: 'data-and-external',
    title: 'Данные и внешние источники',
    description: 'Атаки через данные: эксфильтрация, RAG-отравление, инъекции через документы и форматированные данные. Скрытые каналы и невидимые символы.',
    subtopics: ['data-exfiltration', 'rag-poisoning', 'external-source-attacks'],
    difficulty: 'intermediate',
    prerequisites: ['injection-fundamentals'],
  },
  {
    slug: 'tool-and-agent',
    title: 'Инструментальные и агентные атаки',
    description: 'Атаки на tool use, цепочки инструментов, MCP-эксплуатация, мультимодальные атаки. Главный промышленный риск 2026 года.',
    subtopics: ['tool-chain-attacks', 'multimodal-attacks', 'supply-chain-llm'],
    difficulty: 'combined',
    prerequisites: ['multi-step-attacks', 'data-and-external'],
  },
  {
    slug: 'emerging-and-automation',
    title: 'Новые векторы и автоматизация',
    description: 'Экономические атаки, перенос между моделями, смысловые перефразировки. Индустриализация: метрики, генератор атак, автоматизированные пайплайны.',
    subtopics: ['economic-cross-model-attacks', 'attack-metrics-classification', 'attack-generator', 'model-extraction'],
    difficulty: 'combined',
    prerequisites: ['tool-and-agent'],
  },
  {
    slug: 'methodology',
    title: 'Red Team методология',
    description: 'Системный подход к тестированию: разведка, фреймворки эксплуатации, документирование. Интеграция всех навыков в единую методологию.',
    subtopics: ['reconnaissance', 'exploitation-framework', 'xss-via-llm'],
    difficulty: 'combined',
    prerequisites: ['multi-step-attacks'],
  },
];

export const learningPaths: LearningPath[] = [
  {
    slug: 'red-team-fundamentals',
    title: 'Red Team: Фундамент',
    description: 'Базовый путь для начинающих: от понимания инъекций до обхода фильтров. Рекомендуется как первый курс.',
    modules: ['injection-fundamentals', 'context-attacks'],
    targetAudience: 'Начинающие Red Team-операторы, студенты кибербезопасности, разработчики LLM-приложений',
  },
  {
    slug: 'advanced-exploitation',
    title: 'Red Team: Продвинутая эксплуатация',
    description: 'Продвинутый путь: многошаговые атаки, перехват агентов, цепочки эксплуатации. Для тех, кто освоил фундамент.',
    modules: ['multi-step-attacks', 'data-and-external', 'methodology'],
    targetAudience: 'Опытные Red Team-операторы, пентестеры, security-исследователи',
  },
  {
    slug: 'industrial-red-team',
    title: 'Red Team: Индустриальный уровень',
    description: 'Полный путь от фундамента до индустриальной автоматизации. Метрики, генератор атак, непрерывное тестирование.',
    modules: ['injection-fundamentals', 'context-attacks', 'multi-step-attacks', 'data-and-external', 'tool-and-agent', 'emerging-and-automation', 'methodology'],
    targetAudience: 'Профессиональные Red Team-лидеры, CISO, архитекторы AI-безопасности',
  },
  {
    slug: 'agent-security',
    title: 'Безопасность AI-агентов',
    description: 'Фокус на инструментальных и агентных атаках — главный риск 2026 года. Tool use, MCP, мультиагентные системы.',
    modules: ['injection-fundamentals', 'multi-step-attacks', 'tool-and-agent', 'emerging-and-automation'],
    targetAudience: 'Разработчики AI-агентов, архитекторы LangChain/LangGraph систем, MCP-разработчики',
  },
];
