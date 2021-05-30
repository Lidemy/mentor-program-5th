<?php
  session_start();
  require_once('../conn.php');
  $comment_id = (int)$_GET['id'];
  $content = $_POST['content'];
  $username = $_SESSION['username'];

  $stmt = $conn->prepare('UPDATE `board` SET `is_deleted`=1 WHERE `comment_id`=? AND `username`=?');
  $stmt->bind_param('is', $comment_id, $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  echo $stmt->get_result();
  header("Location: index.php");
?>