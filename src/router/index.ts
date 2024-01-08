import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import AuthView from "@/views/AuthView.vue";
import HomeView from "@/views/HomeView.vue";
import CalendarView from "@/views/CalendarView.vue";
import MoreView from "@/views/MoreView.vue";
import NotificationView from "@/views/NotificationView.vue";
import NotFoundViewVue from "@/views/NotFoundView.vue";
import ApplyCardViewVue from "@/views/ApplyCardView.vue";
import { getCookie, removeCookie } from "@/api/cookie/cookies";
import { clearStorage } from "@/utils/localStorage";

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

  // 이미 로그인된 상태에서 로그인 페이지로 이동 시 홈으로 리다이렉트
  const isNavigatingToLogin = to.name === "login";
  if (isNavigatingToLogin && token) {
    return next({ name: "home" });
  }

  // 로그인 및 인증 페이지가 아니고, 토큰이 없는 경우 로그인 페이지로 이동
  const isProtectedRoute = to.name !== "login" && to.name !== "auth";
  if (isProtectedRoute && !token) {
    removeCookie();
    clearStorage();
    next({ name: "login" });
    alert("로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요.");
    return;
  }

  // 다른 경우는 정상적으로 라우트 진행
  next();
});

export default router;
