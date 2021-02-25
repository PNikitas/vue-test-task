import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home.vue';

Vue.use(Router);

const lazyLoad = component => () => import(`../pages/${component}.vue`);

export default new Router({
   mode: 'history',
   routes: [
       {
           path: '/',
           name: 'home',
           component: Home,
       },
       {
           path: '/posts',
           name: 'posts',
           component: lazyLoad('PostsList'),
       },
       {
           path: '/post/:id',
           name: 'post',
           props: true,
           component: lazyLoad('PostDetail'),
       },
       {
           path: '/images',
           name: 'images',
           component: lazyLoad('ImagesList'),
       },
       {
           path: '/image/:id',
           name: 'image',
           props: true,
           component: lazyLoad('ImageDetail'),
       },
       {
           path: '/settings',
           name: 'settings',
           component: lazyLoad('Settings'),
       },
   ],
});
