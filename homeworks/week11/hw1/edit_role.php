<?php
  session_start();
  require_once('../conn.php');
  $role = $_GET['role'];
  $id = (int)$_GET['id'];

  $username = $_SESSION['username'];
  $stmt = $conn->prepare('SELECT role FROM users WHERE username = ?');
  $stmt->bind_param('s', $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $user_role = $stmt->get_result()->fetch_assoc()['role'];
  if($user_role == 'admin'){
    $stmt = $conn->prepare('UPDATE  users SET `role`=? WHERE `user_id`=?');
    $stmt->bind_param('si', $role, $id);
    $result = $stmt->execute();
    if(!$result){
      die($conn->error);
    }
  }
  $stmt->get_result();
  echo 'change success!';
?>