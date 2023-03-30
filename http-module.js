const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page ');
    }
    if (req.url==='/about'){
        res.end('My name is gaurav')
    }
    
    res.end(`
        <h1> Oops!</h1>
        <a href="/">go back</a>
    `);
})

server.listen(5000);