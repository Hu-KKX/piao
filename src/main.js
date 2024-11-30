import './assets/style.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'dayjs/locale/zh-cn'

const app = createApp(App)
app.use(router)
app.use(axios)

app.use(ElementPlus,{ locale: zhCn})

app.mount('#app')