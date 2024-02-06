import Card from "./Card"

export default class Column {
    cards: Card[]

    constructor (readonly name: string, readonly hasEstimative: boolean){
        this.cards = []
    }

    addCard (card: Card){
        this.cards.push(card);
    }
}