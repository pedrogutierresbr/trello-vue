import Card from "../entity/Card"

export default interface ColumnRepository {
    findAllByIdColumn(idColumn: number): Promise<Card[]>
}