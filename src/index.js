const express = require('express')
const Route = express.Router()

const movies = require('./routes/movies')
const productionHouse = require('./routes/productionHouse')

Route
    .use('/movies', movies)
    .use('/productionHouse', productionHouse)

module.exports = Route