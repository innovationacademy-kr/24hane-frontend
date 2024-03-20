import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// env Product에만 추적 ID를 저장하여 운영서버만 활성화
if (import.meta.env.VITE_GA_ID) {
  app.use(
    VueGtag,
    {
      config: {
        id: `${import.meta.env.VITE_GA_ID}`,
        params: {
          send_page_view: false, // config 코드를 로드시에 해당 페이지를 전송 유무
        },
      },
    },
    router
  );
}

app.mount("#app");
