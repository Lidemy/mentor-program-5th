<?php
  require_once('../conn.php');
  $id = NULL;
  if(!empty($_GET['id'])){
    $id = (int)$_GET['id'];
    $stmt = $conn->prepare("SELECT * FROM article WHERE article_id=?");
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if (!$result) {
      die($conn->error);
    }
    $result = $stmt->get_result()->fetch_assoc();
    $title = $result['title'];
    $content = $result['content'];
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
            <a href='new_post.html'>新增文章</a>
            <a href='handle_logout.php'>登出</a>
        </div>
      </nav>
      <div class=bkg>
        <h2>存放文字之地</h2>
        <h4>Welcome to my blog!</h4>
      </div>
      <main>
        <div  class=wrap >
          <div class=article >
            <form method="POST" 
              action="<?php if ($id) {
                echo 'handle_edit_post.php?id=' . $id;
              } else {
                echo 'handle_new_post.php';} ?>" >
              <h4 style="margin: 0 0 20px;">發表文章:</h4>
              <input class=new_title name=title placeholder="請輸入文章標題" <?php if($id){echo 'value='.$title;}?>><br>
              <textarea class=new_content name=content placeholder="請輸入文章內容"><?php if ($id) {echo $content;} ?></textarea><br>
              <input class=btn type="submit"/>
            </form>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
