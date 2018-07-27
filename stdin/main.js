async function command(stdin) {
  let line = await stdin.readline();
  console.log("I read a line!", line);
  
  line = await stdin.readline();
  console.log("I read another line!", line);
}
