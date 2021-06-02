const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

let c = 0;
const server = http.createServer((req, res) => {
    console.log('request no.:', c++);

    if (req.url === '/') {
        res.end("Welcome to homepage");
    }
    else if (req.url === '/about') {
        res.end("About page");
    }
    else {
        res.end("<H1>OPPS</H1>");
    }

})

server.listen(port, hostname, () => {
    console.log(`server on http://${hostname}:${port}..`);
})