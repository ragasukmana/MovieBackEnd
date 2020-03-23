const {
    getMovies,
    postMovies,
    putMovies,
    deleteMovies
} = require('../models/movies')
const helper = require('../helper')

module.exports = {
    getMovies: async(req, res) => {
        const result = await getMovies()
        return helper.response(res, 200,null, result)
    },
    createMovies: async(req, res)=>{
        try {
            const setData = {
                movie : req.body.movie,
                genre : req.body.genre,
                productionHouseId : req.body.productionHouseId
            }
            const result = await postMovies(setData)
            const message = 'Data berhasil ditambah'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data gagal ditambah'
            return helper.response(res, 400, message, error)
            
        }
    },
    editMovies: async(req, res)=>{
        try {
            const setData = {
                movie : req.body.movieName,
                genre : req.body.genre,
                productionHouseId : req.body.productionHouse
            }
            const id = req.params.id
            const result = await putMovies(setData, id)
            const message = 'Data berhasil diedit'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data gagal diedit'
            return helper.response(res, 400, message, error)
        }
    },
    deleteMovies: async(req, res)=>{
        try {
            const id = req.params.id
            const result = await deleteMovies(id)
            const message = 'Data berhasil dihapus'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data gagal dihapus'
            return helper.response(res, 400, message, error)
        }
    }
}