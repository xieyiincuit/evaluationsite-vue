import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from "./App.vue"

// Global Css
import "~/styles/index.scss";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

// install MDB UI KIT in your project
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css' // scss

// Import apis
import evalapi from "~/apis/evaluation-api.js"
import idsapi from "~/apis/identity-api.js"

const app = createApp(App);

app.config.globalProperties.$evalapi = evalapi;
app.config.globalProperties.$idsapi = idsapi;

app.use(router)
app.use(store)
app.mount("#app");
