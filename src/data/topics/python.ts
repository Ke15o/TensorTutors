import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const pythonTopic: MajorTopic = {
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
            code: `class Student:\n    def __init__(self, name, mark):\n        self.name = name\n        self.mark = mark\n\n    def has_passed(self):\n        return self.mark >= 40\n\nstudent = Student("Ada", 82)\nprint(student.name)\nprint(student.has_passed())`,
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
};
