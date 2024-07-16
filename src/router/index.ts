import { getCookie, removeCookie, setCookie } from "@/api/cookie/cookies";
import { clearStorage } from "@/utils/localStorage";
import ApplyCardViewVue from "@/views/ApplyCardView.vue";
import AuthView from "@/views/AuthView.vue";
import CalendarView from "@/views/CalendarView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import MoreView from "@/views/MoreView.vue";
import NotFoundViewVue from "@/views/NotFoundView.vue";
import NotificationView from "@/views/NotificationView.vue";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";

const accessTokenName = import.meta.env.VITE_ACCESS_TOKEN;
const refreshTokenName = import.meta.env.VITE_REFRESH_TOKEN;

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

router.beforeEach(async (to, from, next) => {
  const token = getCookie(accessTokenName);

  // 이미 로그인된 상태에서 로그인 페이지로 이동 시 홈으로 리다이렉트
  const isNavigatingToLogin = to.name === "login";
  if (isNavigatingToLogin && token) {
    return next({ name: "home" });
  }

  // 로그인 및 인증 페이지가 아니고, 토큰이 없는 경우 로그인 페이지로 이동
  const isProtectedRoute = to.name !== "login" && to.name !== "auth";
  if (isProtectedRoute && !token) {
    try {
      // accessToken이 없는 경우 refreshToken으로 accessToken 갱신
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/user/login/refresh`,
        {},
        { withCredentials: true }
      );
      setCookie(accessTokenName, response.data.accessToken);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
      return next();
    } catch (error) {
      removeCookie(accessTokenName);
      removeCookie(refreshTokenName);
      clearStorage();
      alert("로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요.");
      return next({ name: "login" });
    }
  }

  // 다른 경우는 정상적으로 라우트 진행
  next();
});

export default router;
