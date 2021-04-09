## 跟你朋友介紹 Git

### git init
先在要做版本控制的資料夾加入git，讓git知道你要版本控制的目標(*git初始化*)

在該資料夾內 `git init`

### git status
`git status`可讓你看到目前的版本控制目標

`Change to be commited:`此區內表示已被選取加入版本控制的file

`Untacked files:`此區內則是未被選入的file

### git add
使用`git add [檔案名]或[.](表示該資料夾內所有檔案及資料夾)`來確認要版本控制的目標

### git commit
在用`git commit -m ["版本敘述"]` 建立版本

若是已建立過版本，僅要更新版本可用`git commit -am ["版本敘述"]`，可忽略`git add`步驟

### git push
當版本在本地電腦的git建立好，我們可以把它放到網路上，如GitHub等，以便多人協作

`git remote add origin [git的url]` (新建名為origin的遠端位於該url)

`git push origin master`(將master這個branch上傳到origin內)

### git pull
若是要拉下網路上之後更新的版本

`git pull` (直接拉該branch的資料)

`git pull origin master`(指定拉下master這個branch，此時若在別的branch會強制merge)

