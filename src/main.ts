import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-green/theme.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import TieredMenu from 'primevue/tieredmenu';
import Password from 'primevue/password';
import Card from 'primevue/card';

const app = createApp(App);
app.use(PrimeVue);
app.use(router)
app.component('Button', Button)
app.component('Textarea', Textarea)
app.component('InputText', InputText)
app.component('Sidebar', Sidebar)
app.component('TieredMenu', TieredMenu)
app.component('Password', Password)
app.component('Card', Card)

app.mount('#app')


