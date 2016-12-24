
var fs = require('fs');

fs.readFile('react.jpg', function (err, origin_buffer) {

    console.log(Buffer.isBuffer(origin_buffer));

    fs.writeFile('react_buffer.jpg', origin_buffer, function (err) {

        if(err) console.log(err);
    });

    var base64Image = origin_buffer.toString('base64');

    console.log(base64Image);

    var decodedImage = new Buffer(base64Image, 'base64');

    console.log(Buffer.compare(origin_buffer, decodedImage));

    fs.writeFile('loge_decoded.jpg', decodedImage, function (err) {
        if (err) console.log(err);
    })

});
