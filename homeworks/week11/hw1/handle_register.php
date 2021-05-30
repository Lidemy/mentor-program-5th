<?php
  session_start();
  require_once('../conn.php');

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
  if(empty($username) || empty($password) || empty($nickname)){
    header('Location: login.php?errCode=1');
    die('資料輸入不全');
  }
  $stmt = $conn->prepare("SELECT * FROM `users` WHERE `username`=?");
  $stmt->bind_param('s', $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $result = $stmt->get_result();
  
  if($result->num_rows >= 1 ){
    header('Location: register.php?errCode=2');
    die('帳號已有人使用');
  }
  $stmt = $conn->prepare("INSERT INTO `users`(`nickname`, `username`, `password`) VALUES(?, ?, ?)");
  $stmt->bind_param('sss', $nickname, $username, $password);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $_SESSION['username'] = $username;
  header('Location: index.php');
?>