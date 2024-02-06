<script setup lang="ts">
	import axios from "axios";
	import { reactive, onMounted, computed } from "vue";

	let data: any = reactive({});

	let columnName = "";
	let cardTitle = "";

	function addColumn(columnName: string) {
		data.board.columns.push({ name: columnName, estimative: 1, cards: [] });
	}

	function addCard(column: any, cardTitle: string) {
		column.cards.push({ title: cardTitle, estimative: 3 });
		column.estimative += 3;
	}

	function increaseEstimative(card: any) {
		card.estimative++;
	}

	const boardEstimative = computed(() => {
		return data.board.columns.reduce((total: number, column: any) => {
			total += column.cards.reduce((total: number, card: any) => {
				total += card.estimative;
				return total;
			}, 0);
			return total;
		}, 0);
	});

	onMounted(async () => {
		const response = await axios({
			url: "http://localhost:3000/boards/1",
			method: "get",
		});
		data.board = response.data;
	});
</script>

<template>
	<div v-if="data.board">
		<h3>{{ data.board.name }} {{ boardEstimative }}</h3>
		<div class="columns">
			<div class="column" v-for="(column, index) in data.board.columns" :key="index">
				<h3>{{ column.name }} {{ column.estimative }}</h3>
				<div class="card" v-for="(card, index) in column.cards" :key="index">
					{{ card.title }} {{ card.estimative }}
					<br />
					<button @click="increaseEstimative(card)">+</button><button>-</button>
				</div>
				<div class="card new-card">
					<input type="text" v-model="cardTitle" />
					<button @click="addCard(column, cardTitle)">Add</button>
				</div>
			</div>
			<div class="column new-column">
				<input type="text" v-model="columnName" />
				<button @click="addColumn(columnName)">Add</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.columns {
		display: flex;
		flex-direction: row;
	}

	.column {
		width: 200px;
		text-align: center;
		background-color: #ccc;
		margin-right: 5px;
		padding: 10px;
		border: 1px solid #000;
	}

	.new-column {
		background-color: #eee;
		border: 1px dashed #ccc;
		display: block;
	}

	.card {
		text-align: center;
		width: 100%;
		height: 80px;
		background-color: #f3e779;
		border: 1px solid #000;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.new-card {
		background-color: #eee;
		border: 1px dashed #ccc;
		display: block;
	}
</style>
