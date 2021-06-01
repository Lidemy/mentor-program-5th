<?php
  $id = $_GET['id'];
  session_start();
  require_once('../conn.php');
  $title = $_POST['title'];
  $content = $_POST['content'];
  $username = $_SESSION['username'];
  
  $stmt = $conn->prepare('UPDATE article SET content=?, title=? WHERE article_id=? AND username=?');
  $stmt->bind_param('ssis', $content, $title, $id, $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $stmt->get_result();
  header("Location: index.php")
?>