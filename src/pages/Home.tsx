import { CategoryCard } from "../components/CategoryCard";
import { SearchBox } from "../components/SearchBox";
import { categories } from "../data/topics";

const quickLinks = [
  { label: "Linked Lists", href: "/tutorials/data-structures/linked-lists" },
  { label: "Binary Search", href: "/tutorials/algorithms/binary-search" },
  { label: "Boolean Logic", href: "/tutorials/maths-for-cs/boolean-logic" },
  { label: "SQL Basics", href: "/tutorials/databases/sql-basics" },
];

export function Home() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-950">
        <div className="page-shell py-14 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold text-chalk-100 sm:text-6xl">TensorTutors</h1>
            <p className="mt-5 text-lg leading-8 text-chalk-200/80">
              Computer Science tutorials, references, exercises, and visual explainers.
            </p>
          </div>

          <div className="mt-8 max-w-3xl">
            <SearchBox />
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  className="focus-ring rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-chalk-200/80 transition hover:border-circuit-300/40 hover:text-circuit-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-circuit-300">Tutorials</p>
            <h2 className="mt-3 text-3xl font-semibold text-chalk-100">Browse by topic area</h2>
          </div>
          <a className="focus-ring text-sm font-semibold text-circuit-300 hover:text-circuit-400" href="/tutorials">
            View all tutorials
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
