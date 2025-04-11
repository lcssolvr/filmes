import connection from "../database/connection.js"

class SelectionController {

    index(req, res) {
        const query = "SELECT * FROM movies;"
        connection.query(query,(error, result) => {
            if(error) {
                res.status(404).json({error: 'Data not located.'})
            } else {
                res.status(200).json(result)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const query = "SELECT * FROM movies WHERE id = ?;"
        connection.query(query, id, (error, result) => {
            const line = result[0]
            if(error) {
                res.status(404).json({error: 'Data not located.'})
            } else {
                res.status(200).json(line)
            }
        })
    }

    store(req, res) {
        const selection = req.body
        const query = "INSERT INTO movies SET ?;"
        connection.query(query, selection, (error, result) => {
            if(error) {
                res.status(400).json({error: 'Bad Request.'})
            } else {
                res.status(201).json(result)
            }
        })
    }

    update(req, res) {
        const id = req.params.id
        const selection = req.body
        const query = "UPDATE movies SET ? WHERE id = ?;"
        connection.query(query, [selection, id], (error, result) => {
            if(error) {
                res.status(404).json({error: 'Data not located.'})
            } else {
                res.status(201).json(result)
            }
        })
    }

    delete(req, res) {
        const id = req.params.id
        const query = "DELETE FROM movies WHERE id = ?;"
        connection.query(query, id, (error, result) => {
            if(error) {
                res.status(404).json({error: 'Data not located.'})
            } else {
                res.status(201).json(result)
            }
        })
    }

}

// singleton
export default new SelectionController()
