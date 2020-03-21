const {
    getProductionHouse,
    postProductionHouse,
    putProductionHouse,
    deleteProductionHouse
} = require('../models/productionHouse')
const helper = require('../helper')

module.exports = {
    getProductionHouse: async(req, res) => {
        const result = await getProductionHouse()
        return helper.response(res, 200, result)
    },
    createProductionHouse: async(req, res) => {
        try {
            const name = req.body.name
            const result = await postProductionHouse(name)
            const message = 'Data berhasil ditambahkan'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data gagal ditambahkan'
            return helper.response(res, 400, message, error)
        }
    },
    editProductionHouse: async(req, res) => {
        try {
            const name = req.body.name
            const id = req.params.id
            const result = await putProductionHouse(name, id)
            const message = 'Data berhasil diedit'
            return helper.response(res, 200, message, result)
        } catch (error) {
            console.log(error);
            const message = 'Data gagal diedit'
            return helper.response(res, 400, message, error)
        }
    },
    deleteProductionHouse: async(req, res)=>{
        try {
            const id = req.params.id
            const result = await deleteProductionHouse(id)
            const message = 'Data berhasil dihapus'
            return helper.response(res, 200, message, result)
        } catch (error) {
            const message = 'Data gagal dihapus'
            return helper.response(res, 400, message, error)
        }
    }
}