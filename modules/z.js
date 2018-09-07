// module z has other function references and closures

var life = 42;

function whatIfTheyFindMe() {
  console.log("I am a shy boi.");
}

function z() {
  console.log("This is z");
  console.log("Life is", life);
  whatIfTheyFindMe();

  // side effects
  life = life * 2;
}

export { z };
