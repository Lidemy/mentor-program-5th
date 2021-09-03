## 什麼是 DOM？
文件物件模型，瀏覽器提供了一個橋樑，讓 JavaScript 去改變畫面上的東西，簡單理解就是將Document 轉換成 Object。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
DOM 的事件在傳播時，會先從根節點開始往下傳遞到target，這邊你如果加上事件的話，就會處於CAPTURING_PHASE，捕獲階段。
target就是你所點擊的那個目標，這時候在target身上所加的eventListenr會是AT_TARGET這一個 Phase。
最後，事件再往上從子節點一路逆向傳回去根節點，這時候就叫做BUBBLING_PHASE，也是大家比較熟知的冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
事件代理是利用「事件傳遞的冒泡原理」，將子元素的監聽事件綁在父元素上。
例如：當我們在最外層添加點擊事件時，裡面的 ul、 li 、a 的點擊事件都會冒泡到最外層的節點上，委託它代理執行事件。
其中好處是：
若有很多子元素，就無需一個一個綁定監聽事件。
動態新增來的子元素，也會冒泡到上層，因此不怕沒監聽到它。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
1.取消事件傳遞stopPropagation：
先以捕獲與冒泡的機制來說明：
 addEvent('.outer')
 addEvent('.inner')
 addEvent('.btn')
 
 function addEvent(className) {
     document.querySelector(className)
        .addEventListener('click', function(e){
            console.log(className, '冒泡', e.eventPhase)
        }, false) // false : 放在冒泡階段上 (預設)
        
    document.querySelector(className)
        .addEventListener('click', function(e){
            console.log(className, '捕獲', e.eventPhase)
        }, true) // true : 放在捕獲階段上
 }
以上例子為「先冒泡再捕獲」，如果要阻止「冒泡」：
 addEvent('.outer')
 addEvent('.inner')
 
 function addEvent(className) {
     document.querySelector(className)
        .addEventListener('click', function(e){
            console.log(className, '冒泡', e.eventPhase)
        }) 
        
    document.querySelector(‘.btn’)
        .addEventListener('click', function(e) {
            e.stopPropagation()  //點擊btn，阻止事件傳遞
            console.log(‘.btn 冒泡’)
        })
如果是要在「捕獲」階段就阻止事件傳遞：
addEvent('.outer')
addEvent('.inner')
 
window.addEventListener(‘click’, function(e) {
    e.stopPropagation()
}, true)   //點選outer、inner、btn都不會傳遞事件

 function addEvent(className) {
     document.querySelector(className)
        .addEventListener('click', function(e){
            console.log(className, '冒泡', e.eventPhase)
        }) 
        
    document.querySelector(‘.btn’)
        .addEventListener('click', function(e) {
            e.stopPropagation()  //點擊btn，阻止事件傳遞
            console.log(‘.btn 冒泡’)
        })
2.阻止預設行為：preventDefault
範例：阻止表單送出
 <script>
        const element = document.querySelector('.input[name=username]')
        element.addEventListener('keypress', function(e) {
            if(e.key  === ‘e’) {  //不能輸入’e’字母
                  e.preventDefault() 
            }
    }) 
另一種常見範例為防止點選連結，是為取消瀏覽器的預設行為，與取消事件傳遞stopPropagation沒有關係。
