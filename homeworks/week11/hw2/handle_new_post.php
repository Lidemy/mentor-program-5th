<?php
  session_start();
  require_once('../conn.php');
  $title = $_POST['title'];
  $content = $_POST['content'];
  $username = $_SESSION['username'];
  
  $stmt = $conn->prepare('INSERT INTO article(username, content, title) VALUES(?, ?, ?)');
  $stmt->bind_param('sss', $username, $content, $title);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $stmt->get_result();
  header("Location: index.php")
?>