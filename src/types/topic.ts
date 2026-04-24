export type CodeExample = {
  language: string;
  code: string;
};

export type InlineExercise = {
  prompt: string;
  hint?: string;
};

export type VisualiserPlaceholder = {
  title: string;
  description: string;
};

export type Concept = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  explanation: string[];
  exampleCode?: CodeExample;
  visualiser?: VisualiserPlaceholder;
  exercises?: InlineExercise[];
  commonMistakes?: string[];
};

export type Subtopic = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  concepts: Concept[];
};

export type MajorTopic = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  subtopics: Subtopic[];
};

export type ConceptLocation = {
  topic: MajorTopic;
  subtopic: Subtopic;
  concept: Concept;
  conceptNumber: number;
  conceptTotal: number;
};

export type SearchResult = {
  title: string;
  subtitle: string;
  summary: string;
  href: string;
};
