var commands = require("./commands.js");
var fs = require('fs');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
  	commands.pwd();
  } else if (cmd === 'date') {
  	commands.date();
  } else if (cmd === 'ls') {
    fs.readdir('.',commands.ls)
  }

  process.stdout.write('\nprompt > ');

});
