import { PlaceholderPage } from "../components/PlaceholderPage";

export function Glossary() {
  return (
    <PlaceholderPage
      eyebrow="Glossary"
      title="Precise definitions without extra noise"
      summary="The glossary will define terms, link them to lessons, and show quick examples where useful."
      cards={[
        { eyebrow: "Terms", title: "Definitions", body: "Short, exam-ready explanations for key vocabulary." },
        { eyebrow: "Examples", title: "Context", body: "Tiny examples that show how a term appears in code or diagrams." },
        { eyebrow: "Links", title: "Connected topics", body: "Related lessons and practice sets for fast revision loops." },
      ]}
    />
  );
}
