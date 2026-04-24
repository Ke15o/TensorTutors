import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const basicsSubtopic: Subtopic = {
  id: "basics",
  title: "Basics",
  slug: "basics",
  summary: "The essentials needed to read and write small Python programs.",
  concepts: [
    {
      "id": "python-basics-variables",
      "title": "Variables",
      "slug": "python-variables",
      "summary": "A variable is a named reference to a value stored in memory.",
      "explanation": [
        "A **variable** is a name that refers to a value stored during program execution, created using the assignment operator `=`.",
        "Think of a variable as a **label** attached to a value — the label lets you access and reuse that value without knowing where it is in memory.",
        "In Python, variables are created dynamically by assigning a value, e.g. `x = 5`, and the **type is inferred automatically** (this is called *dynamic typing*).",
        "A variable can be reassigned to a new value at any time, e.g. `x = 10`, which means the label now points to a different object rather than changing the original value."
      ],
      "exampleCode": {
        "language": "python",
        "code": "x = 5\nname = \"Alice\"\n\nprint(x)      # 5\nprint(name)   # Alice\n\nx = 10        # reassignment\nprint(x)      # 10"
      },
      "visualiser": {
        "title": "Variable Assignment Visualiser",
        "description": "Shows how variable names reference values in memory and how reassignment updates the reference."
      },
      "exercises": [
        {
          "prompt": "Create a variable called `age` and assign it the value 18.",
          "hint": "Use the assignment operator `=`."
        },
        {
          "prompt": "Create two variables `a = 5` and `b = a`. Then change `a` to 10. What is the value of `b`?",
          "hint": "Assignment copies the reference at that moment."
        },
        {
          "prompt": "Write code that swaps the values of `x` and `y` without using a third variable.",
          "hint": "Python allows tuple unpacking."
        }
      ],
      "commonMistakes": [
        "Thinking `=` means equality — it is **assignment**, not comparison (`==` is comparison).",
        "Assuming variables store values directly — they store **references** to objects.",
        "Believing changing one variable always changes another — this only happens with shared references (e.g. mutable objects)."
      ]
    },
    {
      "id": "python-basics-data-types-type-casting",
      "title": "Data Types & Type Casting",
      "slug": "python-data-types-type-casting",
      "summary": "Data types define the kind of value a variable holds, and type casting converts values between types.",
      "explanation": [
        "A **data type** specifies what kind of value a variable holds, such as `int`, `float`, `str`, or `bool`.",
        "Think of types as **categories of data** — numbers behave differently from text, so Python needs to know how to handle each value.",
        "Python uses **dynamic typing**, meaning the type is inferred automatically from the value, e.g. `x = 5` creates an `int`, while `x = \"5\"` creates a `str`.",
        "Type casting converts a value from one type to another using functions like `int()`, `float()`, and `str()`, e.g. `int(\"10\")` → `10`."
      ],
      "exampleCode": {
        "language": "python",
        "code": "x = 5          # int\ny = 3.2        # float\nname = \"Alice\" # str\nis_on = True   # bool\n\n# Type casting\na = \"10\"\nb = int(a)     # converts string to integer\n\nc = 5\nd = float(c)   # converts int to float\n\nprint(type(b)) # <class 'int'>\nprint(type(d)) # <class 'float'>"
      },
      "visualiser": {
        "title": "Type Conversion Visualiser",
        "description": "Shows how values change type when passed through casting functions like int(), float(), and str()."
      },
      "exercises": [
        {
          "prompt": "Convert the string \"25\" into an integer and store it in a variable.",
          "hint": "Use the `int()` function."
        },
        {
          "prompt": "What is the result of `float(5)` and what type does it produce?",
          "hint": "Think about decimal representation."
        },
        {
          "prompt": "Fix this error: `age = \"18\" + 2`.",
          "hint": "Both values must be the same type before combining."
        },
        {
          "prompt": "Convert the boolean `True` into an integer. What value do you get?",
          "hint": "`int(True)` returns a number."
        }
      ],
      "commonMistakes": [
        "Mixing types in operations, e.g. `\"5\" + 2`, which causes a **TypeError**.",
        "Assuming all strings can be converted to numbers — `int(\"abc\")` will fail.",
        "Forgetting that `input()` returns a `str`, even if the user types a number.",
        "Confusing `int()` and `float()` — one removes decimals, the other preserves them."
      ]
    },
    {
      "id": "python-basics-operators",
      "title": "Operators",
      "slug": "python-operators",
      "summary": "Operators are symbols or keywords that perform operations on values and variables.",
      "explanation": [
        "An **operator** is a symbol or keyword that performs an action on one or more values, such as `+`, `-`, `*`, `/`, or `and`.",
        "Think of operators as **instructions between values** — they tell Python what to do with the data on either side.",
        "Python includes several categories: **arithmetic** (`+`, `-`, `*`, `/`, `//`, `%`, `**`), **comparison** (`==`, `!=`, `>`, `<`), and **logical** (`and`, `or`, `not`).",
        "Operators follow **precedence rules** (e.g. `*` before `+`), but parentheses `()` can override this to control evaluation order."
      ],
      "exampleCode": {
        "language": "python",
        "code": "a = 10\nb = 3\n\n# Arithmetic\nprint(a + b)   # 13\nprint(a // b)  # 3 (floor division)\nprint(a % b)   # 1 (remainder)\nprint(a ** 2)  # 100 (power)\n\n# Comparison\nprint(a > b)   # True\nprint(a == b)  # False\n\n# Logical\nprint(a > 5 and b < 5)  # True\nprint(not (a == b))     # True"
      },
      "visualiser": {
        "title": "Operator Evaluation Visualiser",
        "description": "Shows how expressions are evaluated step-by-step based on operator precedence and grouping."
      },
      "exercises": [
        {
          "prompt": "What is the result of `7 + 3 * 2`?",
          "hint": "Multiplication happens before addition."
        },
        {
          "prompt": "Write an expression that checks if a number `x` is between 10 and 20 (inclusive).",
          "hint": "Use comparison operators and `and`."
        },
        {
          "prompt": "What does `10 % 4` return and why?",
          "hint": "It gives the remainder after division."
        },
        {
          "prompt": "Rewrite `not (x > 5 and x < 10)` using `or`.",
          "hint": "Apply De Morgan’s Law."
        }
      ],
      "commonMistakes": [
        "Using `=` instead of `==` in comparisons.",
        "Forgetting operator precedence, leading to unexpected results.",
        "Misunderstanding `/` vs `//` — one returns a float, the other an integer division.",
        "Confusing `and`/`or` logic, especially when combining multiple conditions."
      ]
    },
    {
      "id": "python-basics-syntax-indentation",
      "title": "Syntax & Indentation",
      "slug": "python-syntax-indentation",
      "summary": "Syntax defines the structure of Python code, and indentation controls code blocks and execution flow.",
      "explanation": [
        "**Syntax** is the set of rules that define how Python code must be written, including structure, keywords, and punctuation like `:`.",
        "Think of syntax as **grammar for code** — if you break the rules, Python raises a `SyntaxError` and refuses to run.",
        "**Indentation** (spacing at the start of a line) defines **code blocks** in Python, e.g. inside `if`, `for`, or `def` statements.",
        "Python typically uses **4 spaces per indent**, and inconsistent indentation (mixing tabs/spaces) will cause errors or unexpected behaviour."
      ],
      "exampleCode": {
        "language": "python",
        "code": "x = 10\n\nif x > 5:\n    print(\"Greater than 5\")\n    print(\"Still inside block\")\n\nprint(\"Outside block\")"
      },
      "visualiser": {
        "title": "Indentation Block Visualiser",
        "description": "Shows how indentation groups lines into blocks and controls which code runs together."
      },
      "exercises": [
        {
          "prompt": "Fix the error:\nif x > 5:\nprint(\"Hello\")",
          "hint": "The print statement must be indented."
        },
        {
          "prompt": "What will this output?\nx = 3\nif x > 5:\n    print(\"A\")\nprint(\"B\")",
          "hint": "Check which lines are inside the block."
        },
        {
          "prompt": "Write an `if` statement that prints \"Even\" if a number is divisible by 2.",
          "hint": "Use `%` and proper indentation."
        }
      ],
      "commonMistakes": [
        "Forgetting the `:` after statements like `if`, `for`, or `def`.",
        "Incorrect or missing indentation, causing `IndentationError`.",
        "Mixing tabs and spaces, leading to inconsistent blocks.",
        "Assuming indentation is optional — in Python it is **required**, not just style."
      ]
    },
    {
      "id": "python-basics-input-output",
      "title": "Input / Output",
      "slug": "python-input-output",
      "summary": "Input receives data from the user, and output displays data to the user.",
      "explanation": [
        "**Input** allows a program to receive data from the user using the `input()` function, which always returns a **string (`str`)**.",
        "Think of input/output as a **conversation** — `input()` listens, and `print()` speaks.",
        "**Output** is handled using `print()`, which displays values to the console and can combine multiple values using commas or formatting.",
        "Because `input()` returns a string, you often need **type casting**, e.g. `int(input())`, to work with numbers correctly."
      ],
      "exampleCode": {
        "language": "python",
        "code": "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\n\nprint(\"Hello\", name)\nprint(\"You are\", age, \"years old\")"
      },
      "visualiser": {
        "title": "Input/Output Flow Visualiser",
        "description": "Shows how user input enters the program and how output is displayed step-by-step."
      },
      "exercises": [
        {
          "prompt": "Write code that asks the user for their favourite colour and prints it.",
          "hint": "Use `input()` and `print()`."
        },
        {
          "prompt": "Fix this code: `age = input(\"Age: \"); print(age + 5)`.",
          "hint": "Convert the input to an integer before adding."
        },
        {
          "prompt": "Write a program that takes two numbers as input and prints their sum.",
          "hint": "Cast both inputs using `int()`."
        }
      ],
      "commonMistakes": [
        "Forgetting that `input()` returns a string, causing errors in calculations.",
        "Not converting input before arithmetic, e.g. `\"5\" + 5`.",
        "Misusing `print()` formatting, leading to unclear output.",
        "Assuming input is always valid — invalid input can cause runtime errors."
      ]
    },
    {
      "id": "python-basics-expressions-vs-statements",
      "title": "Expressions vs Statements",
      "slug": "python-expressions-vs-statements",
      "summary": "An expression produces a value, while a statement performs an action.",
      "explanation": [
        "An **expression** is any piece of code that **evaluates to a value**, such as `5 + 3` or `x * 2`.",
        "Think of an expression as something that **returns a result** — it can be used inside other code because it produces a value.",
        "A **statement** is a complete instruction that performs an action, such as `x = 5`, `if x > 3:`, or `print(x)`.",
        "Expressions can exist inside statements (e.g. `x = 5 + 3`), but statements themselves do **not produce values**."
      ],
      "exampleCode": {
        "language": "python",
        "code": "# Expressions\nresult = 5 + 3   # 5 + 3 is an expression\n\n# Statements\nx = 10           # assignment statement\nprint(x)         # print statement\n\n# Expression inside a statement\nif x > 5:        # x > 5 is an expression\n    print(\"High\")"
      },
      "visualiser": {
        "title": "Expression vs Statement Visualiser",
        "description": "Shows which parts of code produce values and which parts control program flow."
      },
      "exercises": [
        {
          "prompt": "Identify whether `7 * 4` is an expression or a statement.",
          "hint": "Does it produce a value?"
        },
        {
          "prompt": "Is `x = 5` an expression or a statement? Why?",
          "hint": "Does it return a value or perform an action?"
        },
        {
          "prompt": "Find the expression in: `if a + b > 10:`.",
          "hint": "Look for what gets evaluated."
        },
        {
          "prompt": "Write a statement that uses an expression to assign a value to a variable.",
          "hint": "Combine `=` with a calculation."
        }
      ],
      "commonMistakes": [
        "Assuming all code produces values — statements often just perform actions.",
        "Confusing assignment (`=`) as an expression — in Python it is a **statement**.",
        "Not recognising expressions inside conditions, e.g. `x > 5` in an `if`.",
        "Thinking statements can be nested like expressions — they cannot be used interchangeably."
      ]
    },
    {
      "id": "python-basics-mutability",
      "title": "Mutability vs Immutability",
      "slug": "python-mutability",
      "summary": "Mutability describes whether an object can be changed after creation.",
      "explanation": [
        "A **mutable** object can be changed after it is created, while an **immutable** object cannot.",
        "Think of mutable objects as **editable containers** (like lists), and immutable objects as **fixed values** (like strings or numbers).",
        "In Python, types like `list`, `dict`, and `set` are **mutable**, while `int`, `float`, `str`, and `tuple` are **immutable**.",
        "Modifying a mutable object changes the same object in memory, but modifying an immutable object creates a **new object** instead."
      ],
      "exampleCode": {
        "language": "python",
        "code": "# Mutable example\nnums = [1, 2, 3]\nnums.append(4)\nprint(nums)  # [1, 2, 3, 4]\n\n# Immutable example\nx = 5\nx = x + 1\nprint(x)     # 6 (new object created)"
      },
      "visualiser": {
        "title": "Mutability Visualiser",
        "description": "Shows how mutable objects change in place while immutable objects create new references."
      },
      "exercises": [
        {
          "prompt": "Is a string mutable or immutable?",
          "hint": "Can you change individual characters?"
        },
        {
          "prompt": "What happens when you do `a = [1,2]; b = a; a.append(3)`?",
          "hint": "Both variables reference the same list."
        },
        {
          "prompt": "Why does `x = x + 1` not modify the original integer?",
          "hint": "Integers are immutable."
        }
      ],
      "commonMistakes": [
        "Assuming all variables behave the same — mutability depends on the **object type**.",
        "Expecting a copy when assigning mutable objects — it creates a **reference**, not a copy.",
        "Trying to modify immutable types directly, e.g. `\"abc\"[0] = \"z\"`.",
        "Not realising side effects when passing mutable objects into functions."
      ]
    },
    {
      "id": "python-basics-naming-conventions",
      "title": "Naming Conventions",
      "slug": "python-naming-conventions",
      "summary": "Naming conventions define readable and consistent ways to name variables and other identifiers.",
      "explanation": [
        "**Naming conventions** are standard rules for choosing clear and consistent names for variables, functions, and other identifiers.",
        "Think of naming as **communication** — good names make code easier to read and understand without extra comments.",
        "Python uses **snake_case** for variables and functions (e.g. `user_age`), and **UPPER_CASE** for constants (e.g. `MAX_SIZE`).",
        "Names must follow syntax rules: start with a letter or `_`, contain only letters/numbers/underscores, and cannot use **reserved keywords** like `if` or `for`."
      ],
      "exampleCode": {
        "language": "python",
        "code": "# Good naming\nuser_age = 18\nmax_score = 100\n\n# Bad naming\na = 18        # unclear\nUserAge = 18  # not standard for variables\n\n# Invalid\n# 2age = 18   # cannot start with number\n# if = 10     # keyword"
      },
      "visualiser": {
        "title": "Naming Quality Visualiser",
        "description": "Compares clear vs unclear variable names and their impact on readability."
      },
      "exercises": [
        {
          "prompt": "Rename `x = 5` to something more descriptive.",
          "hint": "Think about what the value represents."
        },
        {
          "prompt": "Which is better: `totalScore` or `total_score` in Python?",
          "hint": "Follow Python conventions."
        },
        {
          "prompt": "Why is `for = 10` invalid?",
          "hint": "Check reserved keywords."
        }
      ],
      "commonMistakes": [
        "Using vague names like `x`, `data`, or `temp` without context.",
        "Mixing naming styles, e.g. `camelCase` and `snake_case` together.",
        "Using reserved keywords as variable names.",
        "Making names too long or overly complex, reducing readability."
      ]
    },
    {
      "id": "python-basics-debugging",
      "title": "Basic Debugging",
      "slug": "python-debugging",
      "summary": "Debugging is the process of finding and fixing errors in code.",
      "explanation": [
        "**Debugging** is the process of identifying and fixing errors (bugs) in a program.",
        "Think of debugging as **investigation** — you observe behaviour, form hypotheses, and test where things go wrong.",
        "Common techniques include using `print()` to trace values, reading **error messages**, and isolating sections of code.",
        "Errors fall into types: **syntax errors** (invalid code), **runtime errors** (crashes during execution), and **logical errors** (wrong output)."
      ],
      "exampleCode": {
        "language": "python",
        "code": "# Debugging with print\nx = \"5\"\ny = 2\n\nprint(type(x))\nprint(type(y))\n\n# Fix\ntotal = int(x) + y\nprint(total)"
      },
      "visualiser": {
        "title": "Debugging Flow Visualiser",
        "description": "Shows how errors occur and how tracing values helps identify the issue."
      },
      "exercises": [
        {
          "prompt": "Fix the error: `print(5 + \"3\")`.",
          "hint": "Match the types before adding."
        },
        {
          "prompt": "What type of error is missing a `:` after an `if` statement?",
          "hint": "It happens before execution."
        },
        {
          "prompt": "Why does this give the wrong result? `total = 10; total = total * 0.1` (expected 10% increase).",
          "hint": "Check the calculation logic."
        }
      ],
      "commonMistakes": [
        "Ignoring error messages instead of using them to locate the problem.",
        "Trying random fixes instead of systematically testing.",
        "Not checking variable types when debugging calculations.",
        "Assuming the code is correct without verifying outputs step-by-step."
      ]
    },
    stubConcept("control-flow", "Control Flow", "The order in which Python decides and repeats program steps."),
    stubConcept("functions", "Functions", "Reusable named blocks of code with inputs, behaviour, and outputs."),
  ],
};
