const tokenName = import.meta.env.VITE_TOKEN;

export const getCookie = () => {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .filter((cookie) => tokenName === cookie.split("=")[0])
    .join("")
    .split("=")[1];
};

export const removeCookie = (): void => {
  document.cookie = `${tokenName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
