import { useMemo, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopicGrid } from "../components/TopicGrid";
import { majorTopics, searchLearningContent } from "../data/topics";

export function Tutorials() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchLearningContent(query), [query]);

  return (
    <section className="page-shell py-12">
      <a className="focus-ring text-sm font-semibold text-circuit-300" href="/">
        TensorTutors
      </a>
      <h1 className="mt-5 text-4xl font-semibold text-chalk-100">Tutorials</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
        Choose a major Computer Science topic, then read through its subtopics and concepts.
      </p>

      <div className="mt-8">
        <SearchBar value={query} onChange={setQuery} results={results} />
      </div>

      <div className="mt-10">
        <TopicGrid topics={majorTopics} />
      </div>
    </section>
  );
}
