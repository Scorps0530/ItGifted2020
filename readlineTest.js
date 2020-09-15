const readline = require('readline');
// const = var
// const는 고정, var은 유동적

const rl = readline.createInterface({
    input: process.stdin, // std : 콘솔창
    output: process.stdout
})

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    //rl.close();
});

rl.on('line', function(input){
    console.log(`Received: ${input}`);
});
// line을 이동할 때 {input}값을 출력
// 이 때 'Received: ${input}' 이 아니라 `Received: ${input}` 임