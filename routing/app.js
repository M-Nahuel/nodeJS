const http = require('http');
const {infoCourses} = require('./courses.js');

const server = http.createServer((req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            return handleGET(req, res);
        case 'POST':
            return handlePOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`This method cannot be handled by the server: ${method}`);
            break;
    };

});

function handleGET(req, res) {
    const path = req.url;

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end('Welcome to my first server & API created with node.js!');
    } else if (path === '/courses') {
    
        return res.end(JSON.stringify(infoCourses));
    } else if (path === '/courses/programming') {
        
        return res.end(JSON.stringify(infoCourses.programming));
    }

    res.statusCode = 404;
    res.end('The requested resource does not exist...');
};

function handlePOST(req, res) {
    const path = req.url;

    if (path === '/courses/programming') {

        let body = '';

        req.on('data', content => {
            body += content.toString();
        });

        req.on('end', () => {
            console.log(body);
            console.log(typeof body);

            body = JSON.parse(body);

            console.log(typeof body);
            console.log(body.title);

            res.end('The server has received a POST request for /courses.programming');
        });

        //return res.end('The server has received a POST request for /courses.programming');
    } else {
        res.statusCode = 404;
        res.end('The requested resource does not exist...');
    };
};

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`);
})