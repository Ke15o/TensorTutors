import type { SearchResult } from "../types/topic";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  results: SearchResult[];
};

export function SearchBar({ value, onChange, results }: SearchBarProps) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <label className="sr-only" htmlFor="site-search">
        Search topics, subtopics, or concepts
      </label>
      <input
        id="site-search"
        className="focus-ring w-full rounded-lg border border-white/10 bg-ink-900 px-5 py-4 text-base text-chalk-100 shadow-line placeholder:text-chalk-400"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search topics, subtopics, or concepts..."
        type="search"
        value={value}
      />

      {results.length > 0 ? (
        <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-ink-900 text-left shadow-line">
          {results.map((result) => (
            <a key={`${result.href}-${result.title}`} className="focus-ring block border-b border-white/10 p-4 last:border-b-0 hover:bg-white/[0.03]" href={result.href}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-chalk-100">{result.title}</span>
                <span className="text-xs uppercase text-circuit-300">{result.subtitle}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-chalk-200/75">{result.summary}</p>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
