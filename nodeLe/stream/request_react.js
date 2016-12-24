var http = require('http');
var fs = require('fs');
var request = require('require');

http
    .createServer(function (req, res) {
        //第一种
       /* fs.readFile('../buffer/react.jpg', function (err, data) {
            if(err){
                res.end('file not exist!');

            }else{
                res.writeHeader(200, {'Context-Type':'text/html'});
                res.end(data);
            }
        })*/
        //请求本地的方法
       fs.createReadStream('../buffer/react.jpg').pipe(res);

       //请求线上的方法
        request(url).pipe(res);
    })
    .listen(8090);