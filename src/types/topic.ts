export type PathwayId = "gcse" | "alevel" | "core";

export type TopicLevel = "GCSE" | "A-Level" | "Core";

export type TopicStatus = "ready" | "planned";

export type Pathway = {
  id: PathwayId;
  label: string;
  level: TopicLevel;
  title: string;
  summary: string;
};

export type LessonContent = {
  explanation: string;
  workedExample: string;
  commonMistakes: string[];
  nextSteps: string[];
};

export type Topic = {
  id: string;
  title: string;
  area: string;
  level: TopicLevel;
  order: number;
  summary: string;
  objectives: string[];
  status: TopicStatus;
  lesson: LessonContent;
};
