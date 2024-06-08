const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

 });


rl.question("enter a number: ", (num) => {
    console.log("you entered: "+num);
    rl.close();      // close the event
})

rl.on('close', () => {
    console.log("interface closed");
    process.exit(0);
})