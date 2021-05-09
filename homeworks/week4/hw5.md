## 請以自己的話解釋 API 是什麼
API(Application Programing Interface應用程式介面)
當要取得資源的時候，需透過介面、API來存取資料。例如提供資源的一方可透過API來定義存取者的一些限制，透過API，可以讓雙方交換資料。
假設今天天氣很熱你很想喝冰涼的手搖飲，但是外面太熱你不想出門去買，這時你想到自己常常光顧的飲料店有推出線上點餐功能，而且只要買一杯就可以免費外送，於是你透過線上點單點了一杯飲料，在家吹冷氣等飲料送來，這個線上點單的服務就是API。

飲料店→有實體店面和透過LINE或APP點單
線上點單服務→API
顧客→使用者
接單的店員→資料庫
飲料→交換的資源



## 請找出三個課程沒教的 HTTP status code 並簡單介紹
502 Bad Gateway→伺服器嘗試執行請求時，從上游伺服器接收到無效的回應。
202 Accepted→伺服器已接受請求，但尚未處理。
400 Bad Request→客戶端出錯，伺服器不能或不會處理該請求。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL:https://v61265.com
  說明	        Method	  path	              參數	                  範例
回傳所有餐廳資料	GET	    /restaurants	 _limit:限制回傳資料數量	 /restaurants?_limit=10
回傳單一餐廳資料	GET	   /restaurants/:id	       無	            /restaurants/10
新增餐廳	      POST	  /restaurants	       name: 餐廳名稱             無
刪除餐廳	     DELETE	  /restaurants/:id	       無	                 無
更改餐廳	     PATCH	  /restaurants/:id	    name: 餐廳名稱           無

回傳所有餐廳資料
const request = require('request');
request.get(
  'https://v61265.com/restaurants',
  function (error,response,body) {
  //請輸入你所需的內容
  });
  
回傳單一餐廳資料
const request = require('request');
request.get(
  'https://v61265.com/restaurants/:id',
  function (error,response,body) {
  //請輸入你所需的內容
  });

刪除餐廳
const request = require('request');
request.delete(
  'https://v61265.com/restaurants/:id',
  function (error,response,body) {
  //請輸入你所需的內容
  });

新增餐廳
const request = require('request');
request.post({
  'https://v61265.com/restaurants/',
  form: {
    name //餐廳名稱
  },
  function (error,response,body) {
  //請輸入你所需的內容
  });

更改餐廳
const request = require('request');
request.patch({
  'https://v61265.com/restaurants/:id',
  form: {
    name //餐廳名稱
  },
  function (error,response,body) {
  //請輸入你所需的內容
  });
