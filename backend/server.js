const http = require('http');
const fs = require('fs');
const path = require('path');
const {serveFile} = require('./serve-file');
const {serveResources} = require('./serve-resources')

const PORT = 8125
const PATH_PREFIX = '../frontend/dist'
const error404FilePath = path.resolve(PATH_PREFIX)

http.createServer((request, response) => {
    console.log('request ', request.url);
    // console.log({request})

    if (request.method === 'GET') {
        if (request.url.substring(0, '/resources?'.length) === '/resources?') {
            serveResources({request, response, error404FilePath})
        } else if (request.url === '/resources') {
            const filePath = path.resolve('./resources.json');
            serveFile({filePath, response, error404FilePath})
        } else {
            const filePath = request.url === '/'
                ? path.resolve(PATH_PREFIX, './index.html')
                : path.resolve(PATH_PREFIX, `./${request.url}`);

            serveFile({filePath, response, error404FilePath})
        }
    } else if (request.method === 'POST') {
        console.log(request)
    }

}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);