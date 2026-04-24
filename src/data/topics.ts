import type { Concept, ConceptLocation, MajorTopic, SearchResult, Subtopic } from "../types/topic";

const stubConcept = (id: string, title: string, summary: string): Concept => ({
  id,
  title,
  slug: id,
  summary,
  explanation: [
    `${title} is part of the TensorTutors reference map. This page starts with the core definition, then expands into examples, visual notes, exercises, and common mistakes as the topic grows.`,
  ],
  visualiser: {
    title: "Visualiser placeholder",
    description: "A focused inline visualiser can sit here when this concept is expanded.",
  },
  exercises: [
    {
      prompt: `Write a two-sentence explanation of ${title.toLowerCase()} in your own words.`,
      hint: "Use the summary, then add one concrete example.",
    },
  ],
  commonMistakes: ["Memorising the term without connecting it to an example."],
});

export const majorTopics: MajorTopic[] = [
  {
    id: "python",
    title: "Python",
    slug: "python",
    summary: "Python syntax, program structure, functions, and object-oriented programming.",
    subtopics: [
      {
        id: "basics",
        title: "Basics",
        slug: "basics",
        summary: "The essentials needed to read and write small Python programs.",
        concepts: [
          stubConcept("variables", "Variables", "Names that refer to values stored while a program runs."),
          stubConcept("control-flow", "Control Flow", "The order in which Python decides and repeats program steps."),
          stubConcept("functions", "Functions", "Reusable named blocks of code with inputs, behaviour, and outputs."),
        ],
      },
      {
        id: "object-oriented-programming",
        title: "Object-Oriented Programming",
        slug: "object-oriented-programming",
        summary: "Classes, objects, attributes, methods, and relationships between types.",
        concepts: [
          {
            id: "classes",
            title: "Classes",
            slug: "classes",
            summary: "A class is a blueprint for creating objects with related data and behaviour.",
            explanation: [
              "A class defines a new type of thing in your program. It describes what data that thing stores and what actions it can perform. Objects are the actual instances created from the class.",
              "Classes are useful when a program has several related values and behaviours that should move together. Instead of passing separate variables around, you can group them into a single object with a clear responsibility.",
              "Attributes are values stored on an object. Methods are functions that belong to a class and usually work with the object's attributes through `self`.",
            ],
            exampleCode: {
              language: "python",
              code: `class Student:\n    def __init__(self, name, mark):\n        self.name = name\n        self.mark = mark\n\n    def has_passed(self):\n        return self.mark >= 40\n\nstudent = Student(\"Ada\", 82)\nprint(student.name)\nprint(student.has_passed())`,
            },
            visualiser: {
              title: "Class to object",
              description:
                "Think of `Student` as the blueprint. `student` is one object built from it, with its own `name` and `mark` attributes.",
            },
            exercises: [
              {
                prompt:
                  "Create a `Book` class with `title` and `author` attributes, then add a method called `description()` that returns a short sentence.",
                hint: "Follow the `Student` example: use `__init__`, store attributes on `self`, then return a string from a method.",
              },
            ],
            commonMistakes: [
              "Forgetting `self` as the first parameter of an instance method.",
              "Creating attributes as local variables instead of using `self.attribute_name`.",
              "Treating a class as the object itself rather than as the blueprint used to create objects.",
            ],
          },
          stubConcept("objects", "Objects", "Concrete instances created from a class."),
          stubConcept("inheritance", "Inheritance", "A way for one class to reuse and specialise another class."),
        ],
      },
    ],
  },
  {
    id: "algorithms",
    title: "Algorithms",
    slug: "algorithms",
    summary: "Searching, sorting, tracing, and reasoning about algorithm efficiency.",
    subtopics: [
      {
        id: "searching",
        title: "Searching",
        slug: "searching",
        summary: "Finding values in collections using systematic procedures.",
        concepts: [
          stubConcept("linear-search", "Linear Search", "Check each item one by one until the target is found or the data ends."),
          stubConcept("binary-search", "Binary Search", "Repeatedly halve a sorted search space."),
        ],
      },
      {
        id: "sorting",
        title: "Sorting",
        slug: "sorting",
        summary: "Rearranging values into a defined order.",
        concepts: [
          stubConcept("bubble-sort", "Bubble Sort", "Repeatedly compare neighbours and move larger values right."),
          stubConcept("merge-sort", "Merge Sort", "Divide the data, sort the parts, then merge them back together."),
        ],
      },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    slug: "data-structures",
    summary: "Arrays, stacks, queues, linked lists, and how data organisation affects operations.",
    subtopics: [
      {
        id: "linear-structures",
        title: "Linear Structures",
        slug: "linear-structures",
        summary: "Structures where items are arranged in a sequence.",
        concepts: [
          stubConcept("arrays", "Arrays", "Indexed collections where each position stores a value."),
          stubConcept("stacks", "Stacks", "Last-in, first-out collections."),
          stubConcept("queues", "Queues", "First-in, first-out collections."),
          stubConcept("linked-lists", "Linked Lists", "Nodes connected by references rather than direct indexing."),
        ],
      },
    ],
  },
  {
    id: "computer-systems",
    title: "Computer Systems",
    slug: "computer-systems",
    summary: "Hardware, operating systems, memory, storage, and data representation.",
    subtopics: [
      {
        id: "architecture",
        title: "Architecture",
        slug: "architecture",
        summary: "How computer components work together to execute programs.",
        concepts: [
          stubConcept("cpu", "CPU", "The processor that fetches, decodes, and executes instructions."),
          stubConcept("memory", "Memory", "Fast working storage used while programs run."),
        ],
      },
    ],
  },
  {
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
  },
  {
    id: "networking",
    title: "Networking",
    slug: "networking",
    summary: "Protocols, packets, addressing, topologies, and the web.",
    subtopics: [
      {
        id: "network-basics",
        title: "Network Basics",
        slug: "network-basics",
        summary: "Core ideas needed to describe how devices communicate.",
        concepts: [
          stubConcept("packets", "Packets", "Small chunks of data sent across a network."),
          stubConcept("protocols", "Protocols", "Agreed rules for communication between devices."),
        ],
      },
    ],
  },
  {
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
  },
  {
    id: "maths-for-cs",
    title: "Maths for CS",
    slug: "maths-for-cs",
    summary: "Logic, graphs, sets, functions, and notation used in Computer Science.",
    subtopics: [
      {
        id: "discrete-maths",
        title: "Discrete Maths",
        slug: "discrete-maths",
        summary: "Mathematical structures used for algorithms and systems.",
        concepts: [
          stubConcept("boolean-logic", "Boolean Logic", "Reasoning with true and false values."),
          stubConcept("graphs", "Graphs", "Vertices and edges used to model relationships."),
        ],
      },
    ],
  },
];

export function getMajorTopic(topicSlug: string): MajorTopic | undefined {
  return majorTopics.find((topic) => topic.slug === topicSlug);
}

export function getFirstConcept(topic: MajorTopic): ConceptLocation {
  const subtopic = topic.subtopics[0];
  const concept = subtopic.concepts[0];

  return {
    topic,
    subtopic,
    concept,
    conceptNumber: 1,
    conceptTotal: getConceptCount(topic),
  };
}

export function getConceptLocation(
  topicSlug: string,
  subtopicSlug?: string,
  conceptSlug?: string,
): ConceptLocation | undefined {
  const topic = getMajorTopic(topicSlug);

  if (!topic) {
    return undefined;
  }

  if (!subtopicSlug || !conceptSlug) {
    return getFirstConcept(topic);
  }

  let conceptNumber = 0;

  for (const subtopic of topic.subtopics) {
    for (const concept of subtopic.concepts) {
      conceptNumber += 1;

      if (subtopic.slug === subtopicSlug && concept.slug === conceptSlug) {
        return {
          topic,
          subtopic,
          concept,
          conceptNumber,
          conceptTotal: getConceptCount(topic),
        };
      }
    }
  }

  return undefined;
}

export function getAdjacentConcepts(topic: MajorTopic, activeConceptId: string) {
  const concepts = flattenConcepts(topic);
  const index = concepts.findIndex((item) => item.concept.id === activeConceptId);

  return {
    previous: index > 0 ? concepts[index - 1] : undefined,
    next: index >= 0 && index < concepts.length - 1 ? concepts[index + 1] : undefined,
  };
}

export function getConceptHref(topic: MajorTopic, subtopic: Subtopic, concept: Concept): string {
  return `/tutorials/${topic.slug}/${subtopic.slug}/${concept.slug}`;
}

export function getConceptCount(topic: MajorTopic): number {
  return topic.subtopics.reduce((total, subtopic) => total + subtopic.concepts.length, 0);
}

export function flattenConcepts(topic: MajorTopic) {
  return topic.subtopics.flatMap((subtopic) =>
    subtopic.concepts.map((concept) => ({
      topic,
      subtopic,
      concept,
      href: getConceptHref(topic, subtopic, concept),
    })),
  );
}

export function searchLearningContent(query: string): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const topic of majorTopics) {
    if (`${topic.title} ${topic.summary}`.toLowerCase().includes(normalizedQuery)) {
      const firstConcept = getFirstConcept(topic);
      results.push({
        title: topic.title,
        subtitle: "Major topic",
        summary: topic.summary,
        href: getConceptHref(topic, firstConcept.subtopic, firstConcept.concept),
      });
    }

    for (const subtopic of topic.subtopics) {
      if (`${subtopic.title} ${subtopic.summary}`.toLowerCase().includes(normalizedQuery)) {
        const firstConcept = subtopic.concepts[0];
        results.push({
          title: subtopic.title,
          subtitle: topic.title,
          summary: subtopic.summary,
          href: getConceptHref(topic, subtopic, firstConcept),
        });
      }

      for (const concept of subtopic.concepts) {
        if (`${concept.title} ${concept.summary}`.toLowerCase().includes(normalizedQuery)) {
          results.push({
            title: concept.title,
            subtitle: `${topic.title} / ${subtopic.title}`,
            summary: concept.summary,
            href: getConceptHref(topic, subtopic, concept),
          });
        }
      }
    }
  }

  return results.slice(0, 8);
}
