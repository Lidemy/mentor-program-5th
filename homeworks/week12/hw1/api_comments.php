<?php
  require_once('conn.php');
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json; charset=utf-8');

  $limit = 30;
  $offset = 0;
  // 更新分頁參數
  if (!empty($_GET['offset'])) {
    $offset = intval($_GET['offset']); 
  }
  if (!empty($_GET['limit'])) {
    $limit = intval($_GET['limit']); 
  }

  $sql = "SELECT * FROM comments ORDER BY created_at DESC LIMIT ? OFFSET ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ii', $limit ,$offset);
  $stmt->execute();
  $result = $stmt->get_result();
  
  $comments = array();
  while ($row = $result->fetch_assoc()) {
    array_push($comments, array(
      "nickname" => $row['nickname'],
      "avatar" => $row['avatar'],
      "message" => $row['message'],
      "created_at" => $row['created_at'],
    ));
  }

  $json = array(
    "comments" => $comments
  );
  $response = json_encode($json); 
  echo $response;

?>