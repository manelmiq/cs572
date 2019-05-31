// Where fileName is name of the file and response is Node.js Reponse.

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');



http.createServer(function (request, response) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    console.log(query);
    response.end('teste');
})
    .listen(4000);
