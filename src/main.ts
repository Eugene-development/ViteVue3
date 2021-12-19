import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import store from './store'
import {createPinia} from 'pinia'



createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
