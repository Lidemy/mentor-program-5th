<?php
  require_once('../conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  
  
  if(empty($_POST['content'] || $_POST['username'])){
    $json = [
      'ok' => false,
      'message' => "please input all fields"
    ];
    $resp = json_encode($json);
    echo $resp;
    die();
  }
  $content = $_POST['content'];
  $username = $_POST['username'];
 

  $stmt = $conn->prepare("INSERT INTO `board`(`username`, `content`) VALUES(?, ?)");
  $stmt->bind_param('ss', $username, $content);
  $result = $stmt->execute();
  if(!$result){
    $json = [
      'ok' => false,
      'message' => $conn->error
    ];
    $resp = json_encode($json);
    echo $resp;
    die();
  }

  $json = [
    'ok' => true,
    'message' => 'Add successfilly',
  ];
  $resp = json_encode($json);
  echo $resp;
?>
