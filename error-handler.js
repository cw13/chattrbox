var fs = require('fs')

var handleError = function (err, res) {
  res.writeHead(404);

  var errorFilePath = 'app/error404.html'

  fs.readFile(errorFilePath, function (err, data) {
    res.end(data);
  });
  // res.end();
}

module.exports = handleError;
