export type TopicLevel = "GCSE" | "A-Level" | "Early university";

export type TopicStatus = "ready" | "planned";

export type Topic = {
  id: string;
  title: string;
  area: string;
  level: TopicLevel;
  summary: string;
  objectives: string[];
  status: TopicStatus;
};
