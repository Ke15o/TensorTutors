import { CodeBlock } from "./CodeBlock";
import { ExerciseBox } from "./ExerciseBox";
import { InfoBox } from "./InfoBox";
import Markdown from "./Markdown";
import { PrevNextNav } from "./PrevNextNav";
import { getAdjacentConcepts } from "../lib/learning";
import type { ConceptLocation } from "../types/topic";

type ConceptArticleProps = {
  location: ConceptLocation;
};

export function ConceptArticle({ location }: ConceptArticleProps) {
  const { topic, subtopic, concept, conceptNumber, conceptTotal } = location;
  const adjacent = getAdjacentConcepts(topic, concept.id);
  const progressPercent = (conceptNumber / conceptTotal) * 100;

  return (
    <article className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-circuit-300">
        {topic.title} / {subtopic.title}
      </p>

      <h1 className="mt-3 text-4xl font-semibold tracking-[0.01em] text-chalk-100 sm:text-5xl">
        {concept.title}
      </h1>

      <div className="mt-4 max-w-xs">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-chalk-400/80">
          Concept {conceptNumber} of {conceptTotal}
        </p>
        <div className="mt-2 h-px overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <div className="h-full rounded-full bg-circuit-300/50" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-chalk-200/80">{concept.summary}</p>

      <section className="mt-10 grid gap-5">
        <h2 className="text-2xl font-semibold tracking-[0.01em] text-chalk-100 sm:text-3xl">
          Explanation
        </h2>

        {concept.explanation.map((paragraph) => (
          <div key={paragraph} className="text-base leading-8 text-chalk-200/75">
            <Markdown>{paragraph}</Markdown>
          </div>
        ))}
      </section>

      {concept.exampleCode ? (
        <section className="mt-10 grid gap-5">
          <h2 className="text-2xl font-semibold tracking-[0.01em] text-chalk-100 sm:text-3xl">
            Example
          </h2>
          <CodeBlock code={concept.exampleCode.code} language={concept.exampleCode.language} />
        </section>
      ) : null}

      {concept.visualiser ? (
        <section className="mt-10">
          <InfoBox title={concept.visualiser.title}>
            {concept.visualiser.description}
          </InfoBox>
        </section>
      ) : null}

      {concept.exercises ? (
        <section className="mt-10">
          <ExerciseBox exercises={concept.exercises} />
        </section>
      ) : null}

      {concept.commonMistakes ? (
        <section className="mt-10 rounded-lg border border-white/10 bg-ink-900/60 p-5">
          <h2 className="text-2xl font-semibold tracking-[0.01em] text-chalk-100">
            Common mistakes
          </h2>

          <ul className="mt-4 grid gap-2 text-sm leading-6 text-chalk-200/75">
            {concept.commonMistakes.map((mistake) => (
              <li key={mistake} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-theorem-300/80" />
                <span>
                  <Markdown>{mistake}</Markdown>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-12">
        <PrevNextNav previous={adjacent.previous} next={adjacent.next} topic={topic} />
      </div>
    </article>
  );
}

