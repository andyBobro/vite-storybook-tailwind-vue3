import { createApp } from 'vue'
import router from 'router/index'
import store from 'store/index'
import i18n from './i18n'
import App from 'ui/App.vue'
import 'styles/tailwind/index.css'

createApp(App).use(router).use(store).use(i18n).mount('#app')
