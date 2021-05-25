<?php
  session_start();
  require_once('../conn.php');

  $username = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
    $nickname_sql = sprintf(
      "SELECT `nickname` FROM `users` WHERE `username` = '%s'",
      $username
    );
    $nickname = $conn->query($nickname_sql)->fetch_assoc()['nickname'];
  }

  $result = $conn->query("SELECT * FROM `board` ORDER BY `id` DESC");
  if(!$result){
    die($conn->error);
  }
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
            <a class="btn" href="logout.php">登出</a>
          <?php } ?>
        </div>
        <div class=form>
          <?php if($username){ ?>
            <span class='isEmpty'>Hello, <?=  $nickname ?></span>
            <form method='POST' action='add_post.php'>
              <textarea class="textarea" type="" name='content'></textarea><br>
              <input class="submit btn" type="submit" />
              <?php if(!empty($_GET['errCode'])){
                  echo '<span class=isempty>請輸入評論內容</span>';
              }?>
            </form>
          <?php } else { ?>
            <span class='isEmpty'>請登入發布留言</span>
          <?php } ?>
        </div>
        <?php while ($row = $result->fetch_assoc()) {?>
          <div class=comments>
            <div class='headshot'></div>
            <div class='info'>
              <div class='info_title'>
                <span class='nickname'><?= $row['nickname'] ?></span>
                <span class='currentTime'><?= $row['time'] ?></span>
              </div>
              <div class='content'><?= $row['content'] ?></div>
            </div>
          </div>
        <?php }?>
      </main>
    </div>
  </body>
</html>

