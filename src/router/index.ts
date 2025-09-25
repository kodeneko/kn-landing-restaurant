/* eslint-disable sort-keys/sort-keys-fix */
/* eslint-disable sort-keys */
import { Paths } from '@globals/paths';
import { createMemoryHistory, createRouter } from 'vue-router';

import MainLayout from '../layout/MainLayout.vue';
import HomeView from '../views/home/HomeView.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        component: HomeView,
        path: '/',
        children: [
          {
            component: HomeView,
            path: Paths.Contact
          },
          {
            component: HomeView,
            path: Paths.Delivery
          },
          {
            component: HomeView,
            path: Paths.Location
          },
          {
            component: HomeView,
            path: Paths.Menu
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
