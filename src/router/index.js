import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/components/Details'
import Cards from '@/components/Cards'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Cards',
        component: Cards
    },
    {
        path: '/Details',
        name: 'Details',
        component: Details
    }]
})