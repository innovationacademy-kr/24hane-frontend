import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import AuthView from "@/views/AuthView.vue";
import HomeView from "@/views/HomeView.vue";
import CalendarView from "@/views/CalendarView.vue";
import MoreView from "@/views/MoreView.vue";
import NotificationView from "@/views/NotificationView.vue";
import { getCookie } from "@/api/cookie/cookies";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: CalendarView,
    },
    {
      path: "/more",
      name: "more",
      component: MoreView,
    },
    {
      path: "/notification",
      name: "notification",
      component: NotificationView,
    },
    {
      path: "/apply-card",
      name: "apply-card",
      component: () => import("../views/ApplyCardView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = getCookie();
  const isLogin = localStorage.getItem("isLogin");
  if (
    to.name !== "login" &&
    to.name !== "auth" &&
    isLogin !== "true" &&
    !!token
  ) {
    next({ name: "login" });
    alert("router: 로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요.");
  } else {
    next();
  }
});

export default router;
