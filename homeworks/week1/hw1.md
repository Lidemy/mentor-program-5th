## 交作業流程

### Git Hub Flow

**on Git**

`git branch [new branch name]` 新增branch

`git checkout [new branch name]` 切換到新branch

`vim [file]` 編輯作業內容

`git commit -am ["版本敘述"]` 新增版本

`git push -u origin [new branch name]` 上傳GitHub


**on GitHub**

點 *pull request*

點 *new pull request*

選擇將[new branch] 匯合進 master

點 *Create pull request*

確認無衝突或討論、改善衝突後點 *Merge pull request*

點 *delete [new branch]*


**on Git**

`git branch -d [new branch name]` 刪除該branch

`git branch -v` 確認剩餘branch
