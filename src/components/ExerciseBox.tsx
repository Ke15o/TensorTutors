import type { InlineExercise } from "../types/topic";
import Markdown from "./Markdown";

type ExerciseBoxProps = {
  exercises: InlineExercise[];
};

export function ExerciseBox({ exercises }: ExerciseBoxProps) {
  if (exercises.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-white/10 bg-ink-900/60 p-5">
      <h2 className="text-2xl font-semibold tracking-[0.01em] text-chalk-100">
        Practice Exercises
      </h2>

      <div className="mt-4 grid gap-4">
        {exercises.map((exercise, index) => (
          <div
            key={exercise.prompt}
            className="rounded-md border border-white/10 bg-ink-950/60 p-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-circuit-300/90">
              Exercise {index + 1}
            </p>

            <div className="mt-3 text-sm leading-6 text-chalk-200/75">
              <Markdown>{exercise.prompt}</Markdown>
            </div>

            {exercise.hint ? (
              <div className="mt-3 text-sm leading-6 text-chalk-400/80">
                <span className="font-semibold">Hint: </span>
                <Markdown>{exercise.hint}</Markdown>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
