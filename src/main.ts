import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes/routes'


const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')