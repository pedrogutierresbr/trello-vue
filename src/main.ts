import express from "express";

const app = express();
app.get("/boards", function (req, res) {
	const boards = [{ name: "Projeto 1" }];
	res.json(boards);
});

app.listen(3000);
