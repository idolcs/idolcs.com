<?php 
  include "db.php";
  $subject = $_GET["subject"];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php 
          $query = "SELECT * FROM `subjects` WHERE `subject_no` = '$subject'";
          $result = mysqli_query($db, $query);
          if($result){
            $row = mysqli_fetch_assoc($result);
            echo "<title>". $row["subject_name"] ."</title>";
          }
    ?>
    <title>Document</title>
    <base href="/">
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/subject.css" />
  </head>
  <body>
    <div id="main_wrapper">

      <a href="<?php echo $subject[0] ?>" class="back_arrow_wrapper">
        <img src="assets/back_arrow.webp" alt="" />
        <p>Back</p>
      </a>

      <div class="divider_1"></div>

      <div class="div_1">
        <h2>
          <?php 
          $query = "SELECT * FROM `subjects` WHERE `subject_no` = '$subject'";
          $result = mysqli_query($db, $query);
          if($result){
            $row = mysqli_fetch_assoc($result);
            echo $row["subject_no"] . " " . $row["subject_name"];
          }
          ?>
        </h2>
      </div>

      <div class="divider_1"></div>

      <div class="div_1" id="notes_redirects">
        <p>Chapterwise Notes and Video Explanations (Telegram)</p>
        <div id="chapters_links">
          <?php
            $query = "SELECT * FROM `chapters` WHERE `subject_id` = '$subject'";
            $result = mysqli_query($db, $query);
            if($result){
              while($row = mysqli_fetch_assoc($result)){
                echo "<a href='". $row["tg_link"] ."'>". $row["chapter_name"] ."</a>";
              }
            }
          ?>
        </div>
      </div>

      <div class="divider_1"></div>

      <div class="div_1" id="notes_redirects">
        <p>College Lecture Recordings (Youtube)</p>
        <div id="lecture_links">
          <?php
            $query = "SELECT * FROM `lectures` WHERE `subject_id` = '$subject' ORDER BY `id` DESC";
            $result = mysqli_query($db, $query);
            if($result){
              while($row = mysqli_fetch_assoc($result)){
                echo "<a target='blank' href='" . $row["youtube_link"] . "'>";
                echo "<p class='ll_head'>". $row["title"] ."</p>";
                echo '<div class="ll_small_text">';
                echo '<p class="ll_time">'. $row["length"] .'</p>';
                echo '<p>' . $row["date"] . '</p>';
                echo '<p>' . $row["instructor"] . '</p>';
                echo '<p>' . $row["pcp_centre"] . '</p>';
                echo '</div>';
                echo '</a>';
              }
            }
          ?>
        </div>
      </div>
    </div>
  </body>
</html>
