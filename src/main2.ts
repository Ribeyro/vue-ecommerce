import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from 'pinia'

import ContadorComponente from "./ContadorComponente.vue";
import router from './router'

const app = createApp(ContadorComponente);

app.use(createPinia())
app.use(router)

app.mount("#app");
