import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: () => import('../views/home/index.vue') },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/login', name: 'login', component: () => import('../views/login/index.vue') },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
