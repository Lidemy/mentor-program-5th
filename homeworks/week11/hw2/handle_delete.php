<?php
  $id = $_GET['id'];
  session_start();
  require_once('../conn.php');
  $username = $_SESSION['username'];
  
  $stmt = $conn->prepare('UPDATE article SET is_deleted=1 WHERE article_id=? AND username=?');
  $stmt->bind_param('is', $id, $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $stmt->get_result();
  header("Location: index.php")
?>
