import Vue from 'vue'
import Router from 'vue-router'
import rootMessage from 'components/rootMessage/rootMessage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
     {
       path:"/",
       redirect:'/rootMessage'
     },
     {
       path:'/rootMessage',
       component:rootMessage
     }
  ]
});

