import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const networkBasicsSubtopic: Subtopic = {
  id: "network-basics",
  title: "Network Basics",
  slug: "network-basics",
  summary: "Core ideas needed to describe how devices communicate.",
  concepts: [
    stubConcept("packets", "Packets", "Small chunks of data sent across a network."),
    stubConcept("protocols", "Protocols", "Agreed rules for communication between devices."),
  ],
};
