import express from "express";
import BoardService from "./service/BoardService";
import ColumnService from "./service/ClumnsService";
import CardService from "./service/CardService";

const app = express();

app.get("/boards", async function (req, res) {
	const boardService = new BoardService()
	const boards = await boardService.getBoards()
	res.json(boards);
});

app.get("/boards/:idBoard/columns", async function (req, res) {
	const columnService = new ColumnService()
	const columns = await columnService.getColumns(parseInt(req.params.idBoard))
	res.json(columns);
});

app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
	const cardService = new CardService()
	const cards = await cardService.getCards(parseInt(req.params.idColumn))	
	res.json(cards);
});

app.listen(3000);
