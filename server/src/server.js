const app = require('./app');
const http = require('http');
require('dotenv').config()
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer(){
    server.listen(PORT, () =>{
        console.log(`Server is Listening on port ${PORT}`)
    });
}

startServer();