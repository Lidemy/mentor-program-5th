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
        <h1>註冊</h1>
        <div class=btn_wrap>
          <a class="btn" href="index.php">回留言板</a>
          <a class="btn" href="login.php">登入</a>
        </div>
        <div class=form>
          <form method='POST' action='handle_register.php'>
            暱稱:<input class="nickname" name='nickname' /><br>
            帳號:<input class="username" name='username' /><br>
            密碼:<input class="password" name='password' type='password'/><br>
            <input class="submit btn" type="submit" />
            <?php
              if(!empty($_GET['errCode'])){
                if($_GET['errCode'] == '1'){
                  echo '<span class=isEmpty>資料輸入不全</span>';
                }
                if($_GET['errCode'] == '2'){
                  echo '<span class=isEmpty>帳號已有人使用</span>';
                }
              }
            ?>
          </form>
        </div>
      </main>
    </div>
  </body>
</html>

