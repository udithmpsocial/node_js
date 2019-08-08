console.log("Node is working");
/*server.js*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var fs = require('fs');

const server = http.createServer(function(req, res) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello Worldd\n');
    var fs = require('fs');
    fs.readFile('ht.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

    var fs = require('fs');

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    var fs = require('fs');

    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });

});

server.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});


