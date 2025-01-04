var http = require('http')
http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200)
        res.write("home page")
        res.end()
    }else if(req.url=='/about'){
        res.writeHead(200)
        res.write('this is about page')
        res.end()
    }else{
        res.writeHead(404)
        res.write('page not found')
        res.end()
    }
}).listen(8080)