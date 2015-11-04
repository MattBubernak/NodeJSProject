var http = require("http");


function main(){
    // Console will print the message
    console.log('Server running at http://127.0.0.1:8080/');
    var server = http.createServer(function (request, response) {

        // Send the HTTP header
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});

        // Send the response body as "Hello World"
        response.end('Hello World\n');
    });

    server.listen(8080); //Why is this not blocking
    console.log('Main completed');

    //main loop here prevents other stuff from working
}

main();
