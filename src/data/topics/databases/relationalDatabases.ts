import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const relationalDatabasesSubtopic: Subtopic = {
  id: "relational-databases",
  title: "Relational Databases",
  slug: "relational-databases",
  summary: "Data stored in related tables.",
  concepts: [
    stubConcept("tables", "Tables", "Structured rows and columns used to store related data."),
    stubConcept("primary-keys", "Primary Keys", "Fields that uniquely identify records."),
  ],
};
