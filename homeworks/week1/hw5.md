# hw5 簡答題
1. 請解釋後端與前端的差異。

如圖，假設我們今天在 Google 上搜尋關鍵字，就等於送出了一個 request 給電腦的雲端伺服器（server），伺服器會接著到資料庫中，挖掘我們要的結果，再由雲端伺服器回傳搜尋結果，顯示在我們的螢幕上。圖片上 server 左邊的區塊是前端所負責，右邊則是後端的範疇，前端負責製作螢幕上可看到的介面、功能、按鈕等等；後端則負責爬蟲、擷取資料等，大概可以這樣簡易地說明前後端的差異，不過其中還是有很多細節。

![前後端差異](https://i.imgur.com/KUJsnJ1.png)

2. 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

- 去 Google 首頁

透過電腦螢幕，在網址欄上輸入 Google 的網址並按 enter，這時你輸入的網址會傳送到雲端 DNS 伺服器，伺服器會到資料庫中搜尋 Google 的網址，並回傳 Google網址 的 IP 位址，之後才會在你的螢幕上，顯示 Google 的首頁畫面。

- 在搜尋框打上：JavaScript 並且按下 Enter

在 Google 的搜尋框（由前端工程師所設計的介面）中，用鍵盤打「JavaScript」，並按下 Enter 後，會將這個 request 送往雲端伺服器，一樣會到後端的資料庫，將搜尋到有關「JavaScript」的結果回傳到前端的螢幕上，顯示出你想搜尋的資料結果。

圖示：

![圖示](https://i.imgur.com/F79NqIT.png)

3. 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。

- clear：清除畫面，覺得畫面太雜亂時可使用。
- history：檢視 terminal 的歷史記錄，可使用 `history | grep rat`，搜尋含有「rat」的記錄。
- ren：重新命名。例如：`ren old.txt new.txt`
