<?php
  session_start();
  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }
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
          <a href='login.php'>登入</a>
        </div>
      </nav>
      <div class=bkg>
        <h2>存放文字之地</h2>
        <h4>Welcome to my blog!</h4>
      </div>
      <main>
        <div  class=wrap >
          <div class=article >
            <form method="POST" action="handle_login.php" class=login >
              <h2 style="margin: 0;">登入:</h2>
              <input class=insert name=username placeholder="請輸入帳號">
              <input class=insert name=password placeholder="請輸入密碼">
              <input class=btn type="submit"/>
              <?php
              if(!empty($_GET['errCode'])){
                $code = $_GET['errCode'];
                if($code =='1'){
                  echo "<div class='article_title'>資料不全</div>";
                } else if ($code =='2') {
                  echo "<div class='article_title'>密碼有誤</div>";
                }
              }
            ?>
            </form>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
