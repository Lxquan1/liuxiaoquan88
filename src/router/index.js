import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/login",
    name:"MyLogin",
    component:()=>import("../views/Mylogo.vue")
  }
];

const router = new VueRouter({
  routes,
});
// 权限管理 路由守卫
router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login"){ //login 没有权限约束
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
})

export default router;
