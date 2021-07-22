const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;


//Database connection
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.vlx5n.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('base de datos conectada')).catch(e => console.log(e))

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