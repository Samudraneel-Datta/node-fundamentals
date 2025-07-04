const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.url == "/" ){
    res.end("<h1>hello world</h1>")
    }
    else if(req.url == "/about"){
        res.end ("<h1>this is the about section</h1>")
    }
    else {res.end("This page does not exist!!!!")}
    
})
server.listen("3000")