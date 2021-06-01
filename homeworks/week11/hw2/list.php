<?php
  session_start();
  require_once('../conn.php');
  require_once('./utiles.php');
  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  $stmt = $conn->prepare("SELECT * FROM article WHERE is_deleted is NULL ORDER BY article_id DESC");
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $result = $stmt->get_result();
  $article = 1;
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Blog</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class=body>
      <nav>
        <div class='nav'>
          <h2><a href='index.php'> CC's Blog </a></h2>
          <a href='list.php'>文章列表</a>
          <a>分類專區</a>
          <a>關於我</a>
        </div>
        <div class='nav'>
          <?php if ($username) {?>
            <a href='new_post.php'>新增文章</a>
            <a href='handle_logout.php'>登出</a>
          <?php } else{ ?>
            <a href='login.php'>登入</a>
          <?php } ?>
        </div>
      </nav>
      <div class=bkg>
        <h2>存放文字之地</h2>
        <h4>Welcome to my blog!</h4>
      </div>
      <main>
        <?php while ($row = $result->fetch_assoc()) {
          $page = ceil($article/5); 
        ?> 
          <div  class=wrap>
            <div class=article>
              <div class='edit_article' >
                <a class='btn' href='new_post.php?id=<?= $row['article_id'] ?>'>編輯</a>
                <a class='btn' href='handle_delete.php?id=<?= $row['article_id'] ?>'>刪除</a>
              </div>
              <div class='article_title'><a class=scale href="index.php?page=<?= $page ?>#<?= escape($row['title']) ?>"><?= escape($row['title']) ?></a></div>
              <div class='article_time'><?= escape($row['created_time']) ?></div>
            </div>
          </div>
        <?php $article+=1;
        }  ?>
      </main>
    </div>
  </body>
</html>