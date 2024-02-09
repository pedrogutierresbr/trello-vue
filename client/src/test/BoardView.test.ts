import { mount } from "@vue/test-utils";
import Board from "../entities/Board";
import BoardService from "../services/BoardService";
import BoardViewVue from "../views/BoardView.vue";

function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	});
}

test("Deve testar o board view", async function () {
	const boardService: BoardService = {
	    async getBoard() {
	        const board = new Board("Projeto 1");
	        board.addColumn("Todo", true);
	        board.addColumn("Doing", true);
	        board.addColumn("Done", false);
	        board.addCard("Todo", "Atividade 1", 3);
	        board.addCard("Todo", "Atividade 2", 2);
	        board.addCard("Todo", "Atividade 3", 1);
	        return board
	    }
	}

	const wrapper = mount(BoardViewVue, {
		global: {
			provide: {
				boardService,
			},
		},
	});
	await sleep(100);
	expect(wrapper.get("#estimative").text()).toBe("6");
});