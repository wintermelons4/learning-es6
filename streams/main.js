// Read 10 times and pass each line to the next program
async function command(stdin, stdout, index) {
  for (let i = 0; i < 10; i++) {
    let line = await stdin.fetch();
    stdout.push(line + "+" + index);
  }
}
