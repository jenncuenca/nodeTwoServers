// Require/import the HTTP module
var http = require("http");

// PORT VARIABLES
var PORT1 = 7000;
var PORT2 = 7500;

//SERVER VARIABLES 
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);


// ** ===== SERVER 1 ===== ** //
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url + "YOU ROCK!");
}

// LISTENS TO SERVER 1
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server 1 listening on: http://localhost:" + PORT1);
});

// ** ===== SERVER 2 ===== ** //
function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url + "YOU LUCKED OUT");
  }

  // LISTENS TO SERVER 2
  server2.listen(PORT2, function() {
  
    // Log (server-side) when our server has started
    console.log("Server 2 listening on: http://localhost:" + PORT2);
  });