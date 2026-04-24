type CodeBlockProps = {
  code: string;
  language: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/10 bg-ink-950">
      <figcaption className="border-b border-white/10 px-4 py-2 font-mono text-xs uppercase text-chalk-400">
        {language}
      </figcaption>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-chalk-100">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
