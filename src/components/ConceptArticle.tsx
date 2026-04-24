import { CodeBlock } from "./CodeBlock";
import { ExerciseBox } from "./ExerciseBox";
import { InfoBox } from "./InfoBox";
import { PrevNextNav } from "./PrevNextNav";
import { getAdjacentConcepts } from "../data/topics";
import type { ConceptLocation } from "../types/topic";

type ConceptArticleProps = {
  location: ConceptLocation;
};

export function ConceptArticle({ location }: ConceptArticleProps) {
  const { topic, subtopic, concept, conceptNumber, conceptTotal } = location;
  const adjacent = getAdjacentConcepts(topic, concept.id);

  return (
    <article className="max-w-4xl">
      <p className="text-sm font-semibold uppercase text-circuit-300">
        {topic.title} / {subtopic.title}
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-chalk-100">{concept.title}</h1>
      <p className="mt-3 text-sm text-chalk-400">
        Concept {conceptNumber} of {conceptTotal}
      </p>
      <p className="mt-5 text-lg leading-8 text-chalk-200/85">{concept.summary}</p>

      <section className="mt-10 grid gap-5">
        <h2 className="text-2xl font-semibold text-chalk-100">Explanation</h2>
        {concept.explanation.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-chalk-200/85">
            {paragraph}
          </p>
        ))}
      </section>

      {concept.exampleCode ? (
        <section className="mt-10 grid gap-5">
          <h2 className="text-2xl font-semibold text-chalk-100">Example</h2>
          <CodeBlock code={concept.exampleCode.code} language={concept.exampleCode.language} />
        </section>
      ) : null}

      {concept.visualiser ? (
        <section className="mt-10">
          <InfoBox title={concept.visualiser.title}>{concept.visualiser.description}</InfoBox>
        </section>
      ) : null}

      {concept.exercises ? (
        <section className="mt-10">
          <ExerciseBox exercises={concept.exercises} />
        </section>
      ) : null}

      {concept.commonMistakes ? (
        <section className="mt-10 rounded-lg border border-white/10 bg-ink-900/70 p-5">
          <h2 className="text-xl font-semibold text-chalk-100">Common mistakes</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-chalk-200/85">
            {concept.commonMistakes.map((mistake) => (
              <li key={mistake} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-theorem-300" />
                <span>{mistake}</span>
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
