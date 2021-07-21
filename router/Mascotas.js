const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [{
            id: 'kdkdkdkd',
            name: 'rex',
            description: 'Esta es la descripcion perruna'
        },
        {
            id: 'fgfgfgfgf',
            name: 'Spidy',
            description: 'Esta es la descripcion spidiana'
        }]
    })
})

module.exports = router;