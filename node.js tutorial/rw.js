// read file synchronously


// const fs = require('fs')

// let readsync = fs.readFileSync('input.txt','utf-8');
// console.log(readsync);




// write file

// let content = `Data read from input.txt: ${readsync} \nDate created ${new Date()}` 
//  fs.writeFileSync('output.txt',content);


// Asynchronous file reading

let fs = require('fs');

fs.readFile('input.txt','utf-8', (err,data) => {
    console.log(data);

});
console.log('reading file...');