<?php
  session_start();
  require_once('./utiles.php');
  require_once('../conn.php');

  $username = NULL;
  $user_role = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
    $stmt= $conn->prepare("SELECT `nickname` FROM `users` WHERE `username` = ?");
    $stmt->bind_param('s', $username);
    $result = $stmt->execute();
    if (!$result){
      die($conn->error);
    }
    $nickname = $stmt->get_result()->fetch_assoc()['nickname'];

    $stmt = $conn->prepare('SELECT role FROM users WHERE username = ?');
    $stmt->bind_param('s', $username);
    $result = $stmt->execute();
    if(!$result){
      die($conn->error);
    }
    $user_role = $stmt->get_result()->fetch_assoc()['role'];
  }
  $limit = 5;
  $page = 1;
  if(!empty($_GET['page'])){
    $page = $_GET['page'];
  }
  $offset = ($page-1)*5;
  $stmt = $conn->prepare("SELECT count(comment_id) FROM board LEFT JOIN users ON board.username = users.username WHERE is_deleted IS NULL");
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $total_page = ceil($stmt->get_result()->fetch_assoc()['count(comment_id)'] / $limit);

  $sql = "SELECT * FROM board " . "LEFT JOIN users ON board.username = users.username ".
   "WHERE is_deleted IS NULL ".
   "ORDER BY `comment_id` DESC ".
   "LIMIT ? OFFSET ?";
  $stmt = $conn->prepare($sql);
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
    <title>留言板</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class=webpage>
      <header>此為練習網站，請勿輸入真實帳號資料</header>
      <main>
        <h1>Comments</h1>
        <div class=btn_wrap>
          <?php if(!$username){ ?>
            <a class="btn" href="register.php">註冊</a>
            <a class="btn" href="login.php">登入</a>
          <?php } else { ?>
            <?php if ($user_role =='admin'){ ?>
              <a class="btn" href="admin.php">會員權限修改</a>
            <?php } ?>
              <a class="btn" href="logout.php">登出</a>
              <a class="btn change_nickname" >修改暱稱</a>
          <?php } ?>
        </div>
        <div class=form>
          <?php if($username){ ?>
            <span class='isEmpty'>Hello, <?=  escape($nickname) ?></span>
            <form class='hide handle_change_nickname' method='POST' action='handle_change_nickname.php'>
              新暱稱:<input class="nickname" name='nickname'/>
              <input class="submit btn" type="submit" />
            </form>
          <?php }
            if($username && $user_role!='suspended'){ ?>
              <form method='POST' action='add_post.php'>
                <textarea class="textarea" type="" name='content'></textarea><br>
                <input class="submit btn" type="submit" />
                <?php if(!empty($_GET['errCode'])){
                  if($_GET['errCode']==='1'){
                    echo '<span class=isEmpty>請輸入評論內容</span>';
                  }
                }?>
              </form>
          <?php } else {
            if ($user_role =='suspended') {
              echo "<span class='isEmpty'>停權會員無法留言</span>";
             } else { 
              echo "<span class='isEmpty'>請登入發布留言</span>";
            } 
          }?>
        </div>
        <?php while ($row = $result->fetch_assoc()) {?>
          <div class=comments>
            <div class='headshot'></div>
            <div class='info'>
              <div class='info_title'>
                <span class='nickname'><?= escape($row['nickname']) ?></span>
                <span class='nickname'>(@<?= escape($row['username']) ?>)</span>
                <span class='currentTime'><?= escape($row['time']) ?></span>
                <?php if ($row['username'] == $username || $user_role ==='admin') {?>
                  <a class='currentTime edit'>編輯留言</a>
                  <a class='currentTime delete' href='delete_comment.php?id=<?= escape($row['comment_id'])?>'>刪除留言</a>
                <?php } ?>
              </div>
              <form class='edit_content hide' method='POST' 
                action='edit_comment.php?id=<?= escape($row['comment_id'])?>&page=<?= $page?>'>
                <textarea name='content' ><?= escape($row['content']) ?></textarea>
                <input class="submit btn" type="submit" />
                <?php if(!empty($_GET['errCode'])){
                   if($_GET['errCode']==='2'){
                    echo '<span class=isEmpty>請輸入評論內容</span>';
                  }
                }?>
              </form>
              <div class='content'><?= escape($row['content']) ?></div>
            </div>
          </div>
        <?php }?>
      </main>
      <div>
        <?php if ($page!= 1) {?>
          <a class="btn" href="index.php?page=1">首頁</a>
          <a class="btn" href="index.php?page=<?= $page - 1 ?>">上一頁</a>
        <?php } ?>
        <?php if ($page!= $total_page) {?>
          <a class="btn" href="index.php?page=<?= $page + 1 ?>">下一頁</a>
          <a class="btn" href="index.php?page=<?= $total_page ?>">末頁</a>
        <?php } ?>
      </div>
    </div>
    <script src='./index.js'></script>
  </body>
</html>

