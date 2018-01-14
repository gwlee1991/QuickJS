const curriculum = [
  {
    title: "Chapter0",
    topics: [
      {
        title: "Setting Up the Environment",
        videoID: "",
        subtitle: "3 ways to write code in Javscript",
        headers: [
          "1. The most simple way to run Javascript is to use an online compiler called repl.it.",
          "2. The second way is to download node which is basically a wrapper for Javascript outside of the browser",
          "3. The last way is to create Javascript files and then running the files. For the purpose of this course, we will run the files through node. Javascript files have an extension of .js (ex. document.js)",
          "4. You can download free text editors for writing Javascript in file with a .js extension.(think of it as ms word for programming languages)."
        ],
        contents: [
          [
            "-Navigate to https://repl.it/",
            "-On the part where it says `choose your language`, pick Javascript",
            "-Start coding in Javascript"
          ],
          [
            "Navigate to https://nodejs.org/en/",
            "Download nodejs. Use the recommended version",
            "Once downloaded and installed, open terminal. (command + space) and then search for terminal",
            "~$node",
            "start coding"
          ],
          [
            "create file with js extension",
            "save and run by typing 'node filename.js'"
          ],
          [
            "VS code(Visual Studio Code) => 'https://code.visualstudio.com/'",
            "Atom => 'https://atom.io/"
          ]
        ]
      }
    ]
  }
];

export default curriculum;
