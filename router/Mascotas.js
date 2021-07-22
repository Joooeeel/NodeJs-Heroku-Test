const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')


router.get('/', async (req, res) => {

    try {
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;



/*arrayMascotas: [{
           id: 'kdkdkdkd',
           name: 'rex',
           description: 'Esta es la descripcion perruna'
       },
       {
           id: 'fgfgfgfgf',
           name: 'Spidy',
           description: 'Esta es la descripcion spidiana'
       }]*/