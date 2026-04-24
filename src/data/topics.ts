import type { ExerciseSet, ReferenceItem, Subtopic, TutorialCategory } from "../types/topic";

const placeholderSections = (title: string, summary: string) => [
  {
    id: "overview",
    title: `What is ${title}?`,
    blocks: [
      {
        type: "paragraph" as const,
        text: summary,
      },
      {
        type: "info" as const,
        variant: "note" as const,
        title: "Reference page in progress",
        body: "This topic is part of the reference structure. Full worked examples and practice questions can be added here without changing the routing or layout.",
      },
    ],
  },
];

export const categories: TutorialCategory[] = [
  {
    slug: "programming",
    title: "Programming",
    description: "Core programming ideas, Python syntax, control flow, functions, and debugging habits.",
    subtopics: [
      {
        slug: "programming-fundamentals",
        title: "Programming Fundamentals",
        summary: "Variables, sequence, selection, iteration, functions, and trace tables.",
        sections: placeholderSections(
          "programming fundamentals",
          "Programming fundamentals are the small set of ideas that appear in almost every program.",
        ),
      },
      {
        slug: "python-basics",
        title: "Python Basics",
        summary: "Data types, expressions, conditions, loops, functions, and files in Python.",
        sections: placeholderSections("Python basics", "Python is a readable language for expressing algorithms precisely."),
      },
      {
        slug: "debugging",
        title: "Debugging",
        summary: "Strategies for finding syntax, runtime, and logic errors.",
        sections: placeholderSections("debugging", "Debugging is the process of locating and fixing incorrect program behaviour."),
      },
    ],
  },
  {
    slug: "data-structures",
    title: "Data Structures",
    description: "Ways to organise data so operations such as access, insertion, deletion, and traversal are efficient.",
    subtopics: [
      {
        slug: "arrays",
        title: "Arrays",
        summary: "Indexed, contiguous collections with fast access and fixed-size trade-offs.",
        sections: placeholderSections("arrays", "An array stores values in indexed positions, usually in contiguous memory."),
      },
      {
        slug: "linked-lists",
        title: "Linked Lists",
        summary: "A sequence of nodes where each node stores data and one or more links to other nodes.",
        sections: [
          {
            id: "what-is-a-linked-list",
            title: "What is a linked list?",
            blocks: [
              {
                type: "paragraph",
                text: "A linked list is a linear data structure made from nodes. Each node stores a value and a reference to the next node in the sequence. Unlike an array, the nodes do not need to sit next to each other in memory.",
              },
              {
                type: "paragraph",
                text: "Linked lists are useful when you need frequent insertion and deletion near known positions, or when the collection size changes often. They are less useful when you need constant-time indexed access.",
              },
              {
                type: "info",
                variant: "note",
                title: "Key idea",
                body: "A linked list trades direct indexing for flexible links between nodes.",
              },
            ],
          },
          {
            id: "nodes-and-pointers",
            title: "Nodes and pointers",
            blocks: [
              {
                type: "paragraph",
                text: "A node is the basic building block of a linked list. In a singly linked list, each node has data and a pointer to the next node. The first node is called the head.",
              },
              {
                type: "code",
                language: "ts",
                code: `type ListNode<T> = {\n  value: T;\n  next: ListNode<T> | null;\n};\n\nconst head: ListNode<number> = {\n  value: 10,\n  next: {\n    value: 20,\n    next: null,\n  },\n};`,
              },
            ],
          },
          {
            id: "singly-vs-doubly",
            title: "Singly vs doubly linked lists",
            blocks: [
              {
                type: "paragraph",
                text: "A singly linked list only points forward. A doubly linked list points forward and backward, which makes reverse traversal easier but uses extra memory per node.",
              },
              {
                type: "table",
                columns: ["Type", "Links per node", "Strength", "Trade-off"],
                rows: [
                  ["Singly linked list", "next", "Simple and memory efficient", "Cannot move backward from a node"],
                  ["Doubly linked list", "previous and next", "Can traverse both directions", "Uses more memory and more pointer updates"],
                ],
              },
            ],
          },
          {
            id: "traversal",
            title: "Traversal",
            blocks: [
              {
                type: "paragraph",
                text: "Traversal means visiting nodes one at a time, starting at the head and following links until the current node is null.",
              },
              {
                type: "code",
                language: "ts",
                code: `function printList<T>(head: ListNode<T> | null) {\n  let current = head;\n\n  while (current !== null) {\n    console.log(current.value);\n    current = current.next;\n  }\n}`,
              },
            ],
          },
          {
            id: "insertion",
            title: "Insertion",
            blocks: [
              {
                type: "paragraph",
                text: "Insertion changes links so a new node becomes part of the chain. Inserting at the head is usually constant time because only the new node and head reference need updating.",
              },
              {
                type: "code",
                language: "ts",
                code: `function insertAtHead<T>(head: ListNode<T> | null, value: T): ListNode<T> {\n  return {\n    value,\n    next: head,\n  };\n}`,
              },
              {
                type: "info",
                variant: "warning",
                title: "Pointer order matters",
                body: "When inserting in the middle, connect the new node to the next node before redirecting the previous node. Otherwise part of the list can become unreachable.",
              },
            ],
          },
          {
            id: "deletion",
            title: "Deletion",
            blocks: [
              {
                type: "paragraph",
                text: "Deletion removes a node by changing the previous node's link so it skips over the deleted node. If the head is deleted, the head reference must move to the next node.",
              },
              {
                type: "code",
                language: "ts",
                code: `function deleteHead<T>(head: ListNode<T> | null): ListNode<T> | null {\n  if (head === null) {\n    return null;\n  }\n\n  return head.next;\n}`,
              },
            ],
          },
          {
            id: "time-complexity",
            title: "Time complexity",
            blocks: [
              {
                type: "table",
                columns: ["Operation", "Singly linked list", "Reason"],
                rows: [
                  ["Access by index", "O(n)", "You may need to traverse from the head"],
                  ["Search", "O(n)", "Each node may need checking"],
                  ["Insert at head", "O(1)", "Only the head link changes"],
                  ["Delete after known node", "O(1)", "Only local links change"],
                  ["Insert at end", "O(n)", "Unless a tail pointer is stored"],
                ],
              },
            ],
          },
          {
            id: "linked-lists-vs-arrays",
            title: "Linked lists vs arrays",
            blocks: [
              {
                type: "table",
                columns: ["Question", "Array", "Linked list"],
                rows: [
                  ["Fast indexed access?", "Yes, O(1)", "No, usually O(n)"],
                  ["Cheap insertion at front?", "Usually no", "Yes, O(1)"],
                  ["Memory overhead?", "Low", "Higher because links are stored"],
                  ["Cache-friendly?", "Usually yes", "Usually less cache-friendly"],
                ],
              },
              {
                type: "info",
                variant: "note",
                title: "Exam phrasing",
                body: "Do not say linked lists are always faster. Say which operation is faster and why.",
              },
            ],
          },
          {
            id: "common-mistakes",
            title: "Common mistakes",
            blocks: [
              {
                type: "list",
                items: [
                  "Assuming linked lists support direct indexing like arrays.",
                  "Losing the rest of the list by overwriting a pointer too early.",
                  "Forgetting to handle an empty list.",
                  "Forgetting to update both directions in a doubly linked list.",
                ],
              },
            ],
          },
          {
            id: "practice-questions",
            title: "Short practice questions",
            blocks: [
              {
                type: "list",
                items: [
                  "Why is inserting at the head of a linked list O(1)?",
                  "What extra pointer does a doubly linked list store?",
                  "When would an array be a better choice than a linked list?",
                  "Write pseudocode to count the number of nodes in a singly linked list.",
                ],
              },
            ],
          },
        ],
      },
      {
        slug: "stacks",
        title: "Stacks",
        summary: "Last-in, first-out collections used for calls, undo, and parsing.",
        sections: placeholderSections("stacks", "A stack stores items so the most recently added item is removed first."),
      },
      {
        slug: "queues",
        title: "Queues",
        summary: "First-in, first-out collections used for scheduling and buffering.",
        sections: placeholderSections("queues", "A queue stores items so the earliest added item is removed first."),
      },
    ],
  },
  {
    slug: "algorithms",
    title: "Algorithms",
    description: "Searching, sorting, recursion, graph traversal, complexity, and algorithmic problem solving.",
    subtopics: [
      {
        slug: "binary-search",
        title: "Binary Search",
        summary: "A divide-and-conquer search algorithm for sorted data.",
        sections: placeholderSections("binary search", "Binary search repeatedly halves a sorted search space."),
      },
      {
        slug: "sorting",
        title: "Sorting Algorithms",
        summary: "How common sorting methods rearrange data and compare in efficiency.",
        sections: placeholderSections("sorting algorithms", "Sorting algorithms arrange data into a defined order."),
      },
      {
        slug: "big-o",
        title: "Big O",
        summary: "A way to describe how resource use grows with input size.",
        sections: placeholderSections("Big O", "Big O describes growth rates rather than exact running times."),
      },
    ],
  },
  {
    slug: "computer-systems",
    title: "Computer Systems",
    description: "CPU architecture, memory, storage, operating systems, binary, and data representation.",
    subtopics: [
      {
        slug: "cpu-architecture",
        title: "CPU Architecture",
        summary: "Registers, buses, instruction cycles, and the components that execute programs.",
        sections: placeholderSections("CPU architecture", "CPU architecture explains how instructions are fetched, decoded, and executed."),
      },
      {
        slug: "data-representation",
        title: "Data Representation",
        summary: "Binary, hexadecimal, characters, images, sound, compression, and units.",
        sections: placeholderSections("data representation", "Data representation is how computers encode information using bits."),
      },
      {
        slug: "operating-systems",
        title: "Operating Systems",
        summary: "Resource management, processes, files, users, and utilities.",
        sections: placeholderSections("operating systems", "An operating system manages hardware and software resources."),
      },
    ],
  },
  {
    slug: "databases",
    title: "Databases",
    description: "Tables, relationships, keys, queries, normalisation, and database design.",
    subtopics: [
      {
        slug: "relational-databases",
        title: "Relational Databases",
        summary: "Tables, records, fields, relationships, and constraints.",
        sections: placeholderSections("relational databases", "Relational databases store data in tables connected by keys."),
      },
      {
        slug: "sql-basics",
        title: "SQL Basics",
        summary: "Selecting, filtering, ordering, inserting, and updating records.",
        sections: placeholderSections("SQL basics", "SQL is a language for querying and changing relational data."),
      },
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    description: "Protocols, packet switching, addressing, topologies, layers, and the web.",
    subtopics: [
      {
        slug: "network-models",
        title: "Network Models",
        summary: "Layered models for organising protocols and communication responsibilities.",
        sections: placeholderSections("network models", "Network models group communication tasks into layers."),
      },
      {
        slug: "packet-switching",
        title: "Packet Switching",
        summary: "How messages are split, routed, and reassembled across networks.",
        sections: placeholderSections("packet switching", "Packet switching sends data in small chunks that can travel independently."),
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threats, vulnerabilities, malware, authentication, encryption, and defensive habits.",
    subtopics: [
      {
        slug: "malware",
        title: "Malware",
        summary: "Viruses, worms, trojans, ransomware, spyware, and prevention.",
        sections: placeholderSections("malware", "Malware is software designed to damage, disrupt, or gain unauthorised access."),
      },
      {
        slug: "authentication",
        title: "Authentication",
        summary: "How systems check identity using passwords, MFA, biometrics, and tokens.",
        sections: placeholderSections("authentication", "Authentication is the process of verifying identity."),
      },
    ],
  },
  {
    slug: "maths-for-cs",
    title: "Maths for CS",
    description: "Logic, sets, graphs, counting, functions, proof, and notation used in Computer Science.",
    subtopics: [
      {
        slug: "boolean-logic",
        title: "Boolean Logic",
        summary: "Truth values, operators, truth tables, expressions, and logic gates.",
        sections: placeholderSections("Boolean logic", "Boolean logic uses true and false values to reason about conditions."),
      },
      {
        slug: "graphs",
        title: "Graphs",
        summary: "Vertices, edges, paths, cycles, weights, and graph traversal.",
        sections: placeholderSections("graphs", "Graphs model relationships between objects."),
      },
    ],
  },
];

export const references: ReferenceItem[] = [
  {
    title: "Time Complexity",
    category: "Algorithms",
    summary: "Common Big O classes and how to compare algorithm growth.",
    href: "/tutorials/algorithms/big-o",
  },
  {
    title: "Linked List Operations",
    category: "Data Structures",
    summary: "Traversal, insertion, deletion, and complexity at a glance.",
    href: "/tutorials/data-structures/linked-lists",
  },
  {
    title: "Boolean Operators",
    category: "Maths for CS",
    summary: "AND, OR, NOT, XOR, truth tables, and common exam wording.",
    href: "/tutorials/maths-for-cs/boolean-logic",
  },
];

export const exercises: ExerciseSet[] = [
  {
    title: "Linked List Trace Questions",
    category: "Data Structures",
    summary: "Trace pointer changes during insertion and deletion.",
    href: "/tutorials/data-structures/linked-lists",
  },
  {
    title: "Binary Search Dry Runs",
    category: "Algorithms",
    summary: "Follow low, high, and mid values through sorted arrays.",
    href: "/tutorials/algorithms/binary-search",
  },
  {
    title: "Boolean Logic Tables",
    category: "Maths for CS",
    summary: "Complete truth tables and simplify simple expressions.",
    href: "/tutorials/maths-for-cs/boolean-logic",
  },
];

export function getCategoryBySlug(categorySlug: string): TutorialCategory | undefined {
  return categories.find((category) => category.slug === categorySlug);
}

export function getTopicBySlug(categorySlug: string, topicSlug: string): Subtopic | undefined {
  return getCategoryBySlug(categorySlug)?.subtopics.find((topic) => topic.slug === topicSlug);
}

export function getAdjacentTopics(categorySlug: string, topicSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  const index = category?.subtopics.findIndex((topic) => topic.slug === topicSlug) ?? -1;

  return {
    previous: index > 0 ? category?.subtopics[index - 1] : undefined,
    next: category && index >= 0 && index < category.subtopics.length - 1 ? category.subtopics[index + 1] : undefined,
  };
}
