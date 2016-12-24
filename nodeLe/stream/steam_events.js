
var fs = require('fs');

var readSteam = fs.createReadStream('steam_copy.js');

var n = 0;
readSteam
    .on('data',function (chunk) {
        n++;
        console.log('data emits');
        console.log(Buffer.isBuffer(chunk));
      //  console.log(chunk.toString('utf-8'))

        readSteam.pause();
        console.log('data pause');
        setTimeout(function(){
            console.log('data pause end');
            readSteam.resume()
        }, 3000);
    })
    .on('readable', function () {
        console.log('data readable')
    })
    .on('end', function () {
        console.log(n);
        console.log('data ends')
    })
    .on('close', function () {
        console.log('data close')
    })
    .on('error', function (e) {
        console.log('data read erro' + e)
    });