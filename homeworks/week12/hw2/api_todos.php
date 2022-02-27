<?php
  require_once('conn.php');
  header('Content-type: application/json; charset=utf-8');

  if (empty($_GET['id'])) {
    http_response_code(404);
    $json = array(
      "ok" => false,
      "message" => "請帶上 id 哦，不然我不知道要查什麼喇",
    );
    echo json_encode($json);
    die();
  }

  $id = $_GET['id'];
  $sql = "SELECT * FROM todos WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $id);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();

  if ($result->num_rows) {
    echo $row['item'];
  } else {
    $empty = array();
    echo json_encode($empty);
  }
?>