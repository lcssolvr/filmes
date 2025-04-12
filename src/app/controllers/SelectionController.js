import SelectionRepository from "../repositories/SelectionRepository.js"

class SelectionController {

    async index(req, res) {
        const row = await SelectionRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SelectionRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const selection = req.body
        const row = await SelectionRepository.create(selection)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const selection = req.body
        const row = await SelectionRepository.update(selection, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await SelectionRepository.delete(id)
        res.json(row)
    }

}

// singleton
export default new SelectionController()
