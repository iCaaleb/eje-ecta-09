//Declaraciones
const { request, response } = require("express");
const express = require("express");
const app = express();
const port = process.env.port || 3000;

//Configuraciones - Respuestas para el cliente (Chrome, Firefox, Imsonia, Edge) 
app.get("/", (request, response)=> {
    response.send('Página principal')
})

app.get('*', (req, res)=>{
    res.send('404 | Página no encontrada')
})

//Procesos - Respuestas para el desarrollador
app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto: ', port);
})