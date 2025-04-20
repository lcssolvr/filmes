import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'db-movies'
})

connection.connect()

/**
 * 
 * @param {string} query
 * @param {string = id | [selection, id]} values 
 * @param {string} messageReject 
 * @returns 
 */

export const consulta = (query, values='', messageReject) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (error, result) => {
            if(error) return reject(messageReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default connection
