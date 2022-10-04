import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.less'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AntD)
app.mount('#app')
