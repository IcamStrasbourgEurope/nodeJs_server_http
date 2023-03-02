const HTTP = require("http");

const HOST = 'localhost';
const PORT = 8000;


const server = HTTP.createServer(function (requete, reponse) {

    console.log("Requête reçue");
    
    reponse.setHeader("Content-Type", "text/html");
    reponse.writeHead(200);
    reponse.end(`<html><body><h1>Ça fonctionne !</h1></body></html>`);

});


server.listen(HOST, PORT, () => {
    console.log(`Serveur fonctionnel à l'adresse : http://${HOST}:${PORT}`);
});