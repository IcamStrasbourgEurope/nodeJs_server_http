const HTTP = require("http");

const PORT =  8080


const server = HTTP.createServer(function (requete, reponse) {

    console.log("Requête reçue");
    
    reponse.setHeader("Content-Type", "text/html");
    reponse.writeHead(200);
    reponse.end(`<html><body><h1>Ca fonctionne !</h1></body></html>`);

});


server.listen(PORT);
console.log("Serveur s'executant sur le port : " + PORT);