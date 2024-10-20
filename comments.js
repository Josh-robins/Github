//create web server
//create server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('comments.html', (error, data) => {
        if(error){
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, () => {
    console.log('Server is running...');
});
