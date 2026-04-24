import type { InlineExercise } from "../types/topic";

type ExerciseBoxProps = {
  exercises: InlineExercise[];
};

export function ExerciseBox({ exercises }: ExerciseBoxProps) {
  if (exercises.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-white/10 bg-ink-900/70 p-5">
      <h2 className="text-xl font-semibold text-chalk-100">Practice Exercises</h2>
      <div className="mt-4 grid gap-4">
        {exercises.map((exercise, index) => (
          <div key={exercise.prompt} className="rounded-md border border-white/10 bg-ink-950/70 p-4">
            <p className="font-mono text-xs text-circuit-300">Exercise {index + 1}</p>
            <p className="mt-3 text-sm leading-6 text-chalk-200/85">{exercise.prompt}</p>
            {exercise.hint ? <p className="mt-3 text-sm leading-6 text-chalk-400">Hint: {exercise.hint}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
