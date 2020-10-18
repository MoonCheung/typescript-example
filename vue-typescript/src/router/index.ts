import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Index = () => import('@/views/Index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Index
  },
  {
    path: '/basis/:id',
    name: 'Basis',
    props: true,
    component: Index,
    children: [
      {
        path: 'incAndDec',
        name: 'IncAndDecs',
        component: () => import('@/views/Basis/IncAndDec.vue')
      },
      {
        path: 'count',
        name: 'Counts',
        component: () => import('@/views/Basis/count.vue')
      },
      {
        path: 'prop',
        name: 'Props',
        component: () => import('@/views/Basis/props.vue')
      },
      {
        path: 'event',
        name: 'Events',
        component: () => import('@/views/Basis/event.vue')
      }
    ]
  },
  {
    path: '/shizhan/:id',
    name: 'ShiZhan',
    props: true,
    component: Index,
    children: [
      {
        path: 'todoList',
        name: 'TodoLists',
        component: () => import('@/views/ShiZhan/todoList.vue')
      }
    ]
  },
  {
    path: '/js30/:id',
    name: 'js30',
    props: true,
    component: Index,
    children: [
      {
        path: 'drumKit',
        name: 'DurmKits',
        component: () => import('@/views/Javascript30/DurmKit.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
