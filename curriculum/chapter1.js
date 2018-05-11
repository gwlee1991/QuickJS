export const curriculum = {
  title: "Chapter 1",
  subtitle: "Basic Syntax",
  topics: [
    {
      title: "Statements",
      videoId: "oFzGOw2dYpM",
      subtitle: "The building blocks of a programming language.",
      headers: [
        "What is a statement?",
        "What makes a statement?",
        "What is a code block?"
      ],
      contents: [
        [
          "Statement is a line or lines of code that are executable.",
          "Just like an essay is built of sentences, Javascript programming is built of multiple statements."
        ],
        [
          "Like a sentence, which is built with words and special characters that follow a specific rule, statement is built with different components",
          "Values, operators, expressions(a combination of values, variables, and operators, which computes to a value), keywords, comments are all building blocks of a statement.",
          "Finally, like a sentence ending with a period, Statements end with a ';'.",
          "\tvar a = 5;",
          "\tlet b = \"cat\";",
          "\tconst c = 6 + 2;"
        ],
        [
          "Code blocks can be thought as paragraphs.",
          "Statements can be clustered together as a block by enclosing them inside curly brackets {}. This is done so that the statements are executed together.",
          "Below is an if statement which executes the code block when the statment inside the () evaluates to a truthy value. This may not make sense for now but I promise, we will go over this is a later chapter.",
          "if ( (5 + 3) === 8){ //note that in Javascript an comparison is done with === instead of =",
          `\tlet a = 5;`,
          `\tlet b = 4;`,
          "\tlet c = a + b;",
          "}",
          "if 5 + 3 is 8 the 3 statements inside the block are run."
        ]
      ]
    },
    {
      title: "Variables",
      videoId: "",
      subtitle: "Declaring Variables",
      headers: [
        "What are variables?",
        "How do we correctly declare a variable?",
        "Why do I keep using '//'?"
      ],
      contents: [
        [
          "Variables are a reference to memory space in the computer to store data values!!",
          "What does that even mean? Think of a highschool that has a bunch of lockers. Each locker has a number where students store their books, bag, clothes etc. Think of the locker number as a variable. The number represents the specific locker where the student's valuables are stored."
        ],
        [
          "In ES6, there are 4 ways to declare a variable. You can use \"let\", \"const\", and \"var\" in front of a variable to declare it, or you can simply declare a new variable without the given keywords to save the variable to the global object. We will go over the diffences of the variable types in a later chapter once we start to talk about functions.",
          "let a = 2; // '=' here is not the same equals used in mathematics. '=' in computer programming is an assignment operator that assigns the value 2 to the variable a",
          "const b = 'a'; // 'a' is not the same a declared above.",
          "var c = a; // a here is the same a that was declared above."
        ],
        [
          "In Javascript '//' is used to write comments. Comments are not executed when the code is run and is commently used to explain the code that is written.",
          "For comments that go over multiple lines, we wrap the comments around with '/* comment */'.",
          "Sometimes, we use comments to purposely stop code from being executed."
        ]
      ]
    },
    {
      title: "Data Types",
      videoId: "",
      subtitle: "Primitive Data Types",
      headers: [
        "Numbers",
        "Strings",
        "Booleans",
        "Undefined",
        "Null",
        "NaN",
        "Truthy and Falsy values"
      ],
      contents: [
        [
          "Javascript numbers do not distinguish integers and floats(decimals).",
          "let a = 5;",
          "let b = 3.14;",
          "However, most lower level languages like Java or C++, requires you to define the variable with a int or double.",
          "int a = 5;",
          "double b = 3.45;",
          "int c = 3.2; // throws an error"
        ],
        [
          "Strings is a series of characters enclosed either between \"\" or \'\'.",
          "let dog = 'Susan'; ",
          "let cat = \"Meow\"; ",
          "let frog = \'froggo\"; //this is wrong! " 
        ],
        [
          "Booleans only have two values; true or false",
          "let a = true;",
          "let b = false;",
          "let c = 5;",
          "let d = 5;",
          "(c === d) //returns true"
        ],
        [
          "Undefined is a data type to represent values that have yet not been initialized.",
          "let a; //here we have declared the variable a but have not assigned a value to it.",
          "a; //returns undefined",
          "a === undefined // returns true"
        ],
        [
          "Null represent a value of nothing which is different from undefined.",
          "let a;",
          "a === null // returns false since a is undefined",
          "Although we are going over null in the primitive data types, null is an object."
        ],
        [
          "NaN stands for Not a Number. It is a numeric data type value representing an undefined or unrepresentable value",
          "\"five\"/3 //returns NaN a string cannot be divided by a numeric number"
        ],
        [
          "Truthy values are values that evalute to true in a statement and Falsy values are values that evalute to false",
          "It is easier to memorize the falsy values since there are only a few cases the falsy values",
          "Falsy: NaN, null, 0, \"\"(empty string), undefined",
          "Falsy values return false inside a if statement",
          "if (null) { return true; } else { return false; } //this statement would return false"
        ]
      ]
    }
  ]
}