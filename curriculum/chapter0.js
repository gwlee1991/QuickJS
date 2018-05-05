export const curriculum = {
    title: "Chapter 0",
    subtitle: "Setting Up the Environment",
    topics: [
      {
        // QuickJS introduction video and introduce instructors
        title: "Intro to QuickJS",
        videoID: "",
        subtitle: "",
        headers: [
          ""
        ],
        contents: [
          [""]
        ]
      },
      {
        title: "Repl.it",
        videoId: "",
        subtitle: "Using an online compiler to write Javascript code",
        header:[
          "What is Repl.it?",
          "How do I use repli.it?"
        ],
        contents: [
          [
            "Repl.it is a simple online compiler, IDE, interpreter that allows you to code in various languages.",
            "It has a console, letting you see the result of your code immediately."
          ],
          [
            "Navigate to 'https://repl.it'.",
            "Choose your primary language that you would like to code in (for the purpose of this course, I would choose Javascript).",
            "Start coding and run code to see results inside the given console."
          ]
        ]
      },
      {
        title: "Node.js",
        videoId: "",
        subtitle: "Setting up a Javascript environment on your computer to run Javascript code",
        header: [
          "What is Node.js?",
          "How do I install Node.js?"
        ],
        contents: [
          [
            "Node.js is a Javascript runtime that allows code execution outside of the browser."
          ],
          [
            "1. Navigate to https://nodejs.org/en/",
            "2. Install the recommended version for your operating system",
            "3. Once downloaded and installed, open up your terminal",
            "4. Your terminal should look like ~$. This means that you are in the root directory.",
            "5. Type in node and press enter. If your input field shows >, that means you are on the node environment",
            "6. Start writing Javascript code."
          ]
        ]
      },
      {
        title: "Writing js files",
        videoId: "",
        subtitle: "Write Javascript files using a code text editor",
        header: [
          "How do I write Javascript files?",
          "What is a code text editor?",
          "How do I run a JS file that I have written with my code editor?"
        ],
        contents: [
          [
            "Javascript files have a js extension. (ex. sample.js)",
            "You could write a Javascript file using a simple notepad"
          ],
          [
            "Code text editor is a text editor just like ms word except it's usually used for writing Code.",
            "There are a variety of code text editors that you could use such as Visual Studio Code, Atom, Sublime etc. (I currently use VS code)",
            "Different code editors have different features, but atom or vs code is a good starter."
          ],
          [
            "On our previous video, we have discussed on how to install node onto your computer. We will have to use node to run the Javascript file",
            "To run our JS file, you first have to navigate to the directory where your file is saved in (ex. let's say it's in Desktop)",
            "Open up terminal. You should be in your root directory right now",
            "To go to Desktop type in 'cd Desktop' and press enter",
            "Now that we are at the directory where the file is saved, type node sample.js and press enter to run the file"
          ]
        ]
      }
    ]
  };