import { PlaceholderPage } from "../components/PlaceholderPage";

export function Visualisers() {
  return (
    <PlaceholderPage
      eyebrow="Visualisers"
      title="Interactive models for abstract ideas"
      summary="Visualisers will turn algorithms, memory, logic, networks, and automata into inspectable learning tools."
      cards={[
        { eyebrow: "Algorithms", title: "Sorting traces", body: "Compare passes, swaps, comparisons, and final complexity." },
        { eyebrow: "Systems", title: "CPU cycle", body: "Walk through fetch, decode, execute, and register changes." },
        { eyebrow: "Logic", title: "Truth tables", body: "Build expressions, evaluate rows, and connect gates to output." },
      ]}
    />
  );
}
