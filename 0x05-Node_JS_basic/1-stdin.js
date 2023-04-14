const readline = require("readline");


const user = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

user.on('line', (name) => {
	console.log(`Your name is: ${name}`);
});

user.on('close', () => {
	console.log('\nThis important software is now closing');
});

