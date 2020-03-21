const express = require('express')
const Route = express.Router()
const {
    getProductionHouse,
    createProductionHouse,
    editProductionHouse,
    deleteProductionHouse
} = require('../controller/productionHouse')

Route 
    .get('/', getProductionHouse)
    .post('/', createProductionHouse)
    .put('/:id', editProductionHouse)
    .delete('/:id', deleteProductionHouse)

module.exports = Route