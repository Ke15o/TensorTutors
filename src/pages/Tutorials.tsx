import { CategoryCard } from "../components/CategoryCard";
import { SearchBox } from "../components/SearchBox";
import { categories } from "../data/topics";

export function Tutorials() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-900/60">
        <div className="page-shell py-12">
          <p className="text-sm font-semibold uppercase text-circuit-300">Tutorials</p>
          <h1 className="mt-3 text-4xl font-semibold text-chalk-100">Computer Science tutorials</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
            Topic-first explanations for programming, data structures, algorithms, systems, databases, networking,
            cybersecurity, and maths.
          </p>
          <div className="mt-6 max-w-2xl">
            <SearchBox />
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              count={category.subtopics.length}
              description={category.description}
              href={`/tutorials/${category.slug}`}
              title={category.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
