//

const fs = require('fs');
const path = require('path');


process.on('request', (fileName) => {
    console.log('children process!');


    let filePath = path.join(__dirname, fileName.fileName);
    console.log(filePath);
    var stream = fs.createReadStream(filePath.toString(), 'utf8');

    stream.on('data', data => {
        process.send(data);
    });
    stream.on('end', (data) => {
        process.exit(0);
    });

});


