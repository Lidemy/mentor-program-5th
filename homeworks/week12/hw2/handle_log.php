<?php
  require_once('../conn.php');
  $user_id = $_GET['id'];

  $stmt = $conn->prepare('SELECT * FROM todos WHERE user_id=?');
  $stmt->bind_param('i', $user_id);
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
  $result = $stmt->get_result();
  $task = [];
  while ($row = $result->fetch_assoc()) {
    array_push($task,[
      'taskname' => $row['taskname'],
      'done' => $row['done'],
      't_id' => $row['t_id']
    ]);
  }
  $json =[
    'ok' => true,
    'task' => $task
  ];
  $resp = json_encode($json);
  echo $resp;
?>