import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const cybersecurityTopic: MajorTopic = {
  id: "cybersecurity",
  title: "Cybersecurity",
  slug: "cybersecurity",
  summary: "Threats, vulnerabilities, authentication, malware, and defensive thinking.",
  subtopics: [
    {
      id: "security-basics",
      title: "Security Basics",
      slug: "security-basics",
      summary: "Common risks and controls used to protect systems.",
      concepts: [
        stubConcept("malware", "Malware", "Software designed to harm, disrupt, or gain unauthorised access."),
        stubConcept("authentication", "Authentication", "Checking that a user or system is who it claims to be."),
      ],
    },
  ],
};
