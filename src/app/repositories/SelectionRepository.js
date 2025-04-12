import connection from "../database/connection.js"

class SelectionRepository {

    create(selection) {
        const query = "INSERT INTO movies SET ?;"
        return new Promise((resolve, reject) => {
            connection.query(query, selection, (error, result) => {
                if(error) return reject('Unable to register.')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll() {
        const query = "SELECT * FROM movies;"
        return new Promise((resolve, reject) => {
            connection.query(query, (error, result) => {
                if(error) return reject('Data not located.')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const query = "SELECT * FROM movies WHERE id = ?;"
        return new Promise((resolve, reject) => {
            connection.query(query, id, (error, result) => {
                if(error) return reject('Data not located.')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(selection, id) {
        const query = "UPDATE movies SET ? WHERE id = ?"
        return new Promise((resolve, reject) => {
            connection.query(query, [selection, id], (error, result) => {
                if(error) return reject('Data not located.')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    delete(id) {
        const query = "DELETE FROM movies WHERE id = ?"
        return new Promise((resolve, reject) => {
            connection.query(query, id, (error, result) => {
                if(error) return reject('Data not located.')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

}

export default new SelectionRepository()
