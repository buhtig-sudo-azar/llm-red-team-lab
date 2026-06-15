'use client';

import { Subtopic } from '@/types';
import {
  Lightbulb, BookOpen, GitBranch, Code2, AlertTriangle,
  FlaskConical, Shield, Brain, XCircle, Cpu, Target, GraduationCap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MarkdownRenderer } from '@/components/ui/markdown-renderer';
import { LlmSandbox } from '@/components/sandbox/LlmSandbox';
import { DiagramRenderer } from '@/components/diagrams/DiagramRenderer';

function SectionTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <Icon className="h-6 w-6 text-primary" />
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export function TopicViewContent({ subtopic }: { subtopic: Subtopic }) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <SectionTitle icon={Lightbulb} title="Введение" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Что это такое?</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.introduction.what}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Зачем это нужно?</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.introduction.why}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Где используется?</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.introduction.where}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Какую проблему решает?</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.introduction.problem}</p>
          </div>
        </CardContent>
      </Card>

      {/* Theory */}
      <Card>
        <CardHeader>
          <SectionTitle icon={BookOpen} title="Теоретическая часть" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-xl mb-3">Основные термины</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subtopic.theory.terms.map((term) => (
                <div key={term.term} className="p-4 rounded-lg border border-border bg-muted/30">
                  <dt className="font-semibold text-base text-primary">{term.term}</dt>
                  <dd className="text-base text-muted-foreground mt-1 leading-relaxed">{term.definition}</dd>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-xl mb-3">Принципы работы</h4>
            <MarkdownRenderer content={subtopic.theory.principles} />
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-xl mb-3">Архитектура</h4>
            <MarkdownRenderer content={subtopic.theory.architecture} />
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-xl mb-3">Связи с другими технологиями</h4>
            <MarkdownRenderer content={subtopic.theory.connections} />
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <SectionTitle icon={GitBranch} title="Визуальная схема" />
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold text-xl mb-3">{subtopic.diagram.title}</h4>
          <DiagramRenderer data={subtopic.diagram} />
        </CardContent>
      </Card>

      {/* Practical Examples */}
      <Card>
        <CardHeader>
          <SectionTitle icon={Code2} title="Практические примеры" />
        </CardHeader>
        <CardContent className="space-y-4">
          {subtopic.practicalExamples.map((example, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-muted/30">
                <h4 className="font-semibold text-lg">{example.title}</h4>
                <p className="text-base text-muted-foreground mt-1">{example.description}</p>
              </div>
              {example.code && (
                <div className="relative">
                  <SyntaxHighlighter
                    language={example.language || 'typescript'}
                    style={oneDark}
                    customStyle={{
                      margin: 0,
                      fontSize: '15px',
                      borderRadius: 0,
                    }}
                  >
                    {example.code}
                  </SyntaxHighlighter>
                  {example.language && (
                    <Badge
                      variant="secondary"
                      className="absolute top-2 right-2 text-xs"
                    >
                      {example.language}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Interactive Sandboxes */}
      {subtopic.sandboxes && subtopic.sandboxes.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <FlaskConical className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Интерактивные песочницы</h2>
          </div>
          {subtopic.sandboxes.map((sandbox, i) => (
            <LlmSandbox key={i} type={sandbox.type as any} title={sandbox.title} description={sandbox.description} defaultPrompt={sandbox.defaultPrompt} defaultSystem={sandbox.defaultSystem} />
          ))}
        </div>
      )}

      {/* Difficulty Badge */}
      <div className="flex items-center gap-2">
        <Badge variant={subtopic.difficulty === 'basic' ? 'secondary' : subtopic.difficulty === 'intermediate' ? 'outline' : subtopic.difficulty === 'advanced' ? 'destructive' : 'default'}>
          {subtopic.difficulty === 'basic' ? '🟢 Базовый' : subtopic.difficulty === 'intermediate' ? '🟡 Средний' : subtopic.difficulty === 'advanced' ? '🔴 Продвинутый' : '🟣 Комбинированный'}
        </Badge>
      </div>

      {/* Lesson Template */}
      <Card>
        <CardHeader>
          <SectionTitle icon={GraduationCap} title="Урок" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Цель</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.lesson.objective}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Сценарий</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.lesson.scenario}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Задача</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.lesson.task}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Ожидаемое поведение</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.lesson.expectedBehavior}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Разбор</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.lesson.breakdown}</p>
          </div>
        </CardContent>
      </Card>

      {/* Vulnerability Mechanism */}
      <Card>
        <CardHeader>
          <SectionTitle icon={Shield} title="Механизм уязвимости" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Корневая причина</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.vulnerabilityMechanism.rootCause}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Путь эксплуатации</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.vulnerabilityMechanism.exploitationPath}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary mb-1.5">Почему защита не работает</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{subtopic.vulnerabilityMechanism.defenseFailureReason}</p>
          </div>
        </CardContent>
      </Card>

      {/* Attack Logic (Cognitive Model) */}
      <Card>
        <CardHeader>
          <SectionTitle icon={Brain} title="Логика атаки — думай как атакующий" />
        </CardHeader>
        <CardContent className="space-y-4">
          {subtopic.attackLogic.map((step, i) => (
            <div key={i} className="p-4 rounded-lg border border-border bg-muted/30">
              <h4 className="font-semibold text-lg text-primary mb-2">Шаг {i + 1}</h4>
              <div className="space-y-2">
                <p><span className="font-semibold">Гипотеза:</span> {step.hypothesis}</p>
                <p><span className="font-semibold">Проверка:</span> {step.verification}</p>
                <p><span className="font-semibold">Ожидаемый результат:</span> {step.expectedResult}</p>
                <p><span className="font-semibold">Анализ:</span> {step.analysis}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Failed Scenarios (Anti-examples) */}
      <Card>
        <CardHeader>
          <SectionTitle icon={XCircle} title="Неуспешные сценарии — антипримеры" />
        </CardHeader>
        <CardContent className="space-y-4">
          {subtopic.failedScenarios.map((scenario, i) => (
            <div key={i} className="p-4 rounded-lg border border-orange-500/20 bg-orange-500/5">
              <h4 className="font-semibold text-lg text-orange-600 mb-2">Провал #{i + 1}</h4>
              <div className="space-y-2">
                <p><span className="font-semibold">Атака:</span> <code className="text-sm bg-muted px-1.5 py-0.5 rounded">{scenario.attack}</code></p>
                <p><span className="font-semibold">Причина провала:</span> {scenario.failureReason}</p>
                <p><span className="font-semibold">Ответ модели:</span> <em className="text-muted-foreground">&laquo;{scenario.modelResponse}&raquo;</em></p>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p><span className="font-semibold text-primary">Урок:</span> {scenario.lesson}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Model Profiles */}
      <Card>
        <CardHeader>
          <SectionTitle icon={Cpu} title="Адаптация под модели" />
        </CardHeader>
        <CardContent className="space-y-4">
          {subtopic.modelProfiles.map((profile, i) => (
            <div key={i} className="p-4 rounded-lg border border-border bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={profile.profile === 'weak' ? 'secondary' : profile.profile === 'medium' ? 'outline' : 'destructive'}>
                  {profile.profile === 'weak' ? 'Слабая' : profile.profile === 'medium' ? 'Средняя' : 'Усиленная'}
                </Badge>
              </div>
              <div className="space-y-1 text-base">
                <p><span className="font-semibold">Примеры моделей:</span> {profile.exampleModels}</p>
                <p><span className="font-semibold">Стратегия адаптации:</span> {profile.adaptationStrategy}</p>
                <p><span className="font-semibold">Ожидаемый успех:</span> {profile.expectedSuccessRate}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Success Criteria */}
      <Card>
        <CardHeader>
          <SectionTitle icon={Target} title="Критерии успеха" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {subtopic.successCriteria.map((criteria, i) => (
              <div key={i} className={`p-4 rounded-lg border ${
                criteria.outcome === 'success' ? 'border-green-500/20 bg-green-500/5' :
                criteria.outcome === 'partial' ? 'border-yellow-500/20 bg-yellow-500/5' :
                'border-red-500/20 bg-red-500/5'
              }`}>
                <Badge variant={criteria.outcome === 'success' ? 'default' : criteria.outcome === 'partial' ? 'outline' : 'destructive'} className="mb-2">
                  {criteria.outcome === 'success' ? '✅ Успех' : criteria.outcome === 'partial' ? '⚠️ Частично' : '❌ Провал'}
                </Badge>
                <h4 className="font-semibold text-base">{criteria.criterion}</h4>
                <p className="text-sm text-muted-foreground mt-1">{criteria.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <SectionTitle icon={AlertTriangle} title="Частые ошибки новичков" />
        </CardHeader>
        <CardContent className="space-y-4">
          {subtopic.commonMistakes.map((mistake, i) => (
            <div key={i} className="p-4 rounded-lg border border-destructive/20 bg-destructive/5">
              <h4 className="font-semibold text-lg text-destructive mb-2">❌ {mistake.mistake}</h4>
              <p className="text-lg text-muted-foreground mb-2">{mistake.explanation}</p>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-lg"><span className="font-semibold text-primary">✅ Правильный подход:</span> {mistake.correctApproach}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>


    </div>
  );
}
