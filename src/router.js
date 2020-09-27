import Vue from 'vue';
import Router from 'vue-router';

import Header from '@/components/Header';
import About from '@/components/About';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

Vue.use(Router);

export default new Router({
  mode: 'history', // #の削除
  routes: [
    {
      path: '/',
      component: Header
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Works',
      component: Works
    },
    {
      path: '/Skills',
      component: Skills
    },
    {
      path: '/Contact',
      component: Contact
    },
    {
      path: '/Footer',
      component: Footer
    }
  ]
});