import Vue from 'vue'
import Router from 'vue-router'
import jdHomePages from "../pages/jdHomePages"
import jdShopCar from "../pages/jdshopcar"
import jdpartiulars from  "../pages/jdPartiulars"
import JdGilt from "../pages/JdGilt"
import JDhome from "../pages/JdHome"
import  jsClassifyAll from "../pages/jdClassifyAll"
import clothesAll from "../pages/clothesAll"
import fashionAll from "../pages/fashionAll"
import Home from "../pages/Home"
import  Mine from "../pages/Mine"
import Phone from "../pages/Phone"
import JdTrip from "../pages/JdTrip"
import  Mines from "../pages/Mines"
import  MineCho from "../pages/MineCho"
import  MineMat from  "../pages/MineMat"
import  goHome from "../pages/goHome"

  Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jdHomePages',
      component: jdHomePages
    },
    {
      path: '/car',
      name: 'jdShopCar',
      component: jdShopCar
    },
    {
      path: '/partiular',
      name: 'jdpartiulars',
      component: jdpartiulars
    },
    {
      path: '/JdGilt',
      name: 'JdGilt',
      component: JdGilt
    },
    {
      path: '/JDhome',
      name: 'JDhome',
      component: JDhome
    },
    {
      path: '/jsClassifyAll',
      name: 'jsClassifyAll',
      component: jsClassifyAll
    },
    {
      path: '/clothesAll',
      name: 'clothesAll',
      component: clothesAll
    },
    {
      path: '/fashionAll',
      name: 'fashionAll',
      component: fashionAll
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/JdTrip',
      name: 'JdTrip',
      component: JdTrip
    },
    {
      path: '/Phone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/Mines',
      name: 'Mines',
      component: Mines
    },
    {
      path: '/MineMat',
      name: 'MineMat',
      component: MineMat
    },
    {
      path: '/MineCho',
      name: 'MineCho',
      component: MineCho
    },
    {
      path: '/goHome',
      name: 'goHome',
      component: goHome
    },
  ]
})
