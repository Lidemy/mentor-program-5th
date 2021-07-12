<?php
  require_once('../conn.php');
  $taskname = $_POST['taskname'];
  $done = $_POST['done'];
  $user_id = $_POST['id'];
  $taskId = $_POST['taskId'];
  for($i = 0; $i<count($taskname); $i++) {
    if ($taskId[$i] == NULL) {
      $stmt = $conn->prepare('INSERT INTO todos(taskname, done, user_id) VALUES(?, ?, ?)');
      $stmt->bind_param('sii', $taskname[$i], $done[$i], $user_id);
    } else {
      $stmt = $conn->prepare('UPDATE todos SET taskname=?, done=? WHERE t_id=?');
      $stmt->bind_param('sii', $taskname[$i], $done[$i], $taskId[$i]);
    }
    $result = $stmt->execute();
    if (!$result) {
      $json = [
        'ok'=>false,
        'message'=> $conn->error
      ];
      $resp = json_encode($json);
      echo $resp;
      die();
    }
    $stmt->get_result();
  }
  $json = [
    'ok'=>true,
    'message'=> '新增成功'
  ];
  $resp = json_encode($json);
  echo $resp;

?>