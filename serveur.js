// J'appelle la bibliothèque de fonction "http"
const HTTP = require("http");

// Je définie le port réseau d'écoute
const PORT =  8080

// Je crée mon serveur
const SERVER = HTTP.createServer(function (requete, reponse) {

    console.log("Requête reçue");
    
    // Je définie la réponse envoyée lorsqu'une requête est reçue
    reponse.setHeader("Content-Type", "text/html");
    reponse.writeHead(200);
    reponse.end(`<html><body><h1>Ca fonctionne !</h1></body></html>`);

});

// Je dis à mon serveur d'écouter sur le port définie plus haut
SERVER.listen(PORT);

// Je donne l'indication que mon serveur est en cours d'exécution
console.log("Serveur s'executant sur le port : " + PORT);
