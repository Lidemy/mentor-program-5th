<?php
  require_once('../conn.php');

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  if(empty($username) || empty($password) || empty($nickname)){
    header('Location: login.php?errCode=1');
    die('資料輸入不全');
  }
  $sql = sprintf(
    "SELECT * FROM `users` WHERE `username`='%s'",
    $username
  );
  $result = $conn->query($sql);
  if(!$result){
    die($conn->error);
  }
  if($result->num_rows >= 1 ){
    header('Location: login.php?errCode=2');
    die('帳號已有人使用');
  }
  $sql = sprintf(
    "INSERT INTO `users`(`nickname`, `username`, `password`) VALUES('%s', '%s', '%s')",
    $nickname, $username, $password
  );
  $result = $conn->query($sql);
  if(!$result){
    die($conn->error);
  }
  header('Location: index.php');
?>