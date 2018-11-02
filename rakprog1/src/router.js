import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from './views/Users.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/users', name:'Users', component:Users}
    ]
})