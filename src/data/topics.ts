import type { Pathway, PathwayId, Topic, TopicLevel } from "../types/topic";

export const pathways: Pathway[] = [
  {
    id: "gcse",
    label: "GCSE",
    level: "GCSE",
    title: "GCSE Computer Science",
    summary: "A clear route through systems, data, networks, security, and exam-ready terminology.",
  },
  {
    id: "alevel",
    label: "A-Level",
    level: "A-Level",
    title: "A-Level Computer Science",
    summary: "A deeper pathway for algorithms, data structures, paradigms, complexity, and theory.",
  },
  {
    id: "core",
    label: "Core",
    level: "Core",
    title: "Core Computer Science",
    summary: "Shared foundations for programming, problem solving, maths, and software thinking.",
  },
];

export const topics: Topic[] = [
  {
    id: "computational-thinking",
    title: "Computational Thinking",
    area: "Foundations",
    level: "Core",
    order: 1,
    summary: "Decomposition, abstraction, pattern recognition, algorithms, and logical problem solving.",
    objectives: ["Break down problems", "Spot reusable patterns", "Describe algorithmic steps clearly"],
    status: "ready",
    lesson: {
      explanation:
        "Computational thinking is the habit of turning messy problems into precise steps a computer or person can follow.",
      workedExample:
        "For a bus timetable app, decompose the problem into stops, routes, times, delays, and user queries before writing code.",
      commonMistakes: ["Starting with syntax before the problem is understood", "Keeping irrelevant details instead of abstracting them"],
      nextSteps: ["Practise writing pseudocode", "Move into programming fundamentals"],
    },
  },
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    area: "Programming",
    level: "Core",
    order: 2,
    summary: "Variables, selection, iteration, functions, and trace tables.",
    objectives: ["Read short programs", "Predict output", "Write precise pseudocode"],
    status: "ready",
    lesson: {
      explanation:
        "Programming fundamentals are the small set of ideas that appear in almost every program: storing values, making decisions, repeating steps, and grouping logic.",
      workedExample:
        "A grade calculator stores a mark, uses selection to choose a grade boundary, and repeats the process for each student.",
      commonMistakes: ["Confusing assignment with comparison", "Changing loop variables in a way that prevents the loop ending"],
      nextSteps: ["Trace short programs", "Write functions with clear inputs and outputs"],
    },
  },
  {
    id: "python",
    title: "Python",
    area: "Programming",
    level: "Core",
    order: 3,
    summary: "Core syntax, data types, control flow, functions, and file handling.",
    objectives: ["Use Python syntax accurately", "Structure small programs", "Debug common errors"],
    status: "ready",
    lesson: {
      explanation:
        "Python is a practical language for expressing algorithms with readable syntax and a small amount of ceremony.",
      workedExample:
        "A password checker can use strings, conditions, loops, and functions to validate length, digits, and symbols.",
      commonMistakes: ["Mixing strings and numbers without conversion", "Relying on indentation that does not match the intended block"],
      nextSteps: ["Build short command-line programs", "Practise file handling and validation"],
    },
  },
  {
    id: "maths-for-computer-science",
    title: "Maths for Computer Science",
    area: "Foundations",
    level: "Core",
    order: 4,
    summary: "Sets, logic, counting, graphs, functions, and notation used across Computer Science.",
    objectives: ["Use notation confidently", "Read simple proofs", "Connect maths to algorithms"],
    status: "planned",
    lesson: {
      explanation:
        "Computer Science maths gives you the language for describing structures, decisions, relationships, and growth.",
      workedExample:
        "A social network can be modelled as a graph, where users are vertices and friendships are edges.",
      commonMistakes: ["Treating notation as decoration", "Skipping definitions before using a theorem or rule"],
      nextSteps: ["Review Boolean logic", "Use graph vocabulary with networking and algorithms"],
    },
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    area: "Practice",
    level: "Core",
    order: 5,
    summary: "Requirements, modularity, testing, maintainability, and collaboration habits.",
    objectives: ["Separate concerns", "Write testable code", "Use clear project structure"],
    status: "planned",
    lesson: {
      explanation:
        "Software engineering is about building programs so they can be understood, tested, changed, and trusted over time.",
      workedExample:
        "A quiz app can separate question data, scoring logic, and interface components so each part stays easier to change.",
      commonMistakes: ["Putting every feature in one file", "Adding dependencies before checking whether simple code is enough"],
      nextSteps: ["Refactor repeated code", "Write small tests for core logic"],
    },
  },
  {
    id: "memory-and-storage",
    title: "Memory and Storage",
    area: "Systems",
    level: "GCSE",
    order: 1,
    summary: "Primary memory, secondary storage, units, volatility, capacity, and performance trade-offs.",
    objectives: ["Compare RAM and storage", "Use storage units", "Explain performance choices"],
    status: "planned",
    lesson: {
      explanation:
        "Memory and storage describe where data lives while a computer is running and where it is kept for later use.",
      workedExample:
        "A game uses RAM for active state during play and secondary storage for saved progress after the device powers off.",
      commonMistakes: ["Calling all storage memory", "Forgetting that RAM is volatile"],
      nextSteps: ["Revise data representation", "Connect storage choices to system performance"],
    },
  },
  {
    id: "data-representation",
    title: "Data Representation",
    area: "Systems",
    level: "GCSE",
    order: 2,
    summary: "Binary, hexadecimal, characters, images, sound, compression, and units.",
    objectives: ["Convert number bases", "Calculate storage needs", "Explain encoding choices"],
    status: "ready",
    lesson: {
      explanation:
        "Data representation is how computers encode numbers, text, images, and sound using binary patterns.",
      workedExample:
        "The decimal number 13 can be represented as 1101 in binary, which is also D in hexadecimal.",
      commonMistakes: ["Mixing up bits and bytes", "Forgetting that metadata can affect file size"],
      nextSteps: ["Practise base conversion", "Compare lossy and lossless compression"],
    },
  },
  {
    id: "boolean-logic",
    title: "Boolean Logic",
    area: "Theory",
    level: "GCSE",
    order: 3,
    summary: "Logic gates, truth tables, Boolean expressions, and circuit simplification.",
    objectives: ["Build truth tables", "Read logic diagrams", "Simplify simple expressions"],
    status: "ready",
    lesson: {
      explanation:
        "Boolean logic uses true and false values to model decisions, expressions, and digital circuits.",
      workedExample:
        "A door alarm might sound when the door is open AND the alarm is armed.",
      commonMistakes: ["Reading OR as exclusive when the exam means inclusive OR", "Missing every row in a truth table"],
      nextSteps: ["Build truth tables", "Connect logic gates to circuits"],
    },
  },
  {
    id: "computer-architecture",
    title: "Computer Architecture",
    area: "Systems",
    level: "GCSE",
    order: 4,
    summary: "CPU components, registers, buses, the fetch-execute cycle, and instruction flow.",
    objectives: ["Label CPU parts", "Explain instruction cycles", "Connect hardware to program execution"],
    status: "planned",
    lesson: {
      explanation:
        "Computer architecture explains how the CPU, memory, registers, buses, and instructions work together to run programs.",
      workedExample:
        "During the fetch-execute cycle, the CPU fetches an instruction from memory, decodes it, then executes the operation.",
      commonMistakes: ["Confusing the program counter with the accumulator", "Skipping the decode stage"],
      nextSteps: ["Trace a fetch-execute cycle", "Review memory and storage"],
    },
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    area: "Systems",
    level: "GCSE",
    order: 5,
    summary: "Process management, memory management, files, users, security, and utility software.",
    objectives: ["Describe OS responsibilities", "Compare utilities", "Explain resource management"],
    status: "planned",
    lesson: {
      explanation:
        "An operating system manages hardware and software resources so users and applications can work reliably.",
      workedExample:
        "When two apps run at once, the OS schedules CPU time and allocates memory so each process can continue.",
      commonMistakes: ["Calling every application an operating system", "Forgetting security and file management roles"],
      nextSteps: ["Link processes to CPU scheduling", "Review memory management"],
    },
  },
  {
    id: "networking",
    title: "Networking",
    area: "Systems",
    level: "GCSE",
    order: 6,
    summary: "Protocols, packet switching, network topologies, layers, and security basics.",
    objectives: ["Explain packet journeys", "Compare topologies", "Use protocol vocabulary"],
    status: "planned",
    lesson: {
      explanation:
        "Networking is how computers exchange data using agreed rules, addressing, hardware, and layered protocols.",
      workedExample:
        "Loading a website uses DNS to find an address, TCP/IP to move packets, and HTTP to request the page.",
      commonMistakes: ["Confusing the internet with the web", "Treating packets as if they always travel one fixed route"],
      nextSteps: ["Trace a packet journey", "Compare LANs and WANs"],
    },
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    area: "Systems",
    level: "GCSE",
    order: 7,
    summary: "Threats, vulnerabilities, malware, social engineering, prevention, and defensive habits.",
    objectives: ["Identify common threats", "Explain prevention methods", "Use security vocabulary precisely"],
    status: "planned",
    lesson: {
      explanation:
        "Cybersecurity protects systems, networks, and data from damage, theft, disruption, and unauthorised access.",
      workedExample:
        "Phishing attacks trick users into entering credentials on a fake site; training and multi-factor authentication reduce the risk.",
      commonMistakes: ["Treating passwords as the only defence", "Mixing up malware categories"],
      nextSteps: ["Compare technical and human threats", "Revise authentication methods"],
    },
  },
  {
    id: "databases",
    title: "Databases",
    area: "Data",
    level: "GCSE",
    order: 8,
    summary: "Tables, records, fields, keys, relationships, validation, and simple queries.",
    objectives: ["Model tabular data", "Identify keys", "Explain validation and queries"],
    status: "planned",
    lesson: {
      explanation:
        "A database stores organised data so it can be searched, updated, related, and protected more reliably than a flat file.",
      workedExample:
        "A school database can store students, classes, and teachers in related tables connected by keys.",
      commonMistakes: ["Confusing a field with a record", "Using duplicate values as primary keys"],
      nextSteps: ["Design a small table", "Practise simple query logic"],
    },
  },
  {
    id: "algorithms",
    title: "Algorithms",
    area: "Algorithms",
    level: "A-Level",
    order: 1,
    summary: "Searching, sorting, recursion, graph traversal, and algorithm design.",
    objectives: ["Trace standard algorithms", "Explain trade-offs", "Design step-by-step solutions"],
    status: "planned",
    lesson: {
      explanation:
        "Algorithms are precise procedures for solving problems, and A-Level work focuses on tracing, comparing, and designing them.",
      workedExample:
        "Binary search repeatedly halves a sorted list until it finds the target or proves the target is absent.",
      commonMistakes: ["Using binary search on unsorted data", "Forgetting base cases in recursive algorithms"],
      nextSteps: ["Trace sorting algorithms", "Compare iterative and recursive solutions"],
    },
  },
  {
    id: "data-structures",
    title: "Data Structures",
    area: "Algorithms",
    level: "A-Level",
    order: 2,
    summary: "Arrays, records, stacks, queues, linked lists, trees, and graphs.",
    objectives: ["Compare structures", "Trace operations", "Choose suitable storage"],
    status: "planned",
    lesson: {
      explanation:
        "Data structures organise data so operations like insertion, deletion, traversal, and lookup fit the problem.",
      workedExample:
        "A queue is suitable for print jobs because the first job added should usually be the first job processed.",
      commonMistakes: ["Choosing structures by familiarity instead of operation cost", "Mixing up stack and queue order"],
      nextSteps: ["Trace stack and queue operations", "Compare trees and graphs"],
    },
  },
  {
    id: "complexity-big-o",
    title: "Complexity and Big O",
    area: "Theory",
    level: "A-Level",
    order: 3,
    summary: "Time complexity, space complexity, growth rates, and practical comparisons.",
    objectives: ["Classify growth rates", "Estimate running time", "Compare algorithm efficiency"],
    status: "planned",
    lesson: {
      explanation:
        "Big O describes how an algorithm's resource use grows as input size increases, ignoring machine-specific details.",
      workedExample:
        "A loop over every item in a list is O(n), while checking every pair of items is often O(n^2).",
      commonMistakes: ["Treating Big O as exact running time", "Ignoring the dominant term for large inputs"],
      nextSteps: ["Estimate loops from pseudocode", "Compare search and sort complexities"],
    },
  },
  {
    id: "object-oriented-programming",
    title: "Object-Oriented Programming",
    area: "Programming",
    level: "A-Level",
    order: 4,
    summary: "Classes, objects, encapsulation, inheritance, polymorphism, and modelling trade-offs.",
    objectives: ["Model entities as classes", "Explain encapsulation", "Compare inheritance and composition"],
    status: "planned",
    lesson: {
      explanation:
        "Object-oriented programming groups data and behaviour into objects so larger programs can model related responsibilities.",
      workedExample:
        "A card game might model Deck, Card, and Player classes, with methods for shuffling, drawing, and scoring.",
      commonMistakes: ["Making every variable public", "Using inheritance where a simple field or helper would be clearer"],
      nextSteps: ["Sketch class diagrams", "Implement small classes in Python"],
    },
  },
  {
    id: "functional-programming",
    title: "Functional Programming",
    area: "Programming",
    level: "A-Level",
    order: 5,
    summary: "Pure functions, immutability, recursion, higher-order functions, and declarative thinking.",
    objectives: ["Identify pure functions", "Use recursion safely", "Explain immutability benefits"],
    status: "planned",
    lesson: {
      explanation:
        "Functional programming emphasises expressions, pure functions, and data transformations over changing shared state.",
      workedExample:
        "Mapping a list of marks to grades applies the same function to each value without mutating the original list.",
      commonMistakes: ["Calling any function functional programming", "Forgetting recursive base cases"],
      nextSteps: ["Practise map/filter/reduce", "Compare functional and object-oriented styles"],
    },
  },
  {
    id: "theory-of-computation",
    title: "Theory of Computation",
    area: "Theory",
    level: "A-Level",
    order: 6,
    summary: "Finite automata, grammars, computability, decidability, and formal languages.",
    objectives: ["Model simple machines", "Reason about languages", "Separate solvable from unsolvable"],
    status: "planned",
    lesson: {
      explanation:
        "Theory of computation studies what machines can compute, how languages can be recognised, and where limits appear.",
      workedExample:
        "A finite automaton can recognise strings that contain an even number of 1s by switching between two states.",
      commonMistakes: ["Adding memory to a finite automaton", "Confusing a language with a programming language"],
      nextSteps: ["Draw simple automata", "Review grammars and regular expressions"],
    },
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    area: "Theory",
    level: "A-Level",
    order: 7,
    summary: "Search, heuristics, machine learning ideas, knowledge representation, and evaluation.",
    objectives: ["Explain search spaces", "Use heuristic vocabulary", "Compare rule-based and learned systems"],
    status: "planned",
    lesson: {
      explanation:
        "Artificial intelligence studies systems that perform tasks associated with reasoning, search, learning, and decision making.",
      workedExample:
        "A route-finding system can use a heuristic to estimate which path is likely to reach the destination efficiently.",
      commonMistakes: ["Treating all AI as machine learning", "Ignoring how training data affects outcomes"],
      nextSteps: ["Compare search strategies", "Review data and model evaluation"],
    },
  },
];

export function getPathwayById(pathwayId: string): Pathway | undefined {
  return pathways.find((pathway) => pathway.id === pathwayId);
}

export function getTopicsByLevel(level: TopicLevel): Topic[] {
  return topics.filter((topic) => topic.level === level).sort((a, b) => a.order - b.order);
}

export function getPathwayTopics(pathwayId: PathwayId): Topic[] {
  const pathway = getPathwayById(pathwayId);

  return pathway ? getTopicsByLevel(pathway.level) : [];
}

export function getTopicForPathway(pathwayId: PathwayId, topicId: string): Topic | undefined {
  return getPathwayTopics(pathwayId).find((topic) => topic.id === topicId);
}
