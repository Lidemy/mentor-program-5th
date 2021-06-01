<?php
  session_start();
  require_once('../conn.php');
  $username = $_POST['username'];
  $password = $_POST['password'];
  if (empty($username) || empty($password)) {
    header('Location: login.php?errCode=1');
    die('資料不全');
  }
  $stmt = $conn->prepare('SELECT password FROM users WHERE username=?');
  $stmt->bind_param('s', $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $result = $stmt->get_result();

  if ($result->num_rows == 1) {
    $hash = $result->fetch_assoc()['password'];
    if (password_verify($password, $hash)) {
      $_SESSION['username'] = $username;
      header('Location: index.php');
    } else {
      header('Location: login.php?errCode=2');
    }
  }
?>