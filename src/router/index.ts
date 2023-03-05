import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import AuthView from "@/views/AuthView.vue";
import HomeView from "@/views/HomeView.vue";
import CalendarView from "@/views/CalendarView.vue";
import MoreView from "@/views/MoreView.vue";
import NotificationView from "@/views/NotificationView.vue";
import NotFoundViewVue from "@/views/NotFoundView.vue";
import ApplyCardViewVue from "@/views/ApplyCardView.vue";
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
      name: "applyCard",
      component: ApplyCardViewVue,
    },
    {
      path: "/404",
      name: "notFound",
      component: NotFoundViewVue,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = getCookie();
  const isLogin = localStorage.getItem("isLogin");
  if (to.name === "login" && isLogin === "true" && !!token) {
    next({ name: "home" });
  }

  if (
    to.name !== "login" &&
    to.name !== "auth" &&
    (isLogin !== "true" || !token)
  ) {
    next({ name: "login" });
    alert("로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요.");
  } else {
    next();
  }
});

export default router;
