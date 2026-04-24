import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const basicsSubtopic: Subtopic = {
  id: "basics",
  title: "Basics",
  slug: "basics",
  summary: "The essentials needed to read and write small Python programs.",
  concepts: [
    {
      id: "variables",
      title: "Variables",
      slug: "variables",
      summary: "A variable is a name that refers to a value while a program runs.",
      explanation: [
        "A variable lets a program store a value and use it later. In Python, you create a variable by assigning a value to a name with `=`. The name should describe what the value represents.",
        "Variables can refer to different kinds of values, such as numbers, strings, booleans, lists, or objects. Python works out the type from the value you assign, so you do not write the type before the variable name.",
        "At a simple memory level, Python stores the value as an object somewhere in memory, and the variable name points to that object. If you assign a new value to the same name, the name is made to point at a different object. The old object may be removed later if nothing else refers to it.",
      ],
      exampleCode: {
        language: "python",
        code: `score = 12\nname = "Ada"\nhas_passed = score >= 10\n\nprint(name)\nprint(score)\nprint(has_passed)\n\nscore = score + 3\nprint(score)`,
      },
      visualiser: {
        title: "Name to value",
        description:
          "Think of a variable name as a label attached to a value in memory. Reassignment moves the label to a new value.",
      },
      exercises: [
        {
          prompt: "Create variables for a student's name, mark, and pass status, then print all three values.",
          hint: "Use a string for the name, a number for the mark, and a boolean expression for the pass status.",
        },
        {
          prompt: "Start with `counter = 0`, then write three assignment statements that increase it to 3.",
          hint: "Use `counter = counter + 1` each time.",
        },
        {
          prompt: "Explain in one sentence what happens when `score = 10` is followed by `score = 15`.",
          hint: "Focus on the name `score` referring to a new value.",
        },
      ],
      commonMistakes: [
        "Using `=` as if it means mathematical equality instead of assignment.",
        "Choosing vague names like `x` or `thing` when a clearer name would explain the value.",
        "Assuming a variable permanently stores one value, even after it has been reassigned.",
      ],
    },
    stubConcept("control-flow", "Control Flow", "The order in which Python decides and repeats program steps."),
    stubConcept("functions", "Functions", "Reusable named blocks of code with inputs, behaviour, and outputs."),
  ],
};
