import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { PrimeIcons } from 'primevue/api';



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(PrimeIcons)

app.mount('#app')