const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const {fork} = require('child_process');
const qs = require('querystring');

const server = http.createServer();



server.on('request',function (request, response) {
    const streamFile = fork('childrenProcess.js');
    let url_parts = url.parse(request.url, true);
    let query = url_parts.query;
    console.log(query);
    // console.log(qs.parse(query));
    streamFile.send(qs.parse(query));
    streamFile.on('request', data => {
        response.end(data);
    })

    // var str = serverObj.req.url.split('?')[1];
    // const childProcess = fork('process-chunk.js');
    // childProcess.send(qs.parse(str));
    //
    // childProcess.on('message', chunk => {
    //     serverObj.res.write(chunk.toString());
    // });
    //
    // childProcess.on('exit', () => {
    //     serverObj.res.end();
    // });
    // response.end('teste');
}).listen(4000);

