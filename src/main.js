import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from "./App.vue"

// Global Css
import "~/styles/index.scss";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"
import "@element-plus/icons-vue"

// install MDB UI KIT in your project
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css' // scss

// Import apis
import http from "~/apis/http.js"

const app = createApp(App);

app.config.globalProperties.$http = http;

app.use(router)
app.use(store)
app.mount("#app");
