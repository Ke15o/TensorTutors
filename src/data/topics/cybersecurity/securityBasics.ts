import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const securityBasicsSubtopic: Subtopic = {
  id: "security-basics",
  title: "Security Basics",
  slug: "security-basics",
  summary: "Common risks and controls used to protect systems.",
  concepts: [
    stubConcept("malware", "Malware", "Software designed to harm, disrupt, or gain unauthorised access."),
    stubConcept("authentication", "Authentication", "Checking that a user or system is who it claims to be."),
  ],
};
