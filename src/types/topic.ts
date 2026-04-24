export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "code";
      language: string;
      code: string;
    }
  | {
      type: "info";
      variant: "note" | "warning";
      title: string;
      body: string;
    }
  | {
      type: "table";
      columns: string[];
      rows: string[][];
    };

export type TutorialSection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

export type Subtopic = {
  slug: string;
  title: string;
  summary: string;
  sections: TutorialSection[];
};

export type TutorialCategory = {
  slug: string;
  title: string;
  description: string;
  subtopics: Subtopic[];
};

export type ReferenceItem = {
  title: string;
  category: string;
  summary: string;
  href: string;
};

export type ExerciseSet = {
  title: string;
  category: string;
  summary: string;
  href: string;
};
