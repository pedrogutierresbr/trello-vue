import Column from "../domain/entity/Column";
import pgp from "pg-promise"

export default class ColumnService {
    constructor() {

    }

    async getColumns(idColumn: number) {
        const connection = pgp()("postgres://postgres:197634@localhost:5432/trello")
        const columnsData = await connection.query("select name, has_estimative from pedro.column where id_board = $1", [idColumn])
        const columns: Column[] = []
        for (const columnData of columnsData) {
            columns.push(new Column(columnData.name, columnData.has_estimative))
        }
        await connection.$pool.end()
        return columns
    }
}