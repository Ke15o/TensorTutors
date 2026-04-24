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

      <div className="relative">
        {/* Magnifying Glass */}
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-chalk-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          id="site-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search topics, subtopics, or concepts..."
          className="
            w-full
            rounded-lg
            border border-white/10
            bg-ink-900
            pl-12 pr-5 py-4
            text-base text-chalk-100
            placeholder:text-chalk-400
            shadow-line

            outline-none
            ring-0 focus:ring-0

            transition-all duration-200

            hover:border-white/20
            hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]

            focus:border-circuit-300/40
            focus:shadow-[0_0_0_2px_rgba(94,234,212,0.15)]
          "
        />
      </div>

      {results.length > 0 && (
        <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-ink-900 text-left shadow-line">
          {results.map((result) => (
            <a
              key={`${result.href}-${result.title}`}
              href={result.href}
              className="
                block border-b border-white/10 p-4 last:border-b-0
                transition
                hover:bg-white/[0.03]
              "
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-chalk-100">
                  {result.title}
                </span>
                <span className="text-xs uppercase text-circuit-300">
                  {result.subtitle}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-chalk-200/75">
                {result.summary}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
