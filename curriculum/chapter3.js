const curriculum3 = [
  {
    title: "Chapter3",
    topics: [
      {
        title: "JavaScript Arithmetic Operators",
        videoID: "",
        subtitle: "How to use Arithmetic Operators in JS",
        headers: [
          "1. List of Comparison Operators and examples.",
          "2. List of JavaScript Arithmetic Operators and examples.",
          "3. Operator Precedence.",
          "4. List of Assignment Operators and examples.",
        ],
        contents: [
          [
            "Comparison Operators let us compare values.",
            "List of Comparison Operators:",
            "<     Less than                        Ex: x < y",
            "<=    Less than or equal to            Ex: x <= y",
            ">     Greater than                     Ex: x > y",
            ">=    Greater than or equal to         Ex: x >= y",
            "===   Strict equal to                  Ex: x === y",
            "!==   Strict not equal to    Ex: x !== y",
            "",

            "In JavaScript it is possible to compare values of different types using the '==' operator,",
            "but using the strict '===' is all we need to compare values in this course.",
            "",

            "If we wanted to do multiple comparisons at once, we can take advantage of the '&&' and '||' operators.",
            "&&    Logical And           Ex: x < y && y === 10",
            "||    Logical Or            Ex: x < y || y >= 10",
            "These operators compare true and false statements and return true or false depending on the outcome.",
            "Example: let x = 5",
            "x < 6 && x > 0 will return true because x is less than 6 AND x is greater than 0.",
            "x < 6 || x > 100 will return true because x is less than 6. With OR operations only 1 side has to be true.",
            "This can get kind of tricky, below is a table to help clarify the outcomes of && and || statements.",
            "",
            "Logical AND '&&'",
            "false && false === false",
            "false && true === false",
            "true && true === true",
            "true && false === false",
            "",
            "Logical OR '||'",
            "false || false === false",
            "false || true === true",
            "true || true === true",
            "true || false === true",
          ],
          [
            "Here is a list of list of common operators that you would normally see on a calculator, ",
            "as well as examples on how to use them in JavaScript.",
            "",
            "Operator : Description",
            "+        : Addition",
            "-        : Subtraction",
            "*        : Multiplication",
            "/        : Division",
            "%        : Modulo",
            "**       : Exponent",
            "Examples: ",
            "Addition: +",
            "let x = 5 + 5",
            "x === 10",
            "",

            "Subtraction: -",
            "let x = 5 - 2",
            "x === 3",
            "",

            "Multiplication: *",
            "let x = 10 * 10",
            "x === 100",
            "",

            "Division: / ",
            "let x = 100 / 10",
            "x === 10",
            "",

            "Modulo gives us the remainder from division.",
            "Modulo: %",
            "let x = 21 % 5",
            "x === 1",
            "",

            "Exponent: **",
            "let x = 10 ** 10",
            "x === 100",
            ""
          ],
          [
            "Operator precedence works the same way it does in traditional mathmatics that many learn in school.",

            "Operator Precedence:",
            "1. Parentheses ()",
            "2. Multiplication, Division, and Modulo. * / % ",
            "3. Addition and Subtraction. + - ",
            "",

            "Some examples would be: ",
            "(1 + 5) * 10 == ",
            "2 * 10 * (2 + 3) == 100",
            ""
          ],
          [
            "The math operators listed in our previous section can be combined with the assignment variable to create shortcuts.",
            "While we could use:",
            "let x = x + 1",
            "We can also shorten our code and save room by typing:",
            "let x += 1",
            "This can be done with the following assignment operators:",
            "",

            "List of Arithmetic Assignments:",
            "+=   : Addition         Ex: x += y       Same as: x = x + y",
            "-=   : Subtraction      Ex: x -= y       Same as: x = x - y",
            "*=   : Multiplication   Ex: x *= y       Same as: x = x * y",
            "/=   : Division         Ex: x /= y       Same as: x = x / y",
            "%=   : Modulo           Ex: x %= y       Same as: x = x % y",
            "++   : Add 1            Ex: x++          Same as: x += 1",
            "--   : Subtract 1       Ex: x--          Same as: x -= 1",
            "",
          ]
        ]
      }
    ]
  }
];

export default curriculum3;
