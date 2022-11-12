export const updateCookieState = (key: string, data: any) => {
  setCookie(key, JSON.stringify(data), 6);
};

export const isValidState = (appID: string) => {
  return !(
    getCookie(appID) === "undefined" ||
    getCookie(appID) == undefined ||
    getCookie(appID) === null ||
    getCookie(appID) === "null"
  )
    ? true
    : false;
};

export const setCookie = (
  name: string,
  val: string,
  days?: number,
  path?: string,
  domain?: string,
  secure?: string
) => {
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(name);
    const cookieVal = encodeURIComponent(val);
    let cookieText = cookieName + "=" + cookieVal;

    if (typeof days === "number") {
      const data = new Date();
      data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
      cookieText += "; expires=" + data.toUTCString();
    }

    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
  }
};

export const getCookie = (name: string) => {
  if (document.cookie !== "") {
    const cookies = document.cookie.split(/; */);

    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split("=")[0];
      const cookieVal = cookies[i].split("=")[1];
      if (cookieName === decodeURIComponent(name)) {
        return decodeURIComponent(cookieVal);
      }
    }
  }
};
