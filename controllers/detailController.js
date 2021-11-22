const fs = require('fs');
const path = require('path');
const comidas = require('../data/comidas.json')

module.exports = {
    detail: (req,res) => {

        let comidaId = comidas.find(comida => comida.id === +req.params.id)

        res.render('detalleMenu',{
            title: 'detalle del plato',
            comidaId
        })
    }
}