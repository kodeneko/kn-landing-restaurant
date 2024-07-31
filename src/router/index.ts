/* eslint-disable sort-keys/sort-keys-fix */
/* eslint-disable sort-keys */
import { createMemoryHistory, createRouter } from 'vue-router';

import MainLayout from '../layout/MainLayout.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        component: HomeView,
        path: '/'
      }
    ]
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
