<?php
  session_start();
  require_once('../conn.php');
  $comment_id = (int)$_GET['id'];
  $content = $_POST['content'];
  $username = $_SESSION['username'];
  $page = $_GET['page'];

  if(empty($content)){
    header("Location: index.php?errCode=2");
    die('請填寫評論');
  }
  $stmt = $conn->prepare('SELECT role FROM users WHERE username = ?');
  $stmt->bind_param('s', $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $user_role = $stmt->get_result()->fetch_assoc()['role'];
  if ($user_role === 'admin'){
    $stmt = $conn->prepare('UPDATE `board` SET `content`=? WHERE `comment_id`=?');
    $stmt->bind_param('si', $content, $comment_id);
  }else{
    $stmt = $conn->prepare('UPDATE `board` SET `content`=? WHERE `comment_id`=? AND `username`=?');
    $stmt->bind_param('sis', $content, $comment_id, $username);
  }
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  echo $stmt->get_result();
  header("Location: index.php?page=$page");
?>