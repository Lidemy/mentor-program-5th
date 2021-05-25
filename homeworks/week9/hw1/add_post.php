<?php
  session_start();
  require_once('../conn.php');

  if(empty($_POST['content'])){
    header('Location: index.php?errCode=1');
    die("請輸出評論內容");
  }
  $content = $_POST['content'];

  $username = $_SESSION['username'];
  $nickname_sql = sprintf(
    "SELECT `nickname` FROM `users` WHERE `username` = '%s'",
    $username
  );
  $nickname = $conn->query($nickname_sql)->fetch_assoc()['nickname'];

  $sql = sprintf(
    "INSERT INTO `board`(`nickname`, `content`) VALUES('%s', '%s')",
    $nickname, $content
  );
  $result = $conn->query($sql);
  if(!$result){
    die($conn->error);
  }
  header('Location: index.php');
?>
