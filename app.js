const express = require('express');
const app = express();

const port = 3000;

//motor de plantilla
app.set("view engine", "ejs");
app.set('vews', __dirname + './views');

//MiddleWare
app.use(express.static(__dirname + "/public"));



//Router
app.get('/', (req, res) => {
    res.render("index", { titulo: "Mi titulo dinamico" })
})

app.get('/servicios', (req, res) => {
    res.render("servicios", { tituloServicios: "Mi titulo dinamico de servicios" })
})

app.use((req, res, next) => {
    res.status(404).render("404", { error: "ERROR 404 BRO" })
})


app.listen(port, () => {
    console.log('listening')
})