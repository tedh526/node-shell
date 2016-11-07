var fs = require('fs');

module.exports = {
  pwd: function () {
    process.stdout.write(process.cwd());
  },
  date: function () {
    process.stdout.write(Date());
  },
  ls: function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  },
  echo: function(input) {
    process.stdout.write(input)
  },
  cat: function(err, data) {
      if (err) throw err;
      console.log(data)
  },
  head: function(err, data) {
      if (err) throw err;
      var newData = data.split('\n').slice(0,5);
      console.log(newData.join('\n'));
  },
  tail: function(err, data) {
      if (err) throw err;
      var newData = data.split('\n').slice(-5);
      console.log(newData.join('\n'));
  }
}
