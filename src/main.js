import './assets/style.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css' // 确保引入 Element-Plus CSS





import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'dayjs/locale/zh-cn'

const app = createApp(App)
app.use(router)


app.use(ElementPlus,{ locale: zhCn})

app.mount('#app')