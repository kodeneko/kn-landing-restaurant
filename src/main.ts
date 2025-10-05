import './assets/styles/global.less';
import './icons/fontawesome';
import './i18n';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import i18n from './i18n';
import router from './router/index';

const pinia = createPinia();

const app = createApp(App)
  .use(router)
  .use(pinia)
  .component('fai', FontAwesomeIcon);

i18n(app)
  .mount('#app');
