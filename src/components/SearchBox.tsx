type SearchBoxProps = {
  placeholder?: string;
};

export function SearchBox({ placeholder = "Search Computer Science topics..." }: SearchBoxProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink-900 p-3 shadow-line">
      <label className="sr-only" htmlFor="topic-search">
        Search Computer Science topics
      </label>
      <input
        id="topic-search"
        className="focus-ring w-full rounded-md border border-white/10 bg-ink-950 px-4 py-4 text-base text-chalk-100 placeholder:text-chalk-400"
        placeholder={placeholder}
        type="search"
      />
    </div>
  );
}
