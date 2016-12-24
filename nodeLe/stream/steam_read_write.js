var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

var readStream = new Readable();
var WritStream = new Writable();


readStream.push('I');
readStream.push('Love');
readStream.push('Imooc\n');
readStream.push(null);

WritStream._write = function (chunk, encode, cb) {
    console.log(chunk.toString());
    cb();
};

readStream.pipe(WritStream);

