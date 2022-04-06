import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from "./App.vue"
import { ElMessage, ElMessageBox } from 'element-plus'

// Global Css
import "~/styles/index.scss";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

// install MDB UI KIT in your project
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css' // scss

// Import apis
import http from "~/apis/http.js"

const app = createApp(App);

app.config.globalProperties.$http = http;
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$alert = ElMessageBox;

app.use(router)
app.use(store)
app.mount("#app");
