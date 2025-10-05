/* eslint-disable sort-keys/sort-keys-fix */
/* eslint-disable sort-keys */
import { Paths } from '@globals/paths';
import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '../layout/MainLayout.vue';
import DocumentView from '../views/document/DocumentView.vue';
import HomeView from '../views/home/HomeView.vue';
import NotFoundView from '../views/not-found/NotFoundView.vue';

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
      }, {
        component: DocumentView,
        path: '/',
        children: [
          {
            component: DocumentView,
            path: Paths.Legal
          },
          {
            component: DocumentView,
            path: Paths.Privacy
          },
          {
            component: DocumentView,
            path: Paths.Cookies
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: MainLayout,
    children: [
      {
        path: '',
        component: NotFoundView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
