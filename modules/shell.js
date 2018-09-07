// shell

var modulePaths = [
  './x.js',
  './y.js',
  './z.js'
];
var commands = {};

async function importModules(modulePaths) {
  for (let path of modulePaths) {
    let module = await import(path);
    
    for (let command in module) {
      console.log("Importing", command);
      
      if (commands.hasOwnProperty(command)) {
        // found collision, abort!
        throw "Oh nose!!";
      }
      
      commands[command] = module[command];
    }
  }
}

importModules(modulePaths)
  .then(() => console.log("done", commands))
  .then(() => commands.x())
  .then(() => commands.y1())
  .then(async () => await commands.y2()) // This is not necessary
  .then(() => commands.y3())
  .then(() => commands.z())
  .then(() => commands.z());
