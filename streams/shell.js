"use strict";

var stdin = new Stream();
var stdout = new Stream();

var inContainer = document.getElementById("in");
inContainer.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      stdin.push(inContainer.value);
      inContainer.value = "";
    }
  });

var outContainer = document.getElementById("out");
function printToConsole(line) {
  let newElement = document.createElement("p");
  newElement.innerText = line;
  outContainer.appendChild(newElement);
}
stdout.listener = printToConsole;

// Runs command n times
// piping input through each of them.
async function run(n) {
  let inStream = stdin;
  // let pipes = [];
  let commands = [];
  
  // for all commands except the last one...
  for (let i = 0; i < n-1; i++) {
    // create a pipe for the next input
    let pipe = new Stream();
    // push onto the list of promises
    commands.push(command(inStream, pipe, i));
    inStream = pipe;
  }
  
  // push the last command
  commands.push(command(inStream, stdout, n-1));
  
  await Promise.all(commands);
}