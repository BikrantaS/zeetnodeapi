// const http = require('http');

// const hostname = '0.0.0.0';
// const port = 3000;

// let c = 0;
// const server = http.createServer((req, res) => {
//     console.log('request no.:', c++);

//     if (req.url === '/') {
//         res.end("Welcome to homepage");
//     }
//     else if (req.url === '/about') {
//         res.end("About page");
//     }
//     else {
//         res.end("<H1>OPPS</H1>");
//     }

// })

// server.listen(port, hostname, () => {
//     console.log(`server on http://${hostname}:${port}..`);
// })

const hostname = '0.0.0.0';
const port = 3000;



const express = require('express');
const logger = require('./logger');//importing defined middleware
const authorize = require('./authorize');
const data = require('./data');
const cors = require('cors');

const app = express();
app.use([logger, authorize]);
// app.use(express.static('./YOUR STATIC DIRECTORY'));  //to access staticfiles

app.use(cors({ origin: "https://react-feature-testing.web.app", }))

app.get('/', logger, (req, res) => {
    res.send("WELCOME TO ROOT");
})

app.get('/about', (req, res) => {
    res.send("API");
})

app.get('/api/v1/:info', (req, res) => {
    const { info } = req.params;
    console.log("id:", info);
    res.status(200).json({ sucess: true, data: data });
    //res.send("ABout PAGE");
})

app.all('*', (req, res) => {
    res.send("INAVLID URL");
})



app.listen(port, hostname, () => {
    console.log("Server running on port 3000..")
})