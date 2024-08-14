const http = require('http');
const fs = require('fs');
const { timeStamp } = require('console');

const HOST = 'localhost';
const PORT = 8080;

const requestHandler = (req, res) => {

    switch(req.url) {
        case '/image': {
            const image = fs.readFileSync('./funny_dog.jpg');
            res.setHeader('content-type', 'image/jpg');
            res.end(image);
            break;
        }
        case '/html': {
            const html = `<html>
            <head>
                <title>My dynamic server!</title>
            </head>
            <body>
            <h1>This is my dynamic server! Not a default static one!</h1>
            <h2>Cool Cool Cool</h2>
            <p>As for now so: ${new Date().toLocaleString()}</p>
            </body>
            </html>
            `;
            res.setHeader('content-type', 'text/html');
            res.end(html);
            break;
        }
        default: {
            res.setHeader('content-type', 'text/plain');
            res.end('This is a default response from the server.')
        }

    }
}

const server = http.createServer(requestHandler);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})