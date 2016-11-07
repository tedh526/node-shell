var commands = require("./commands.js");
var fs = require('fs');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var input = data.toString().trim().split(' '); // remove the newline
  var cmd = input.shift();
  input = input.join(' ')
  // console.log(input, cmd)
  if (cmd === 'pwd') {
  	commands.pwd();
  } else if (cmd === 'date') {
  	commands.date();
  } else if (cmd === 'ls') {
    fs.readdir('.',commands.ls)
  } else if (cmd === 'echo') {
  	commands.echo(input);
  } else if (cmd === 'cat') {
  	fs.readFile(input, 'utf8', commands.cat);
  } else if (cmd === 'head') {
  	fs.readFile(input, 'utf8', commands.head);
  } else if (cmd === 'tail') {
  	fs.readFile(input, 'utf8', commands.tail);
  }

  process.stdout.write('\nprompt > ');

});
