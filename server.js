//Importing module
const http=require("node:http")
//Creating instance of server

const server=http.createServer(function(req,res){
    //reply to all
    if(req.url==="/fork"){
        res.end("korbo lorbo jeetbo")
    }
    res.end("Hello from server")
})
//Ready to listen to any new request
server.listen(7777);

