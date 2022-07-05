## 教你朋友 CLI

CLI 的全名是 Command Line Interface，就是命令列介面，而平常電腦在使用所看到的視窗按鈕這些是 GIU，也就是Graphical User Interface，圖形使用者介面

CLI是使用指令跟電腦溝通的方式，利用指令讓電腦知道現在該做甚麼

如果是使用windows電腦的話，可以先去下載Git，裡面有內建一個Git Bash的功能，打開之後就可以用CLI的指令來操作電腦囉

一般比較常見的指令如下

- Print Working Directory - pwd 印出工作目錄，意思是我現在在哪裡
- List - ls 印出現在資料夾底下的檔案
- ls -al ls 後面留空格放上減號，後面可以加上參數，就可以秀出不同的格式，例如 -al 就可以秀出檔案的權限、擁有者、大小、最後修改日期、隱藏檔案
- -a 是印出名字是dot開始的檔案，通常是隱藏的檔案
- -l 是印出比較長的格式(大寫的L有不同的意思) 所以-al其實是兩個合著一起用
- Change Directory - cd 切換資料夾，可以跳到不同的資料夾裡面
- cd .. 跳到上一層
- touch 碰一下檔案，可以更改日期，如果碰的是不存在的檔案，那就會建立一個檔案
- mkdir 建立資料夾

所以如果h0w哥想要建立一個wifi的資料夾，裡面要有一個afu.js的檔案，那只要像下面這樣操作就可以惹

- 先打開Git Bash
- 輸入 cd desktop - 進入到桌面
- 輸入 rmkdir wifi - 建立一個wifi的資料夾
- 輸入 cd wifi - 進入wifi的資料夾
- 輸入 touch afu.js - 建立一個afu.js的檔案

以上，就可以達到h0w哥的目的囉！