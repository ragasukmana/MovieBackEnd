const connection = require('../config/mysql')

module.exports =  {
    getProductionHouse: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM productionHouse', (error, res) => {
                if (!error) {
                    resolve(res)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postProductionHouse: (name) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO productionHouse SET name=?', name, (error, res) => {
                if(!error){
                    const newResult = {
                        name
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    putProductionHouse: (name, id) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE productionHouse SET name=? WHERE id=?', [name,id],(error,res)=>{
                if(!error){
                    const newResult = {
                        name
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    deleteProductionHouse:(id) =>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM productionHouse WHERE id=?', id, (error, res)=>{
                if(!error){
                    const newResult = {
                        id
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    }
}