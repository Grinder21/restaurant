import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Restaurant from '../components/Restaurant'
import MenuRestaurant from '../components/MenuRestaurant'
import Cart from '../components/Cart'
import CartScreen from '../components/CartScreen'
import Order from '../components/Order'
import Courier from '../components/Courier'
import OrderRestaurant from '../components/OrderRestaurant'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/restaurant/:id',
    name: 'Restarant',
    component: Restaurant,
  },
  {
    path: '/restaurant/:id_restarant/menu/:id_menu/goods/',
    name: 'MenuRestaurant',
    component: MenuRestaurant,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/cart/order',
    name: 'CartScreen',
    component: CartScreen,
  },
  {
    path: '/send/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/courier',
    name: 'Courier',
    component: Courier,
  },
  {
    path: '/order/restaurant',
    name: 'OrderRestaurant',
    component: OrderRestaurant,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
