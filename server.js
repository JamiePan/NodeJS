const logModule = require('./modules/module.js');
const fs = require('fs'); // file System
const http = require('http');

http // read user's request, then, render the output
  .createServer((request, response) => {
    if (request.url.indexOf('.css') > 0) {
      const cssContent = fs.readFileSync('./style.css');
      response.write(cssContent);
      response.end();
    } else {
      const content = fs.readFileSync('./index.html'); // read HTML
      response.write(content);
      response.end();
    }
  })
  .listen(5666);

logModule.logMessage('Server is running on 5666...');

// request.url: a string containing the currently requested URL path
// indexOf: String.prototype.indexOf, which returns th index of a substring within a string (-1 means the substring wasn't found)
