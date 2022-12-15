// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const req = require("express/lib/request");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

const port = process.env.PORT || 3000;
// Ponemos a escuchar el servidor
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port)
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})