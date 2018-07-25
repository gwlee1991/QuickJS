export const curriculum = 
  {
    title: "Chapter2",
    subtitle: "Operators",
    topics: [
      {
        title: "Arithmetic Operators",
        videoId: "oFzGOw2dYpM",
        subtitle: "How to use Arithmetic Operators in JS",
        headers: [
          "1. List of Comparison Operators and examples.",
          "2. List of JavaScript Arithmetic Operators and examples.",
          "3. Operator Precedence.",
          "4. List of Assignment Operators and examples.",
        ],
        contents: [
          [
            {type: "string", string: "Comparison Operators let us compare values."},
            {type: "code", string: "List of Comparison Operators:"},
            {type: "code", string: "< :    Less than  "},
            {type: "code", string: "<= :   Less than or equal to  "},
            {type: 'code', string: "> :    Greater than   "},
            {type: 'code', string: ">= :   Greater than or equal to  "},
            {type: 'code', string: "=== :  Strict equal to "},
            {type: 'code', string: "!== :  Strict not equal to"},

            {type: "string", string: "In JavaScript it is possible to compare values of different types using the '==' operator,"},
            {type: "string", string: "but using the strict '===' is all we need to compare values in this course."},

            {type: "string", string: "If we wanted to do multiple comparisons at once, we can take advantage of the '&&' and '||' operators."},
            {type: 'code', string: "&&    Logical And "},
            {type: 'code', string: "||    Logical Or "},
            {type: "string", string: "These operators compare true and false statements and return true or false depending on the outcome."},
            {type: "code", string: "let x = 5;"},
            {type: "code", string: "x < 6 && x > 0 //will return true because x is less than 6 AND x is greater than 0."},
            {type: "code", string: "x < 6 || x > 100 //will return true because x is less than 6. With OR operations only 1 side has to be true."},
            {type: "string", string: "This can get kind of tricky, below is a table to help clarify the outcomes of && and || statements."},
            {type: "string", string: "Logical AND '&&'"},
            {type: "code", string: "false && false === false"},
            {type: "code", string: "false && true === false"},
            {type: "code", string: "true && true === true"},
            {type: "code", string: "true && false === false"},
            {type: "string", string: "Logical OR '||'"},
            {type: "code", string: "false || false === false"},
            {type: "code", string: "false || true === true"},
            {type: "code", string: "true || true === true"},
            {type: "code", string: "true || false === true"},
          ],
          [
            {type: "string", string: "Here is a list of list of common operators that you would normally see on a calculator, "},
            {type: 'string', string: "as well as examples on how to use them in JavaScript."},
            {type: 'string', string: ""},
            {type: 'string', string: "Operator : Description"},
            {type: 'string', string: "+        : Addition"},
            {type: 'string', string: "-        : Subtraction"},
            {type: 'string', string: "*        : Multiplication"},
            {type: 'string', string: "/        : Division"},
            {type: 'string', string: "%        : Modulo"},
            {type: 'string', string: "**       : Exponent"},
            {type: 'string', string: "Addition: +"},
            {type: 'code', string: "let x = 5 + 5"},
            {type: 'code', string: "x === 10"},

            {type: 'string', string: "Subtraction: -"},
            {type: 'code', string: "let x = 5 - 2"},
            {type: 'code', string: "x === 3"},

            {type: 'string', string: "Multiplication: *"},
            {type: 'code', string: "let x = 10 * 10"},
            {type: 'code', string: "x === 100"},

            {type: 'string', string: "Division: / "},
            {type: 'code', string: "let x = 100 / 10"},
            {type: 'code', string: "x === 10"},

            {type: 'string', string: "Modulo gives us the remainder from division."},
            {type: 'string', string: "Modulo: %"},
            {type: 'code', string: "let x = 21 % 5"},
            {type: 'code', string: "x === 1"},

            {type: 'string', string: "Exponent: **"},
            {type: 'code', string: "let x = 10 ** 10"},
            {type: 'code', string: "x === 100"},
          ],
          [
            {type: 'string', string: "Operator precedence works the same way it does in traditional mathmatics that many learn in school."},

            {type: 'string', string: "Operator Precedence:"},
            {type: 'string', string: "1. Parentheses ()"},
            {type: 'string', string: "2. Multiplication, Division, and Modulo. * / % "},
            {type: 'string', string: "3. Addition and Subtraction. + - "},

            {type: 'code', string: "(1 + 5) * 10 == "},
            {type: 'code', string: "2 * 10 * (2 + 3) == 100"},
          ],
          [
            {type: 'string', string: "The math operators listed in our previous section can be combined with the assignment variable to create shortcuts."},
            {type: 'string', string: "While we could use:"},
            {type: 'code', string: "let x = x + 1"},
            {type: 'string', string: "We can also shorten our code and save room by typing:"},
            {type: 'code', string: "let x += 1"},
            {type: 'code', string: "This can be done with the following assignment operators:"},

            {type: 'code', string: "List of Arithmetic Assignments:"},
            {type: 'code', string: "+=   : Addition         Ex: x += y       Same as: x = x + y"},
            {type: 'code', string: "-=   : Subtraction      Ex: x -= y       Same as: x = x - y"},
            {type: 'code', string: "*=   : Multiplication   Ex: x *= y       Same as: x = x * y"},
            {type: 'code', string: "/=   : Division         Ex: x /= y       Same as: x = x / y"},
            {type: 'code', string: "%=   : Modulo           Ex: x %= y       Same as: x = x % y"},
            {type: 'code', string: "++   : Add 1            Ex: x++          Same as: x += 1"},
            {type: 'code', string: "--   : Subtract 1       Ex: x--          Same as: x -= 1"},
          ]
        ]
      },
      {
      title: "Strings",
      videoId: "oFzGOw2dYpM",
      subtitle: "strings",
      headers: [
        "dummy headers"
      ],
      contents: [
        [
          {type: 'string', string: "dummy contents"}
        ]
      ]
    }
    ]
  };
