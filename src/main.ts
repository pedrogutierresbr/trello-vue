import express from "express";
import pgp from "pg-promise"

const app = express();
const connection = pgp()("postgres://postgres:197634@localhost:5432/trello")

app.get("/boards", async function (req, res) {
	const boards = await connection.query("select * from pedro.board", [])
	console.log(boards);
	
	res.json(boards);
});

app.get("/boards/:idBoard/columns", async function (req, res) {
	const columns = await connection.query("select * from pedro.column where id_board = $1", [req.params.idBoard])
	console.log(columns);
	
	res.json(columns);
});

app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
	const cards = await connection.query("select * from pedro.card where id_column = $1", [req.params.idColumn])
	console.log(cards);
	
	res.json(cards);
});

app.listen(3000);
