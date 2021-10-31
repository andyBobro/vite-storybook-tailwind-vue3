import { createRouter, createWebHistory } from 'vue-router'
import Home from 'ui/views/Home.vue'
import Counter from 'ui/views/Counter.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router