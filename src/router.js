import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const Home = () => import('./views/Home.vue');
const Page1 = () => import('./views/page1/index.vue');
const Page2 = () => import('./views/page2/index.vue');

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/',
      meta: { title: 'HOME' }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '首页' }
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
      meta: { title: 'page1' }
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2,
      meta: { title: 'page2' }
    },
]
});
