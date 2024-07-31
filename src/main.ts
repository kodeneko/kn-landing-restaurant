import './style.css';

import { createApp } from 'vue';

import App from './App.vue';
import i18n from './i18n';
import router from './router/index';

i18n(createApp(App).use(router)).mount('#app');
