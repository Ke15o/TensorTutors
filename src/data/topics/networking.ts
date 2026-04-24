import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const networkingTopic: MajorTopic = {
  id: "networking",
  title: "Networking",
  slug: "networking",
  summary: "Protocols, packets, addressing, topologies, and the web.",
  subtopics: [
    {
      id: "network-basics",
      title: "Network Basics",
      slug: "network-basics",
      summary: "Core ideas needed to describe how devices communicate.",
      concepts: [
        stubConcept("packets", "Packets", "Small chunks of data sent across a network."),
        stubConcept("protocols", "Protocols", "Agreed rules for communication between devices."),
      ],
    },
  ],
};
