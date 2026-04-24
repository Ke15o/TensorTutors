import type { MajorTopic } from "../../../types/topic";
import { securityBasicsSubtopic } from "./securityBasics";

export const cybersecurityTopic: MajorTopic = {
  id: "cybersecurity",
  title: "Cybersecurity",
  slug: "cybersecurity",
  summary: "Threats, vulnerabilities, authentication, malware, and defensive thinking.",
  subtopics: [securityBasicsSubtopic],
};
