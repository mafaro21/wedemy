import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import Card from 'primevue/card';

const app = createApp(App);
app.use(router)
app.use(ElementPlus)
// app.component('Card', Card)

app.mount('#app')


