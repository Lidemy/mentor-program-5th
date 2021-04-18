## 請解釋後端與前端的差異。
當進入一個網頁，看得到的部分就是網頁前端；而看不到的部分就是網頁後端。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
以下為實際運作流程:
1.瀏覽器問DNS伺服器:google.com怎麼走
2.DNS回覆:去10.1.1.1
3.瀏覽器送request去10.1.1.1
4.位在10.1.1.1的server收到request
5.server去問資料庫，查詢關鍵字Javascript
6.資料庫找到了，回傳資料給server
7.server回傳response給瀏覽器
8.瀏覽器解析回傳的資訊並顯示出來


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1.date:顯示日期
2.time:顯示時間
3.find:尋找檔案
