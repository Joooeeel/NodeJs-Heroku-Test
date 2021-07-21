const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantilla
app.set("view engine", "ejs");
app.set('vews', __dirname + './views');

//MiddleWare
app.use(express.static(__dirname + "/public"));



//Router
app.use('/', require('./router/WebRoutes'))
app.use('/mascotas', require('./router/Mascotas'))

app.use((req, res, next) => {
    res.status(404).render("404", { error: "ERROR 404 BRO" })
})


app.listen(port, () => {
    console.log('listening')
})