import Vue from 'vue'
import Router from 'vue-router'
import login from "../views/login"
import home from "../views/Home"
import BarChart from "../components/BarChart"
import HeatMap from "../components/HeatMap"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import Map from "../components/Map"
import MultiPicture from "../components/MultiPicture"
import menu from "../views/menu"
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/menu',
      name: 'menu',
      component: menu
    }, {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: home,
      children: [{
          path: '/BarChart',
          name: 'BarChart',
          component: BarChart
        },
        {
          path: '/LineChart',
          name: 'LineChart',
          component: LineChart
        },
        {
          path: '/PieChart',
          name: 'PieChart',
          component: PieChart
        },
        {
          path: '/HeatMap',
          name: 'HeatMap',
          component: HeatMap
        },
        {
          path: '/Map',
          name: 'Map',
          component: Map
        },
        {
          path: '/MultiPicture',
          name: 'MultiPicture',
          component: MultiPicture
        }
      ]
    },
    // {
    //     path: '/*',
    //     redirect: '/login'
    // }
  ]
})
