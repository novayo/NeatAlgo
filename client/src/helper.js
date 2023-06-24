const now = new Date();

function getDateString(ts) {
  const date = new Date(ts);
  console.log(now.toString());
  console.log(date.toString());
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

export { getDateString };
