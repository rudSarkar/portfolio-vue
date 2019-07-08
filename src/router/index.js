import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import about from '@/components/About'
import experience from '@/components/Experience'
import portfolio from '@/components/Portfolio'
import blog from '@/components/Blog'
import contact from '@/components/Contact'
import notfound from '@/components/NotFound'
import details from '@/components/Details'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'About',
            component: about
        },
        {
            path: '/experience',
            name: 'Experience',
            component: experience
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: portfolio
        },
        {
            path: '/blog',
            name: 'Blog',
            component: blog
        },
        {
        path: '/details/:Bslug',
        name: 'Details',
        component: details
        },
        {
            path: '/contact',
            name: 'Contact',
            component: contact
        },
        {
            path: '/404',
            name: 'NotFound',
            component: notfound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})