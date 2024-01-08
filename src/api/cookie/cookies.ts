const tokenName = import.meta.env.VITE_TOKEN;

export const getCookie = () => {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${tokenName}=`))
    ?.split("=")[1];
};

export const removeCookie = (): void => {
  const hostname = window.location.hostname;
  const domain =
    hostname === "localhost" ? "" : ".24hoursarenotenough.42seoul.kr";

  document.cookie = `${tokenName}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
