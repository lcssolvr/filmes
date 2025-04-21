import { Router } from "express";
import SelectionController from "./app/controllers/SelectionController.js";

const router = Router()

router.get('/movies', SelectionController.index)
router.get('/movies/:id', SelectionController.show)
router.post('/movies', SelectionController.store)
router.delete('/movies/:id', SelectionController.delete)
router.put('/movies/:id', SelectionController.update)

export default router
