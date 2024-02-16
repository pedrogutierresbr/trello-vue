<script setup lang="ts">
	import { inject, onMounted, reactive } from "vue";
	import Board from "../entities/Board.js";
	import BoardService from "../services/BoardService.js";
	import BoardComponent from "../components/BoardComponent.vue";

	const data: { board: Board | undefined } = reactive({ board: undefined });

	onMounted(async () => {
		const boardService = inject("boardService") as BoardService;
		const board = await boardService.getBoard(1);
		data.board = board;
	});
</script>

<template>
	<BoardComponent :board="data.board" />
</template>

<style scoped></style>
