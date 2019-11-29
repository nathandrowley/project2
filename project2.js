var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
   // consol.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-Type': 'text/html'});
   // res.write(req.url);
   // res.end();
   var myReadStream = fs.createReadStream(_dirname + '/Project2.html', 'utf8');
   myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
