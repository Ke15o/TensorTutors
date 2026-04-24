import { useMemo, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopicGrid } from "../components/TopicGrid";
import { majorTopics } from "../data/topics";
import { searchLearningContent } from "../lib/learning";

export function Home() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchLearningContent(query), [query]);

  return (
    <main className="page-shell flex min-h-[calc(100svh-3rem)] flex-col items-center justify-center py-8 text-center sm:min-h-[calc(100vh-5rem)] sm:py-14">
      <div className="flex flex-col items-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-chalk-400 sm:text-xs sm:tracking-[0.28em]">STRUCTURED LEARNING</p>
        <h1 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[0.015em] text-chalk-100 sm:mt-5 sm:text-5xl sm:tracking-[0.03em] md:text-6xl">
          <span>Tensor</span>
          <span className="text-circuit-300">Tutors</span>
        </h1>
        <p className="mt-3 font-sans text-sm leading-6 text-chalk-200/60 sm:mt-4 sm:text-lg sm:leading-7">Understand Computer Science — fast.</p>
      </div>

      <div className="mt-8 w-full sm:mt-10">
        <SearchBar value={query} onChange={setQuery} results={results} />
      </div>

      <section className="mt-8 w-full text-left sm:mt-12">
        <TopicGrid topics={majorTopics} />
      </section>
    </main>
  );
}
