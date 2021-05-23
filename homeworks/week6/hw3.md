## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<hr />：分隔線，可設定對齊方式、高度、寬度、顏色...等。
<sup></sup>：上標字。
<bgsound />：音樂檔路徑。

## 請問什麼是盒模型（box modal）
所有HTML元素可以看作盒子，在CSS中，“box model”規定了元素處理元素內容（content）、內邊距（padding）、邊框（border）和外邊距（margin）的方式。
最內層是元素內容的寬高，再來是內距及邊框。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
block：可以調div、h1、p...等等，但是一個block就算設定沒有占滿畫面，仍然是預設整個block，所以不會發生其他block遞補到空白處的情形。
inline：代表為span、a，無法調元素的寬高和上下邊距，因為寬高會依據元素內容來顯示(可以設定 margin 跟 padding，但只能設定左右不能設定上下)。
inline-block：結合block和inline的優點，不會自動換行，可並排，可設定元素寬高。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
static:預設，會依照normal flow排列。往下排列。
relative:相對定位，要使用absolute的話要在父元素設定relative，不會特別影響排版，但是可以設定left 、top等來偏移元素。
fixed：會將元素固定定位在指定處，無論視窗怎麼滑動都不會更動。
absolute:會跳脫normal flow，不會佔到空間，元素會重疊，可設定left 、top等來偏移元素。
