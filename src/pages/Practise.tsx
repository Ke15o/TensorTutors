import { PlaceholderPage } from "../components/PlaceholderPage";

export function Practise() {
  return (
    <PlaceholderPage
      eyebrow="Practise"
      title="Exam-style practice that rewards method"
      summary="Practice sets will focus on short, marked questions, trace tables, pseudocode, and targeted feedback."
      cards={[
        { eyebrow: "Questions", title: "By topic", body: "Grouped practice for programming, systems, theory, and data." },
        { eyebrow: "Method", title: "Worked answers", body: "Step-by-step solutions with marks tied to exam language." },
        { eyebrow: "Recall", title: "Mini quizzes", body: "Small checks for definitions, conversions, and common misconceptions." },
      ]}
    />
  );
}
