import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElaraElement from 'elara-element'

createApp(App)
.use(ElaraElement)
.mount('#app')
