<?php
  session_start();
  require_once('../conn.php');
  require_once('./utiles.php');
  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }
  $limit = 5;
  $page = 1;
  if (!empty($_GET['page'])) {
    $page = $_GET['page'];
  }
  $offset = ($page-1)*$limit;
  $stmt = $conn->prepare("SELECT count(article_id) FROM article WHERE is_deleted is NULL ORDER BY article_id DESC ");
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $total_page = ceil($stmt->get_result()->fetch_assoc()['count(article_id)']/$limit);

  $stmt = $conn->prepare("SELECT * FROM article WHERE is_deleted is NULL ORDER BY article_id DESC LIMIT ? OFFSET ?");
  $stmt->bind_param('ii', $limit, $offset);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $result = $stmt->get_result();
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
          <h2> CC's Blog </h2>
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
        <?php while ($row = $result->fetch_assoc()) {?>
          <div  class=wrap>
            <div class=article>
              <div class='edit_article' >
                <a class='btn' href='new_post.php?id=<?= $row['article_id'] ?>'>編輯</a>
                <a class='btn' href='handle_delete.php?id=<?= $row['article_id'] ?>'>刪除</a>
              </div>
              <div class='article_title' id='<?= escape($row['title']) ?>'><?= escape($row['title']) ?></div>
              <div class='article_time'><?= escape($row['created_time']) ?></div>
              <div class='article_content'><?= escape($row['content']) ?></div>
              <a class='btn readmore'>READ MORE</a>
            </div>
          </div>
        <?php } ?>
        <?php if ($page !='1'){ ?>
          <a href="index.php?page=1">首頁</a>
          <a href="index.php?page=<?= $page-1 ?>">上一頁</a>
        <?php }?>
        <?php if ($page != $total_page){ ?>
          <a href="index.php?page=<?= $page+1 ?>">下一頁</a>
          <a href="index.php?page=<?= $total_page ?>">尾頁</a>
        <?php }?>
      </main>
    </div>
    <script src='index.js'></script>
  </body>
</html>