const connection = require('../config/mysql')

module.exports = {
    getMovies:()=>{
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM movie', (error, res)=>{
                if(!error){
                    resolve(res)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    postMovies:(setData)=>{
        return new Promise((resolve, reject)=>{
            connection.query('INSERT INTO movie SET?', setData, (error, res)=>{
                if(!error){
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    putMovies:(setData,id)=>{
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE movie SET ? WHERE id=?', [setData,id],(error,res)=>{
                if(!error){
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    deleteMovies:(id)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM movie WHERE id=?', id, (error,res)=>{
                if(!error){
                    const newResult={
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