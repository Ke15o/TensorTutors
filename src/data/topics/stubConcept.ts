import type { Concept } from "../../types/topic";

export const stubConcept = (id: string, title: string, summary: string): Concept => ({
  id,
  title,
  slug: id,
  summary,
  explanation: [
    `${title} is part of the TensorTutors reference map. This page starts with the core definition, then expands into examples, visual notes, exercises, and common mistakes as the topic grows.`,
  ],
  visualiser: {
    title: "Visualiser placeholder",
    description: "A focused inline visualiser can sit here when this concept is expanded.",
  },
  exercises: [
    {
      prompt: `Write a two-sentence explanation of ${title.toLowerCase()} in your own words.`,
      hint: "Use the summary, then add one concrete example.",
    },
  ],
  commonMistakes: ["Memorising the term without connecting it to an example."],
});
