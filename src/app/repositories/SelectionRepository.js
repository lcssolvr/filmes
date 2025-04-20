import { consulta } from "../database/connection.js"

class SelectionRepository {

    create(selection) {
        const query = "INSERT INTO movies SET ?;"
        return consulta(query, selection, 'Não foi possível cadastrar filme')
    }

    findAll() {
        const query = "SELECT * FROM movies;"
        return consulta(query,'Não foi possível buscar filme')
    }

    findById(id) {
        const query = "SELECT * FROM movies WHERE id = ?;"
        return consulta(query, id,'Não foi possível buscar filme')
    }

    update(selection, id) {
        const query = "UPDATE movies SET ? WHERE id = ?"
        return consulta(query, [selection, id],'Não foi possível atualizar filme')
    }

    delete(id) {
        const query = "DELETE FROM movies WHERE id = ?"
        return consulta(query, id,'Não foi possível deletar filme')
    }

}

export default new SelectionRepository()
