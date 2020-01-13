import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Movies from 'pages/movies/Movies'
import MoviesInTheater from 'pages/movies/MoviesInTheater'
import MoviesComing from 'pages/movies/MoviesComing'

import Theaters from 'pages/theaters/Theaters'
import Profile from 'pages/profile/Profile'

import CityPicker from 'pages/citypicker/CityPicker'

import Home from 'pages/Home'

import Login from '@/views/login'
import Register from '@/views/register'
import My from 'pages/profile/My'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/cities',
    component: CityPicker
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/movies/intheater',
    children: [
      {
        name: 'movies',
        path: 'movies',
        component: Movies,
        redirect: '/home/movies/intheater',
        children: [
          {
            name: 'intheater',
            path: 'intheater',
            component: MoviesInTheater,
            meta: 1
          },
          {
            name: 'coming',
            path: 'coming',
            component: MoviesComing,
            meta: 2
          }
        ]
      },
      {
        name: 'theaters',
        path: 'theaters',
        component: Theaters
      },
      {
        name: 'profile',
        path: 'profile',
        component: Profile
      },
      {
        name: 'login',
        path: '/login',
        component:Login
      },
      {
        name: 'register',
        path: '/register',
        component:Register
      },
      {
        name: 'my',
        path: '/My',
        component:My
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router