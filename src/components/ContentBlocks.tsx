import { CodeBlock } from "./CodeBlock";
import { InfoBox } from "./InfoBox";
import type { ContentBlock } from "../types/topic";

type ContentBlocksProps = {
  blocks: ContentBlock[];
};

export function ContentBlocks({ blocks }: ContentBlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-base leading-8 text-chalk-200/85">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="grid gap-2 text-base leading-7 text-chalk-200/85">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 size-1.5 rounded-full bg-circuit-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "code") {
          return <CodeBlock key={index} code={block.code} language={block.language} />;
        }

        if (block.type === "info") {
          return (
            <InfoBox key={index} title={block.title} variant={block.variant}>
              {block.body}
            </InfoBox>
          );
        }

        return (
          <div key={index} className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead className="bg-white/[0.04] text-chalk-100">
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} className="border-b border-white/10 px-4 py-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-chalk-200/80">
                {block.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
