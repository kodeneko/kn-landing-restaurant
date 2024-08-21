import './assets/styles/global.less';
import './icons/fontawesome';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';
import i18n from './i18n';
import router from './router/index';

const app = createApp(App)
  .use(router)
  .component('fai', FontAwesomeIcon);

i18n(app)
  .mount('#app');
