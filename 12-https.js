const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url=== '/'){
        res.end('Welcome to our home page')
    }if (req.url=== '/about'){
        res.end('Here is our history')
    }
    res.end(`<h1>Oops!</h1>
    <p>We cant seem to find the page you were looking for</p>
    <a href = "/">Back Home<a>`)
    
})

server.listen(5000)