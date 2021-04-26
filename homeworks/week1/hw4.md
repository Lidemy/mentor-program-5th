## 跟你朋友介紹 Git

今天菜哥如果要幫笑話做版本控制，一開始的方法可能是建立一個資料夾，裡面會有很多個笑話的檔案，利用檔案的名稱來分門別類，笑話每進化成一個新的版本，可能就要在多建立一個檔案，像是諧音笑話 1、諧音笑話 1.1、諧音笑話 1.2......

而 Git 就是一個幫你做這些事情的程式，也就是版本控制，當你建立一個專案的時候，這個專案稱呼為 repository，一個倉庫的概念。

而 GitHub 這個網站，就是專門拿來放 repository 的地方，可以讓一群人來協同作業。

那今天在 windows 電腦上要使用 Git 的話，可以先去 Git 的官網下載程式，下載好之後進入 Git Bash，然後可以用下面的方式操作（假設要做一個諧音笑話的系列）

- 輸入 mkdir 笑話 - 建立一個笑話的資料夾
- 輸入 cd 笑話 - 進入笑話的資料夾
- 輸入 git init - 開始使用 git 版本控制
- 輸入 touch 諧音笑話 - 建立一個諧音笑話的檔案（假設其中一個系列是諧音笑話，如果有別的系列也可以新增別的檔案）
- 輸入 git add . - 把所有尚未加入版本控制的檔案給加入
- 然後去編輯好之後，就輸入 git commit XXX - 意思是把一個新的版本送出去，這樣就會留下紀錄，xxx 表示這一次 commit 的名稱

如果菜哥想要跟其他同好一起共同做這個笑話的專案，可以把這個 repository 給放到 GitHub 上面，這樣其他人也可以一起協同作業。

在 GitHub 上面的 repository 跟在自己電腦裡的 repository 可以視為兩個不同的 repository，它不是 Google 雲端硬碟，不會自己同步。

先到 GitHub 上面註冊帳號，創立一個新的 repository，然後依照指示到 Git Bash 上輸入下面三段的指令（我創立了 一個叫做笑話的 repository 當範例）

```
git remote add origin https://github.com/BenedictLin/笑話.git
git branch -M main
git push -u origin main
```

輸入完之後，就可以利用 push 跟 pull 功能，讓自己電腦裡的 repository 跟 GitHub 上的同步了。

**git push** - 可以把本地的 branch 推到 GitHub 上面，這樣才可以讓自己電腦跟 GitHub 上同步。

**git pull** - 可以把 GitHub 上面的 branch 給拉下來，讓 GitHub 上的 repository 跟自己電腦的 repository 同步。

branch 是分支的意思，今天如果有其他人要一起開發這個笑話專案，只要在自己的電腦裡面建立一個新的 branch，開發好之後在 push 回去，發起一個 pull request 的功能，討論之後沒甚麼問題，原本repository的管理者就可以把新的 branch 合併到原本的 branch 裡面了。

另外以下這些是常用到的指令，也可以記一下

- git status - 可以查看目前的狀態，有哪些檔案已經被加入版本控制了，那些還沒

- git log - 可以看到過去commit的紀錄，上面會有每個commit的編號

- git checkout - 可以切換到特定 commit 的版本，也可以切換到不同的 branch

- git diff - 在 commit 之前，可以看到這次和上次之間改過什麼

- git branch XXX - 可以建立一個新的分支，XXX是分支的名稱

- **git branch -v** 可以看到目前有哪些branch、branch最後一個commit的訊息和版本號

- git branch -d XXX - 可以刪除名為XXX的分支

- **git clone** 可以從GitHub上複製別人的repository。在GitHub的網站上面，可以直接用點的複製下來(↓ code的綠色按紐)，或是複製網址，在command line上面打 git clone XXXXXXX(剛剛那個網址)，就可以把這個repository給抓下來，也可以進行修改然後commit，因為是在自己電腦裡面操作，但是如果要push回去，就會被拒絕，因為需要權限。

  可以把本地的repository跟遠端的repository視為兩個不同的repository，只是可以利用push跟pull讓它們同步。

  那如果真的很想改又想保存在GitHub上，可以在GitHub的網站上，用fork按紐，把它fork到自己的帳號上。

  備註：git clone是完整複製別人的檔案，通常用在第一次，未來要更新的時候，通常都是用git pull

- **git commit --amend** 可以修改最近一個commit的commit message

- **git checkout – 檔案名稱** 如果你更動了一個檔案，還沒commit，但是你不想要改過的內容了，可以用這個指令回到改變之前。

  如果是打 git checkout – . 這樣就是把所有還沒commit的檔案都回到改過之前的狀態。

  備註：checkout 和–之間有空格，–和檔案名稱之間也要有空格

- **git merge** 合併分支**進來**溜，git merge XXX(branch-name)

  假設現在有兩個branch，master和new-feature

  如果我現在在master這條branch裡面，我打git merge new-feature，那new-feature就會合併到master裡面，改變的是master，而不是new-feature，不然我合併完還要git checkout到new-feature去看，這樣不合理

- **conflict** 這個不是可以輸入的指令，而是當git在合併兩個branch，發現有兩個檔案很相似，但是有地方不同的時候，會跳出這個提示，那只要進入檔案去看，會顯示出衝突的地方(你在現在的branch的檔案是長這樣，被merge進來的檔案是長這樣)，那只要手動去更改完之後在commit即可解決

- **git hook** 發生某事情的時候通知我，像是有人commit的時候，或是有人push的時候之類，可以想成鉤子勾在一個東西上面，當它有變動的時候鉤子就會動，像釣魚一樣。

  git init之後，會出現一個.git的資料夾，裡面就有一個叫做hooks的資料夾，下面很多sample檔，通常是用來設置一些規範，如果違反規範就不讓你commit或是push之類，規範可能像是不能在程式碼裡面改某些東西，或是輸入甚麼東西之類，這樣的好處是讓自己和協作者不用每次都自己手動去檢查。

- **git reset HEAD^** 可以回到commit之前，後面如果加上–hard，表示你要回到這個檔案更動之前，所以你改的東西全都會不見，如果是加上–soft，那就只是回到commit之前，改動的部分還是在，如果都不加東西在後面其實就是預設–soft，這其實也比較常用，因為通常只是小地方沒改到而已，不太需要整個都取消