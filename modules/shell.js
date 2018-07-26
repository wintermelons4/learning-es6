// shell

var modules = ['x', 'y', 'z'];
var commands = {};

async function importModules(modules) {
  for (let i = 0; i < modules.length; i++) {
    let mod = await import('./' + modules[i] + '.js');
    commands[modules[i]] = mod.run;
  }
}

importModules(modules)
  .then(() => console.log("done", commands))
  .then(() => commands['x']())
  .then(() => commands['y']())
  .then(() => commands['z']());


export { commands };
