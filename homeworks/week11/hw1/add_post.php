<?php
  session_start();
  require_once('../conn.php');

  if(empty($_POST['content'])){
    header('Location: index.php?errCode=1');
    die("請輸出評論內容");
  }
  $content = $_POST['content'];

  $username = $_SESSION['username'];
  $stmt = $conn->prepare("INSERT INTO `board`(`username`, `content`) VALUES(?, ?)");
  $stmt->bind_param('ss', $username, $content);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $stmt->get_result();
  header('Location: index.php');
?>
