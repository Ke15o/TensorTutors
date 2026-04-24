import type { MajorTopic } from "../../../types/topic";
import { networkBasicsSubtopic } from "./networkBasics";

export const networkingTopic: MajorTopic = {
  id: "networking",
  title: "Networking",
  slug: "networking",
  summary: "Protocols, packets, addressing, topologies, and the web.",
  subtopics: [networkBasicsSubtopic],
};
