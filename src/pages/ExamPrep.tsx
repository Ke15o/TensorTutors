import { PlaceholderPage } from "../components/PlaceholderPage";

export function ExamPrep() {
  return (
    <PlaceholderPage
      eyebrow="Exam Prep"
      title="Revision material built around marks and clarity"
      summary="Exam prep will collect concise notes, command words, mark-scheme patterns, and timed practice."
      cards={[
        { eyebrow: "Revision", title: "Concise notes", body: "Compressed explanations for the ideas students must recall." },
        { eyebrow: "Technique", title: "Command words", body: "Explain, compare, describe, evaluate, and justify with precision." },
        { eyebrow: "Timing", title: "Practice sets", body: "Short papers and targeted drills for weak areas." },
      ]}
    />
  );
}
