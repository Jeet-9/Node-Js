const http = require("http");
const port = 8000;

const portHandler = (req, res) => {
    res.write("<h1>Project-1</h1>");
    res.write("<h1>Node Js</h1>");
    res.end();
};

const server = http.createServer(portHandler);

server.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
})