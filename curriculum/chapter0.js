export const curriculum = {
    title: "Chapter 0",
    subtitle: "Setting Up the Environment",
    topics: [
      {
        // QuickJS introduction video and introduce instructors
        title: "Intro to QuickJS",
        videoId: "oFzGOw2dYpM",
        subtitle: "Introduction",
        headers: [
          ""
        ],
        contents: [
          [{type: "string", string: ""}]
        ]
      },
      {
        title: "Repl.it",
        videoId: "oFzGOw2dYpM",
        subtitle: "Using an online compiler to write Javascript code",
        headers:[
          "What is Repl.it?",
          "How do I use repli.it?"
        ],
        contents: [
          [
            {type: "string", string: "Repl.it is a simple online compiler, IDE, interpreter that allows you to code in various languages."},
            {type: "string", string: "It has a console, letting you see the result of your code immediately."}
          ],
          [
            {type: "string", string: "Navigate to 'https://repl.it'."},
            {type: "string", string: "Choose your primary language that you would like to code in (for the purpose of this course, I would choose Javascript)."},
            {type: "string", string: "Start coding and run code to see results inside the given console."}
          ]
        ]
      },
      {
        title: "Node.js",
        videoId: "oFzGOw2dYpM",
        subtitle: "Setting up a Javascript environment on your computer to run Javascript code",
        headers: [
          "What is Node.js?",
          "How do I install Node.js?"
        ],
        contents: [
          [
            {type: "string", string: "Node.js is a Javascript runtime that allows code execution outside of the browser."}
          ],
          [
            {type: "string", string: "1. Navigate to https://nodejs.org/en/"},
            {type: "string", string: "2. Install the recommended version for your operating system"},
            {type: "string", string: "3. Once downloaded and installed, open up your terminal"},
            {type: "string", string: "4. Your terminal should look like ~$. This means that you are in the root directory."},
            {type: "string", string: "5. Type in node and press enter. If your input field shows >, that means you are on the node environment"},
            {type: "string", string: "6. Start writing Javascript code."}
          ]
        ]
      },
      {
        title: "Writing js files",
        videoId: "oFzGOw2dYpM",
        subtitle: "Write Javascript files using a code text editor",
        headers: [
          "How do I write Javascript files?",
          "What is a code text editor?",
          "How do I run a JS file that I have written with my code editor?"
        ],
        contents: [
          [
            {type: "string", string: "Javascript files have a js extension. (ex. sample.js)"},
            {type: "string", string: "You could write a Javascript file using a simple notepad"}
          ],
          [
            {type: "string", string: "Code text editor is a text editor just like ms word except it's usually used for writing Code."},
            {type: "string", string: "There are a variety of code text editors that you could use such as Visual Studio Code, Atom, Sublime etc. (I currently use VS code)"},
            {type: "string", string: "Different code editors have different features, but atom or vs code is a good starter."}
          ],
          [
            {type: "string", string: "On our previous video, we have discussed on how to install node onto your computer. We will have to use node to run the Javascript file"},
            {type: "string", string: "To run our JS file, you first have to navigate to the directory where your file is saved in (ex. let's say it's in Desktop)"},
            {type: "string", string: "Open up terminal. You should be in your root directory right now"},
            {type: "string", string: "To go to Desktop type in 'cd Desktop' and press enter"},
            {type: "string", string: "Now that we are at the directory where the file is saved, type node sample.js and press enter to run the file"}
          ]
        ]
      }
    ]
  };