
## 什麼是 DOM？
瀏覽器讓 js 可以透過節點修改 html 的橋樑


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
從 window > document > html > body > div往下傳遞直到監聽事件的目標，此為捕獲

從目標開始回傳至 window ，為冒泡


## 什麼是 event delegation，為什麼我們需要它？
由於事件冒泡機制，可以讓父節點代理監聽所有子節點

需要在瀏覽器 render 後新增監聽節點、大量需要監聽節點時，可直接監聽父節點，在使用 classList.contains 篩選 e.target 是否為所需目標


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()取消預設行為，如要取消按enter時送出資料，可使用

event.stopPropagation()會將該節點執行完畢後，不傳遞到下個節點