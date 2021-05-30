<?php
  require_once('../conn.php');
  session_start();
  $nickname = $_POST['nickname'];
  $username = $_SESSION['username'];
  $stmt = $conn->prepare(" UPDATE `users` SET `nickname`=? where `username`=?");
  $stmt->bind_param('ss', $nickname, $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $stmt->get_result();
  header("Location: index.php");
?>