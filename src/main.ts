import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Aura from '@primeuix/themes/aura';

createApp(App).use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).mount('#app')
