const http = require('http')
const url = require('url')
const fs = require('fs')

const httpServer = http.createServer((req, res) => {
    
    res.writeHead(200, {"Content-Type": "text/html"})

    switch(req.url){

        case("/"):
            res.write(fs.readFileSync(`./index.html`));
            break
        case("/about"):
            res.write(fs.readFileSync(`./about.html`));
            break
        case("/contact-me"):
            res.write(fs.readFileSync(`./contact-me.html`));
            break
        default:
            res.write(fs.readFileSync(`./404.html`));
            break
        
    }
    res.end()

}).listen(7128)

httpServer.on('connection', () => {console.log("Swag!")})

