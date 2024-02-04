const http = require('http')
const url = require('url')

const httpServer = http.createServer((req, res) => {
    
    res.writeHead(200)
    res.write(`Hey! Connection made!, ${req.url}`)
    res.end()

}).listen(7128)

httpServer.on('connection', () => {console.log("Swag!")})

