import type { Subtopic } from "../../../types/topic";

export const translationFoundationsSubtopic: Subtopic = {
  id: "translation-foundations",
  title: "Translation Foundations",
  slug: "translation-foundations",
  summary: "The difference between compiling and interpreting source code.",
  concepts: [
    {
      id: "compilers-vs-interpreters",
      title: "Compilers vs Interpreters",
      slug: "compilers-vs-interpreters",
      summary: "Compilers translate code before execution; interpreters execute code step by step.",
      explanation: [
        "A compiler translates source code into another form, often machine code or bytecode, before the program is run. This can allow detailed checks and optimisation before execution.",
        "An interpreter runs a program by reading and executing it step by step. Some languages and runtimes combine both approaches, such as compiling to bytecode and then interpreting or just-in-time compiling it.",
      ],
      commonMistakes: [
        "Assuming compiled always means fast and interpreted always means slow.",
        "Forgetting that many modern runtimes mix compilation and interpretation.",
        "Confusing syntax errors with runtime errors.",
      ],
    },
  ],
};
