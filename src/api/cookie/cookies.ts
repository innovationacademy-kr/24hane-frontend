import VueCookies from "vue-cookies";

const tokenName = import.meta.env.VITE_TOKEN;

export const getCookie = () => VueCookies.get(tokenName);

export const removeCookie = (option?: any): void => {
  return VueCookies.remove(tokenName, { ...option });
};
