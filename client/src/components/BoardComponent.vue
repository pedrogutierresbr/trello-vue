<script setup lang="ts">
	import ColumnComponent from "./ColumnComponent.vue";
	import NewCardComponent from "./NewCardComponent.vue";
	import NewColumnComponent from "./NewColumnComponent.vue";
	defineProps(["board"]);
</script>

<template>
	<div v-if="board">
		<h3>
			{{ board.name }} <span id="estimative"> {{ board.getEstimative() }}</span>
		</h3>
		<div class="columns">
			<div v-for="(column, index) in board.columns" :key="index">
				<ColumnComponent :board="board" :column="column" />
				<NewCardComponent :board="board" :column="column" />
			</div>
			<NewColumnComponent :board="board"/>
		</div>
	</div>
</template>

<style scoped>
	.columns {
		display: flex;
		flex-direction: row;
	}

	.new-column {
		background-color: #eee;
		border: 1px dashed #ccc;
		display: block;
	}

	.new-card {
		background-color: #eee;
		border: 1px dashed #ccc;
		display: block;
	}
</style>
