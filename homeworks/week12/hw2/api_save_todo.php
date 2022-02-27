<?php
  require_once('conn.php');
  header('Content-type: application/json; charset=utf-8');

  // 沒傳資料
  if (file_get_contents('php://input') === '[]') {
    http_response_code(422);
    $json = array(
      "ok" => false,
      "message" => "請帶上資料哦，不然我不知道要存什麼喇",
    );
    echo json_encode($json);
    die();
  }
  
  $todo = file_get_contents('php://input');


  $sql = "INSERT INTO todos(`item`) VALUES(?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $todo);
  $stmt->execute();

  // 再查一次，找出最新的 id
  $sql = "SELECT MAX(id) AS id FROM todos";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $todo_id = $row['id'];
  $json = array(
    "ok" => true,
    "message" => "儲存成功～",
    "id" => $todo_id
  );
  echo json_encode($json);

?>