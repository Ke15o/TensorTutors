import { PlaceholderPage } from "../components/PlaceholderPage";

export function Projects() {
  return (
    <PlaceholderPage
      eyebrow="Projects"
      title="Small builds that turn knowledge into skill"
      summary="Project briefs will connect syllabus ideas to compact, achievable programs and design exercises."
      cards={[
        { eyebrow: "Python", title: "CLI tools", body: "Text-based utilities that practise functions, files, and validation." },
        { eyebrow: "Data", title: "Mini databases", body: "Simple records, queries, and modelling tasks without a backend." },
        { eyebrow: "Theory", title: "Simulators", body: "Tiny models for automata, queues, stacks, and scheduling." },
      ]}
    />
  );
}
