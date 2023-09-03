const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);
    // res.write('<h1>hello world</h1>');
    // res.setHeader('Content-Type', 'application/json')

    let basePath = '';
    switch(req.url) {
        case '/':
        case '/home':
        case '/index.html':
        case '/index':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(basePath, (err, data) => {
        if(err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        }
        else {
            res.write(data);
            res.end()
        }
    });

    // const data = JSON.stringify([
    //     { name: 'Tommy', age: 35 },
    //     { name: 'Aboba', age: 40 },
    // ])
    // res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});