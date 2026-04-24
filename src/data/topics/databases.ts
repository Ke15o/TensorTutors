import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const databasesTopic: MajorTopic = {
  id: "databases",
  title: "Databases",
  slug: "databases",
  summary: "Tables, keys, relationships, queries, and database design.",
  subtopics: [
    {
      id: "relational-databases",
      title: "Relational Databases",
      slug: "relational-databases",
      summary: "Data stored in related tables.",
      concepts: [
        stubConcept("tables", "Tables", "Structured rows and columns used to store related data."),
        stubConcept("primary-keys", "Primary Keys", "Fields that uniquely identify records."),
      ],
    },
  ],
};
