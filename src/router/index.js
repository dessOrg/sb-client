import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Startups from '@/components/Startups'
import Events from '@/components/Events'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/startups',
      name: 'Startups',
      component: Startups
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
