const http = require('http');

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

server.listen(5000, () => {
    console.log("listening on port 5000..");
})