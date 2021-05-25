<?php
  session_start();
  require_once('../conn.php');
  $username = $_POST['username'];
  $password = $_POST['password'];
  if(empty($username) || empty($password)){
    header('Location: login.php?errCode=1');
    die('資料輸入不全');
  }
  $sql = sprintf(
    "SELECT * FROM `users` WHERE `username`='%s' AND `password`='%s'",
    $username, $password
  );
  $result = $conn->query($sql);
  if(!$result){
    die($conn->error);
  }
  if($result->num_rows == 1 ){
    $_SESSION['username'] = $username;
    header('Location: index.php');
  } else {
    header('Location: login.php?errCode=2');
  }

?>