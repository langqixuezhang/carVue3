import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import '@/common/style/index.scss'
import '@/common/style/common.scss';

createApp(App).use(router).mount('#app')
