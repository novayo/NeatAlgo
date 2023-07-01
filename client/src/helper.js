const now = new Date();

function getEnv() {
  const course_settings = require("env/courses.json");
  return {
    course_settings: course_settings,
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

function raise(message) {
  throw new Error(`[NeatAlgo] ${message}`);
}

function LOG_DEBUG(message) {
  console.log(`[DEBUG] ${message}`);
}

export { getDateString, getFixedLengthString, raise, getEnv, LOG_DEBUG };
