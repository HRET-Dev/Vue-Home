import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局样式
import './style.css'

createApp(App)
    .use(router)
    .mount('#app')
