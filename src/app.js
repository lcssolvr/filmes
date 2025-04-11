import express from 'express'
import connection from '../infra/connection.js'

const app = express()

app.use(express.json())

// ROUTES
app.get('/movies', (req, res) =>{
    const query = "SELECT * FROM movies;"
    connection.query(query,(error, result) => {
        if(error) {
            res.status(404).json({error: 'Data not located.'})
        } else {
            res.status(200).json(result)
        }
    })
})

app.get('/movies/:id', (req, res) => {
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
})

app.post('/movies', (req, res) => {
    const selection = req.body
    const query = "INSERT INTO movies SET ?;"
    connection.query(query, selection, (error, result) => {
        if(error) {
            res.status(400).json({error: 'Bad Request.'})
        } else {
            res.status(201).json(result)
        }
    })
})


app.delete('/movies/:id', (req, res) => {
    const id = req.params.id
    const query = "DELETE FROM movies WHERE id = ?;"
    connection.query(query, id, (error, result) => {
        if(error) {
            res.status(404).json({error: 'Data not located.'})
        } else {
            res.status(201).json(result)
        }
    })
})

app.put('/movies/:id', (req, res) => {
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
})

export default app
