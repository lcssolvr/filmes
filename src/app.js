import express from 'express'
import SelectionController from './app/controllers/SelectionController.js'

const app = express()

app.use(express.json())

// ROUTES
app.get('/movies', SelectionController.index)
app.get('/movies/:id', SelectionController.show)
app.post('/movies', SelectionController.store)
app.delete('/movies/:id', SelectionController.delete)
app.put('/movies/:id', SelectionController.update)

export default app
