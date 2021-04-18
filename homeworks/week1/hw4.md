## 跟你朋友介紹 Git
在進行檔案管理的時候，如果你有將檔案更新過，但是又想繼續保留舊的檔案，那就得需要下點功夫，
Git就是可以幫你做版本控制的程式。以下就是版本控制的流程:
1.首先你要先啟動版本控制
  git init
2.確認版本控制的狀態
  git status
3.再指定想要進行版本控制的檔案
  git add
  或者也可將所有檔案加入版本控制
  git add .
4.你也可預先處理不想要版本控制的檔案，將它忽略就可以了
  vim.gitignore
5.然後建立一個commit
  git commit -am "自己設定的版本敘述"
6.假如你commit了好多次，發現自己比較喜歡之前的版本而不是最新的版本
  git checkout "版本名稱"

以上是線性流程，Git還有一個功能叫做Branch(分支)，可以同時進行開發和修正，等兩個branch都完成後再合併。
1.建立branch
  git branch "你自己設定的名稱"
2.切換到其他branch
  git checkout “branch的名稱”
3.將branch拉回本機
  git pull origin master
4.也可將指定的branch同步到Github
  git push original "branch的名稱"


  


