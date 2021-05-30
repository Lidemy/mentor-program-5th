<?php
  require_once('../conn.php');
  require_once('utiles.php');
  $stmt = $conn->prepare("SELECT * FROM `users` ORDER BY `user_id`asc");
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  $result = $stmt->get_result();
?>

<!DOCTYPE html>
<html>
  <head>
    <title>留言板</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class=webpage>
      <main>
        <h1>會員管理</h1>
        <div class=btn_wrap>
          <a class="btn" href="index.php">回留言板</a>
        </div>
        <table cellpadding ='8px'>
          <?php while ($row = $result->fetch_assoc()) { ?>
          <tr>
            <th>會員ID</th>
            <th>會員暱稱</th>
            <th>會員名</th>
            <th>會員身分</th>
          </tr>

          <tr class=select>
            <td><?= $row['user_id'] ?></td>
            <td><?= $row['nickname'] ?></td>
            <td><?= $row['username'] ?></td>
            <td>
           
              <select name="role" class='role'>
                <option  
                  <?php if ($row['role'] == 'admin'){ 
                    echo 'selected'; }?>>
                    admin
                </option>
                <option 
                  <?php if ($row['role'] == 'normal'){ 
                    echo 'selected'; }?>>
                    normal
                </option>
                <option 
                  <?php if ($row['role'] == 'suspended'){ 
                    echo 'selected'; }?>>
                    suspended
                </option>
              </select>
            </td>
            <td class='btn'>送出</td>
          </tr>
          <?php } ?>
        </table>
      </main>
    </div>
    <script src='admin.js'></script>
  </body>
</html>

