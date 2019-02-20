import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '@/views/MainMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-menu',
      component: MainMenu
    },
    {
      path: '/story',
      name: 'story',
      component: () => import(/* webpackChunkName: "story" */ '@/views/StoryMode')
    },
    {
      path: '/composer',
      name: 'composer',
      component: () => import(/* webpackChunkName: "composer" */ '@/views/ComposerMode')
    }
  ]
})
