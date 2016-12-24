var fs = require('fs');

var readStream = fs.createReadeStream();

var writeStream = fs.crateWriteStream();

readStream.on('data', function (chunk) {
    //数据量大
    console.log('still cached');
    if(writeStream.write(chunk)){
        readStream.pause()
    }
});

readStream.on('end', function () {
   writeStream.end();
});

// drain 资源耗尽 写入文件将要结束 再执行读取文件
writeStream.on('drain', function () {
    console.log('data drains');

    readStream.resume();
});