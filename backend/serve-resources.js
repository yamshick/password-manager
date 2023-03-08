const url = require('url');
const resources = require('./resources.json')

module.exports.serveResources = ({request, response, error404FilePath}) => {
    const queryData = url.parse(request.url, true).query;
    const resourceName = queryData?.resourceName;

    if (!resourceName) {
        response.writeHead(400);
        response.end('Bad request 400');
    }

    const resourcesJson = JSON.stringify(
        resources.resources.filter(resource => resource.name.toLowerCase().includes(resourceName.toLowerCase())),
        null,
        2
    )

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(resourcesJson, 'utf-8');

}