<?php
  require_once('../conn.php');
  $taskId = $_POST['taskId'];
  $stmt = $conn->prepare('DELETE FROM todos WHERE t_id=?');
  $stmt->bind_param('i', $taskId);
  $result = $stmt->execute();
  if(!$result){
    $json = [
      'ok'=> false,
      'message'=> $conn->error
    ];
    $resp = json_encode($json);
    echo $resp;
    die(); 
  }
  $stmt->get_result();
  $json = [
    'ok'=> true,
    'message'=>'刪除成功'
  ];
  $resp = json_encode($json);
  echo $resp;
?>