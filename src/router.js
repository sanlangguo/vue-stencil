import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const Home = () => import('./views/Home.vue');

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
    }
]
});
