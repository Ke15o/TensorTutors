import type { MajorTopic } from "../../../types/topic";
import { relationalDatabasesSubtopic } from "./relationalDatabases";

export const databasesTopic: MajorTopic = {
  id: "databases",
  title: "Databases",
  slug: "databases",
  summary: "Tables, keys, relationships, queries, and database design.",
  subtopics: [relationalDatabasesSubtopic],
};
