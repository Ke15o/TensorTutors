import { useMemo, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopicGrid } from "../components/TopicGrid";
import { majorTopics, searchLearningContent } from "../data/topics";

export function Home() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchLearningContent(query), [query]);

  return (
    <main className="page-shell flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-14 text-center">
      <h1 className="text-5xl font-semibold text-chalk-100 sm:text-6xl">TensorTutors</h1>
      <p className="mt-5 text-lg text-chalk-200/80">Computer Science revision, explained clearly.</p>

      <div className="mt-8 w-full">
        <SearchBar value={query} onChange={setQuery} results={results} />
      </div>

      <section className="mt-12 w-full text-left">
        <TopicGrid topics={majorTopics} />
      </section>

      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-chalk-400">
        <span className="rounded-md border border-white/10 px-3 py-2">Visualisers coming soon</span>
        <span className="rounded-md border border-white/10 px-3 py-2">Projects coming soon</span>
        <a className="focus-ring rounded-md border border-white/10 px-3 py-2 transition hover:text-circuit-300" href="/tutorials">
          Browse all tutorials
        </a>
      </div>
    </main>
  );
}
