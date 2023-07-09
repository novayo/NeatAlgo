import CryptoJS from "crypto-js";
import Cookies from "universal-cookie";

const now = new Date();
const cookies = new Cookies();
const cookie_expire_hours = process.env.REACT_APP_COOKIE_EXPIRE_HOURS || 1;
const cookie_settings = {
  path: "/",
  secure: process.env.REACT_APP_DEBUG === "0",
  sameSite: "strict",
};

//========== Log ==========//
function raise(message) {
  throw new Error(`[NeatAlgo] ${message}`);
}

function LOG_DEBUG(message) {
  console.log(`[DEBUG] ${message}`);
}

function LOG_ERROR(message) {
  console.log(`[ERROR] ${message}`);
}

//========== Cookie =========//
function setCookie(name, data) {
  const container = { neat: data };
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(container),
    process.env.REACT_APP_SECRET
  ).toString();
  cookies.set(name, encrypted, {
    ...cookie_settings,
    expires: new Date(Date.now() + cookie_expire_hours * 60 * 60 * 1000),
  });
}

function getCookie(name) {
  const encrypted = cookies.get(name);

  if (!encrypted) {
    return undefined;
  }

  const decrypted = CryptoJS.AES.decrypt(encrypted, process.env.REACT_APP_SECRET).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(decrypted)["neat"];
}

//========== Common ==========//
function ENV() {
  const course_settings = require("env/courses.json");
  const route_settings = require("env/routes.json");
  return {
    course_settings: course_settings,
    route_settings: route_settings,
  };
}

function getDateString(ts) {
  const date = new Date(ts);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  let ret = "";
  if (diff < 60) {
    ret = `${diff}秒鐘前`;
  } else if (diff < 3600) {
    ret = `${Math.floor(diff / 60)}分鐘前`;
  } else if (diff < 86400) {
    ret = `${Math.floor(diff / 60 / 60)}小時前`;
  } else if (diff < 604800) {
    ret = `${Math.floor(diff / 60 / 60 / 24)}天前`;
  } else if (diff < 2419200) {
    ret = `${Math.floor(diff / 60 / 60 / 24 / 7)}周前`;
  } else if (diff < 29030400) {
    ret = `${Math.floor(diff / 60 / 60 / 24 / 7 / 4)}個月前`;
  } else {
    ret = `${Math.floor(diff / 60 / 60 / 24 / 7 / 4 / 12)}年前`;
  }

  return ret;
}

function getFixedLengthString(total_len, string) {
  if (string.length <= total_len) {
    return string;
  } else {
    return string.substring(0, total_len - 3) + "...";
  }
}

//========== Apis ==========//
async function GET(route, headers = {}) {
  let ret = {};
  const requestOptions = {
    method: "GET",
    headers: headers,
  };
  await fetch(route, requestOptions)
    .then((response) => {
      if (!response.ok) {
        LOG_ERROR(`[GET] Failed to get ok. ret: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => (ret = data))
    .catch((error) => {
      LOG_ERROR(`[GET] route(${route}) msg(${error.message})`);
    });
  if (ret.data) {
    return ret.data;
  }
  return {};
}

function POST(route, dict_data) {
  const json_data = { data: dict_data };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json_data),
  };
  fetch(route, requestOptions)
    .then(async (response) => {
      const isJson = response.headers.get("content-type")?.includes("application/json");
      // res_pkg: 可以直接取值 e.g. res_pkg.success
      const res_pkg = isJson && (await response.json());

      if (!response.ok) {
        // get error message from body or default to response status
        const error = (res_pkg && res_pkg.message) || response.status;
        LOG_ERROR(`[POST] Failed to get ok. ret: ${error}`);
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      LOG_ERROR(
        `[POST] route(${route}) json_data(${JSON.stringify(json_data)}) msg(${error.message})`
      );
    });
}

export {
  getDateString,
  getFixedLengthString,
  raise,
  ENV,
  LOG_DEBUG,
  GET,
  LOG_ERROR,
  POST,
  setCookie,
  getCookie,
};
