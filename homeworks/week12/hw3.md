## 請簡單解釋什麼是 Single Page Application

簡單來說就是從頭到尾都用 AJAX 來做，變成一個**完全不需要換頁**的網站。

像我最近發現除了 Gmail 以外，youtube 也是一個典型的 SPA，來看張圖就明白了：


![youtube](youtube.gif)

在這張圖裡面我做了幾件事：

1. 搜尋影片
2. 點開影片來看
3. 再去點開其他的影片

你仔細看就會發現不管我做了什麼，都**沒有重新整理**。對了，你可能會想說上面那個紅色的進度條不是嗎？對，那不是。那只是用來提升使用體驗而加上去的東西（我以前也以為那是重新整理，果然大公司的 UI/UX 就是強大）

總而言之，這個就叫做 SPA。當我搜尋影片時，其實是前端在背後用 AJAX 去跟後端拿資料，再用 JS 渲染到畫面上的。也因為這種網頁用起來就像是個 App，所以才會有 SPA 的 A（Application） 這個詞。

## SPA 的優缺點為何

最大的缺點我想還是 SEO 吧，如果不是 SPA 的話，HTML 會長這樣：

```html
<div class="board__body">
  <div class="card">
    <div class="card__avatar"></div>
    <div class="card__content">
      <div class="card__info">
        <div class="card__author">暱稱</div>
        <div class="card__time">2022-02-27-15-30</div>
      </div>
      <div class="card__username">@PeaNu</div>
      <div class="card__text">嗨～我愛花生醬</div>
    </div>
  </div>
  <!-- ... 很多個 -->
</div>

```

東西都是在 Server 端**先渲染好再傳回來的**，俗稱 SSR（Server Side Render）。

但如果是 SPA 的 HTML 會長這樣：

```html
<div class="board__body"></div>
```

SPA 的內容是前端先用 AJAX 拿資料，在**用 JavaScript 渲染出來的**，俗稱 CSR（Cliend Side Render）。

雖然最後呈現在眼前的畫面看起來是一樣的，但對於「爬蟲」來說，SSR 它可以爬到很多資訊，但 CSR 它什麼都爬不到，只有一行意義不明的 HTML，這個對於 SEO 就是很大的影響。

儘管現在時代進步，Google 的爬蟲已經有爬 CSR 的能力，但那也僅限 Google。我們不知道它實際上到底會爬到什麼資訊，因此 SSR 還是會比 CSR 穩定一點。

至於優點的話，第一點是「使用者體驗」比較好，因為不用一直重新整理，會覺得用起來比較流暢。第二點的話，我想應該是大家常說的「前後端分離」。在 SPA 的世界裡前後端是分開的，前端乖乖處理畫面跟使用者互動，後端乖乖吐資料，兩者之間的依賴性不會那麼重。

意思是說，假設有天後端突然爆掉了，前端頁面還是可以跑，只是拿不到資料而已。



## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？

就跟剛剛說的一樣，最大的差別在於「內容」。

一個是 SSR（在伺服器渲染好在傳回來），一個是 CSR（在 Client 端用 JS 渲染畫面）。