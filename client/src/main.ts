import { createApp } from "vue";
import App from "./App.vue";
import BoardServiceHttp from "./services/BoardServiceHttp";
import AxiosAdapter from "./infra/http/AxiosAdapter";

const app = createApp(App);
const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3000";
app.provide("boardService", new BoardServiceHttp(httpClient, baseUrl));
app.mount("#app");
