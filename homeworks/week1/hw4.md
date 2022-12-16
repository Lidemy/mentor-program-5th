# hw4 跟你朋友介紹 Git
>菜哥：「因為我的笑話太多了，所以我目前都用文字檔記錄在電腦裡，可是變得越來越多之後很難紀錄，而且我的笑話是會演進的。會有版本一、版本二甚至到版本十，這樣我就要建立好多個不同的檔案，弄得我頭很痛，聽說你們工程師都會用一種程式叫做 Git 來做版本控制，可以教我一下嗎？」

>因此，你必須教他 Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講，菜哥能不能順利成為電視笑話冠軍，就靠你了！
---
- 什麼是Git？

Git 是能用來協助我們進行**版本控制**的工具。像是當你在構思笑話時，可能會有很多版本的草稿，這時我們通常會把每個草稿獨立一個檔案，並個別命名（例如用當天的日期、版本 1234...等方式來記錄）

但當版本一多，就會顯得很雜，可能會忘記不同版本間的差別，或是發生臨時想看過去的某個版本卻找不到的狀況，而 Git 就是為了解決這類困擾而生的工具。

- 如何用 Git 來對笑話做版本控制？
1. 安裝 Git。
2. `cd` 到你想進行版本控制的資料夾位置。
3. `git init` 初始化，代表**開始可以在該資料夾中進行版本控制**，也會同時在該資料夾裡，建立一個名為 `.git` 的資料夾，所有的版本記錄都會儲存於此。
4. `touch .gitignore` 建立 「.gitignore」檔案，而後可把固定不 git 的檔案加進去，例如假設笑話搭配的圖片是固定不變的，就可以把該圖片檔忽略掉，因為不需要透過 Git 來管理它。 
5. `vim .gitignore` 用vim開啟 .gitignore 檔案並編輯，輸入你欲忽略的檔名後， `:wq` 儲存並退出 vim。
6. 當你修改好某個笑話版本和其他檔案後，`git add .` 將所有檔案都加入到版本控制中。因為 `git init` 只是初始化資料夾，但要控制版本，還是要把欲控制的檔案加入才可。
7. `git commit -am "檔名"` 即可儲存當前笑話版本。
8.  若繼續修改笑話內容後，要儲存新的版本，一樣需要使用 `git add .` 後，再對新的版本進行 `git commit`。每個 commit 都有專屬的代碼。
- 想回去看之前的版本？

使用 `git checkout 該 commit 的代碼` 

- 想比較兩個版本的差別

使用 `git diff [版本 A 代碼前五碼] [版本 B 代碼前五碼]` 即可看見兩個版本間的變動。

- 想把版本記錄放在自己的 Github 上

使用 `git push [Github 上 remote 的命名]　[當下 branch 的名稱]` 指令，將電腦中版本記錄 push 到遠端倉庫。

- 想把 Github 上的笑話版本們放到本地電腦中

使用 `git pull [Github 上 remote 的命名]　[Github 上 branch 的名稱]` 即可。

這只是最基本的 Git 語法，其他還有很多，我放上我的學習筆記，雖然不符合 markdown 格式，但你可以自行研究！

:::info
【GIT】
git init: 初始化 開始可以git，也會自動建立.git資料夾在需要版本控制的資料夾中
rm -r .git:資料夾整個消除，不使用git
rm -rf .git:資料夾整個強制消除，不使用git
git add 檔案:把資料夾中的檔案加入git才能控制(每改一次檔案，也要重新把他git add)
git add . :將資料夾中所有檔案都加入版本控制
git rm - -cached 檔案名:將檔案移除git
git status:查看版本控制狀態
狀態:
untracked:不被追縱，還沒git add
staged:已git add
git commit: 新建commit 會進入vim，直接在上面輸入文字
git commit -m "版本名" :新建commit
git commit -am "版本名":把尚未git add的更動後舊檔案都加入版本控制& 新建及命名commit
git log:查看目前為止commit的各個版本。按q可以離開，再回去打code
git log --oneline 較精簡的版本紀錄
git checkout 版本完整名稱:回到過去某版本
git checkout master:回到版本最新狀態
touch .gitignore 建立gitignore檔，可把固定不git的檔案加進去
vim .gitignore 用vim開啟並編輯，將欲ignore的檔名輸入後退出即可
git diff: 看這次commit和上次比差在哪
git diff 版本A的亂碼前五碼 版本B的亂碼前五碼:比較版本A和版本B的差異
git branch -v:看目前有哪些branch
git branch branch名稱:建立新的branch
git branch -d branch名稱:刪除某個branch
git merge branch名稱:把某branch合併進來
※斷頭了怎麼辦？
＊只要不是回到某個branch，都會斷頭，就算是checkout到A branch最後一個commit還是會

【把電腦git放上github】
git remote add gittest(命名) https://github.com/cy9102967/20221206_gittest.git
git remote -v:看現在在github的哪個repository
git branch -M main:把電腦中master的branch改名成main→響應黑人平權，不能用master等字眼
git push -u gittest(命名) main:把當前的branch上傳到github的main branch
git push gittest(命名) main: 之後若有再改就再上傳到github 
git push gittest(命名) 其他分支名:把其他分支上傳到github(這時需要checkout切到該分支)

【把github上的更動pull到電腦】
git pull gittest(命名) main(或是其他分枝名)

【把別人的repository下載下來】
 download ZIP即可，或是複製網址到gitbash上，打git clone 網址，就會複製到電腦上了。
你可以在電腦上更改ZIP中的檔案內容、新建commit，但沒辦法上傳到github，因為這是別人的repository。
要解決這個問題，可以按fork，就會把別人的repository移到自己的，再從自己那邊下載網址、git clone即可！更改過的檔案也都可git push。

【github page】
可以在網頁上看到code的內容(只會顯示最新commit的←就是你那個branch的目前狀態)
到github→setting→page可設置

【狀況劇】
※改上一個commit的 message: git commit --amend :會跳出vim，在裡面修改即可，或是直接git commit --amend -m “名稱"，就可直接改。但只能改上一個的！
※要改再更之前的commit message：git rebase！
※commit之後後悔了想刪掉: 
1.git reset HEAD^( head的前一個commit) --hard(新的commit&更動全都刪) 或是 --soft(可以不打--soft，因為預設就是這樣。只刪掉commit本身，但保留更動內容)
2.git reset 2dd5a38r6(head 的前一個commit的流水號) --hard(新的commit&更動全都刪) 或是 --soft(只刪掉commit本身，但保留更動內容)
※做了更動，還沒commit但不想要更動了：git checkout --檔案名，如果其他檔案都想改回上個commit的樣子：git checkout -- .(跟git add .邏輯一樣)
※想改branch名稱：在該branch上，git branch -m 新名稱
※把github上的某個branch拉到本地：git checkout 該branch名稱 

【git hook】
當發生某些情況時通知我。例如：可設定在某些情況下，阻止你commit。可在.git資料夾中的hooks裡面複製一些程式碼來進行。
:::

