<script>
  import axios from "axios";
  export default {
    data() {
      return {
        board: {
          name: "Project A",
          columns: [
            {
              name: "Todo",
              cards: [
                {title: "A", estimative: 3},
                {title: "B", estimative: 2},
                {title: "C", estimative: 1}
              ]
            },
            {
              name: "Doing",
              cards: []
            },
            {
              name: "Done",
              cards: []
            }
          ]
        }
      }
    },
    async mounted() {
      const response = await axios({
        url: "http://localhost:3000/boards/1",
        method: "get"
      });
      this.board = response.data
    },
  }
</script>

<template>
  <h3>{{ board.name }} {{ board.estimative }}</h3>
  <div class="columns">
    <div class="column" v-for="(column, index) in board.columns" :key="index">
      <h3>{{ column.name }} {{ column.estimative }}</h3>
      <div class="card" v-for="(card, index) in column.cards" :key="index">
        {{ card.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.columns{
  display: flex;
  flex-direction: row;
}

.column{
  width: 200px;
  text-align: center;
  background-color: #CCC;
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #000;
}

.card{
  text-align: center;
  width: 100%;
  height: 80px;
  background-color: #F3E779;
  border: 1px solid #000;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
