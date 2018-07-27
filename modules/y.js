// module y exports multiple commands, some async

function y1() {
  console.log("This is y1");
}

async function y2() {
  console.log("This is y2");
}

function y3() {
  console.log("This is y3");
}

export { y1, y2, y3 };
