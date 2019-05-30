// Where fileName is name of the file and response is Node.js Reponse.

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (request, response) {

    var filePath = path.join(__dirname, 'big.file');
    fs.exists(filePath, function(exists){
        if (exists) {
            response.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=big.file"
            });
            console.log('download file');
            fs.createReadStream(filePath, {encoding:'utf-8', highWaterMark: 16*1024}).pipe(response);
        } else {
            response.writeHead(400, {"Content-Type": "text/plain"});
            response.end("ERROR File does not exist");
        }
    });


})
    .listen(2000);
