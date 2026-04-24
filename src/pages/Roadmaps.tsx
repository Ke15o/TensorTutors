import { PlaceholderPage } from "../components/PlaceholderPage";

export function Roadmaps() {
  return (
    <PlaceholderPage
      eyebrow="Roadmaps"
      title="Clear paths through Computer Science"
      summary="Roadmaps will sequence topics for GCSE, A-Level, Python, algorithms, systems, and theory."
      cards={[
        { eyebrow: "GCSE", title: "Foundation path", body: "Programming, representation, architecture, networks, and security." },
        { eyebrow: "A-Level", title: "Depth path", body: "Algorithms, data structures, OOP, databases, and formal methods." },
        { eyebrow: "Bridge", title: "University prep", body: "Mathematics, complexity, automata, and proof-oriented thinking." },
      ]}
    />
  );
}
