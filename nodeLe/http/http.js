var http = require('http');


http
    .createServer(function (req, res) {
        /**
         * 请求返回的头信息
         *
         */
        res.writeHead(200,{'Content-Type': 'text/plain'})
        //相应的主体
        res.write('Hello nodejs');
        //结束响应
        res.end();

    })
    .listen(2015);

//mac测试 ab -n1000 -c10 http://localhost:2015/