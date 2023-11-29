// 创建 XMLHttpRequest 对象
function createHttpRequest() {/*來確定當前瀏覽器是否支援標準的 XMLHttpRequest 物件*/
   // return  new XMLHttpRequest();
     if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // 适用于早期版本的 Internet Explorer
      return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
      console.error("您的浏览器不支持XMLHttpRequest.");
      return null;
    } 
  }
  
  // 发送 HTTP POST 请求
  function sendHttpPost(url, data, callBack) {
    var xhr = createHttpRequest();
    xhr.open("POST", url, false);/*開啟url*/ 
    xhr.setRequestHeader("Content-Type", "application/json");/*看看是否符合格式*/
    xhr.onreadystatechange = function () {
    
      if (xhr.readyState === 4  && xhr.status === 201 ) {/*看代碼是否符合上傳成功的代碼*/
        callBack(xhr.responseText);
        //callBack(Json.parse(xhr.responseText))
      }
    };
    xhr.send(data);/*丟資料進去*/
  }
  
  // 发送 HTTP PUT 请求 (通常用于更新资源)
  function sendHttpPut(url, data, callBack) {
    var xhr = createHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callBack(xhr.responseText);
      }
    };
    xhr.send(data);
  }

  
  
  // 发送 HTTP DELETE 请求
  function sendHttpDelete(url, callBack) {
    var xhr = createHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callBack(xhr.responseText);
      }
    };
    xhr.send();
  }
  
  // 发送 HTTP GET 请求
  function sendHttpGet(url, callBack) {
    var xhr =  createHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callBack(xhr.responseText);
      }
    };
    xhr.send();
  }
  var ret;
//取得網路上的資源
function HTTPGetData(urlStr) {
    var HttpObj = new XMLHttpRequest();   
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            //   alert(ret);
                 callBack(ret);
         //   alert("data retrieved");
        }
    }
	HttpObj.open("GET", urlStr, true);
   
}

  