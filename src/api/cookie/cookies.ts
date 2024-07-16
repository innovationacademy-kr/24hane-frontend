export const getCookie = (name: string) => {
  const cookieString = document.cookie;

  if (!cookieString) {
    return null;
  }

  const cookies = cookieString.split(";").map((cookie) => cookie.trim());

  for (const cookie of cookies) {
    if (cookie.startsWith(`${name}=`)) {
      return cookie.split("=")[1];
    }
  }

  return null;
};

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/; domain=.24hoursarenotenough.42seoul.kr;`;
};

export const removeCookie = (name: string): void => {
  const hostname = window.location.hostname;
  const domain =
    hostname === "localhost" ? "" : ".24hoursarenotenough.42seoul.kr";

  document.cookie = `${name}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
