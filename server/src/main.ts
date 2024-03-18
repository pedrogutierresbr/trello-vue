import BoardController from "./infra/controller/BoardController";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import BoardRepositoryDatabase from "./infra/repository/BoardRepositoryDatabase";
import CardRepositoryDatabase from "./infra/repository/CardRepositoryDatabase";
import ColumnRepositoryDatabase from "./infra/repository/ColumnRepositoryDatabase";
import AuthController from "./infra/controller/AuthController";

const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);
const http = new ExpressAdapter();
new AuthController(http);
new BoardController(http, connection, boardRepository, columnRepository, cardRepository);
http.listen(3000);
process.on("exit", async function () {
	await connection.close();
});
