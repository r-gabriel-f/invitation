import './assets/main.css';
import './assets/flags.css';
import 'primeicons/primeicons.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Wind from './presets/wind';
//import Lara from '@/presets/lara';
import { PrimeVitals } from './prime.vitals';
import { createApp } from 'vue';
import { cn } from './lib/utils';
const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  //pt: Lara,
  pt: Wind,
});

app.use(PrimeVitals);

//making cn available globally
app.config.globalProperties.$cn = cn;
import('./prime').then((m) => m.default(app));

app.mount('#app');
