/* eslint-disable vue/multi-word-component-names */
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import Toast from 'primevue/toast';
import type { App } from 'vue';

export const PrimeVitals = {
  install: (app: App) => {
    app.use(ConfirmationService);
    app.use(ToastService);
    app.use(DialogService);
    app.component('Toast', Toast);
    app.component('Card', Card);
  },
};

