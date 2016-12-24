var fs = require('fs');

var sourse = fs.readFileSync('../buffer/react.jpg');

fs.writeFileSync('steam_copy_react.jpg', sourse);