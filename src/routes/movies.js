const express = require('express')
const Route = express.Router()
const{
    getMovies,
    createMovies,
    editMovies,
    deleteMovies
} = require('../controller/movies')

Route
    .get('/', getMovies)
    .post('/', createMovies)
    .put('/:id', editMovies)
    .delete('/:id', deleteMovies)

module.exports = Route    