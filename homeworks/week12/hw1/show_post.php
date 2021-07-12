<?php
  require_once('../conn.php');
  $offset = $_GET['offset'];
  $limit = $_GET['limit'];
 
  $sql = "SELECT * FROM board ".
   "WHERE is_deleted IS NULL ".
   "ORDER BY `comment_id` DESC ".
   "LIMIT ? OFFSET ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ii', $limit, $offset);
  $result = $stmt->execute();
  if(!$result){
    $json=[
      'ok' => false,
      'message' => $conn->error()
    ];
    $resp = json_encode($json);
    echo $resp;
    die();
  }
  $result = $stmt->get_result();
  if ($result->num_rows == 0){
    $json = [
      'ok' => false,
      'message' => 'no more comments'
    ];
    $resp = json_encode($json);
    echo $resp;
    die();
  }
  $comments = [];
  while ($row = $result->fetch_assoc()) {
    array_push($comments,[
    'username'=> $row['username'],
    'content'=> $row['content'],
    'created_at'=> $row['time']
    ]);
  }
  $json = [
    'ok' => true,
    'comments' => $comments
  ];
  $resp = json_encode($json);
  echo $resp;
?>
