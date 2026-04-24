type CodeBlockProps = {
  code: string;
  language: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/[0.12] bg-black/25 shadow-line">
      <figcaption className="border-b border-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-chalk-400">
        {language}
      </figcaption>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-chalk-100/95">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
