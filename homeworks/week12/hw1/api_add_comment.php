<?php
  require_once('conn.php');
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json; charset=utf-8');

  if (empty($_POST['nickname']) || empty($_POST['message'])) {
    $json = array(
      "ok" => false,
      "message" => "資料不完整"
    );
    // 設定 status code
    http_response_code(422);
    echo json_encode($json); 
    die();
  }


  if (empty($_POST['avatar'])) {
    $sql = "INSERT INTO comments(`nickname`, `message`) VALUES(?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $_POST['nickname'], $_POST['message']);
    $stmt->execute();
    $result = $stmt->get_result();
  } else {
    $sql = "INSERT INTO comments(`nickname`, `message`, `avatar`) VALUES(?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sss', $_POST['nickname'], $_POST['message'], $_POST['avatar']);
    $stmt->execute();
    $result = $stmt->get_result();
  }

  $json = array(
    "ok" => true,
    "message" => "新增成功！"
  );

  echo json_encode($json);

?>