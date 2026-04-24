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
        Search topics or concepts
      </label>

      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-chalk-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        <input
          id="site-search"
          className="w-full rounded-lg border border-white/10 bg-ink-900 py-4 pl-12 pr-5 text-base text-chalk-100 shadow-line outline-none transition placeholder:text-chalk-400 hover:border-white/20 hover:shadow-line focus:border-circuit-300/40 focus:ring-2 focus:ring-circuit-300/10"
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search topics or concepts..."
          type="search"
          value={value}
        />
      </div>

      {results.length > 0 ? (
        <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-ink-900 text-left shadow-line">
          {results.map((result) => (
            <a
              key={`${result.href}-${result.title}`}
              className="block border-b border-white/10 p-4 transition last:border-b-0 hover:bg-white/[0.03]"
              href={result.href}
            >
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
