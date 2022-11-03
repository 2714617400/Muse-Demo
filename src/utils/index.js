// 获取url参数
export function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

// 添加收藏功能
export function addFavorite(URL, tit) {
  tit = tit || '';
  URL = URL || (window.location.protocol + '//' + window.location.host)
  try {
    window.external.addFavorite(URL, tit);
  } catch (e) {
    try {
      window.sidebar.addPanel(tit, URL, '');
    } catch (e) {
      alert('加入收藏失败，请使用Ctrl+D进行添加');
    }
  }
}

//数组去重
export function duplicateRemoval(arr, key) {
  if(typeof arr !== 'object' || arr == []) return null;
  let obj = {};
  return arr.reduce((preItem, item , index ,arr) => {
    obj[item[key]] ? '' : obj[item[key]] = true && preItem.push(item);
    return preItem;
  }, []);
}

export function isEmpty(val) {
  if(typeof val === "number") return isNaN(val);
  else if(typeof val === "string") return val.trim() === "";
  else if(typeof val === "boolean") return val;
  else if(typeof val === "undefined") return Boolean(undefined);
  else if(typeof val === "function") return true;
  else if(typeof val === "object") {
    if(val instanceof Array) return Boolean(val.length)
    else if(val === null) return Boolean(val)
    else return true
  } else return true
}