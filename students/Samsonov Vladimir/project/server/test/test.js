const http = require('http');

const server = http.createServer( (req, res)=> {
    if (req.url === '/') {
        res.write('main page')
        res.end()
    } else if (req.url === '/lolkek') {
        res.write('LOL KEK')
        res.end()
    }
});

server.listen(3030);
server.on('connection', ()=> {
    console.log('connected')
});
console.log('listen at port 3030...')
console.log()