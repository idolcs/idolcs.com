<?php
include "../php/db.php";
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
  if ($result) {
    $row = mysqli_fetch_assoc($result);
    echo "<title>" . $row["subject_name"] . "</title>";
  }
  ?>
  <base href="/">
  <link rel="stylesheet" href="css/base.css?v=1.1" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7148141514273746"
     crossorigin="anonymous"></script>
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
        if ($result) {
          $row = mysqli_fetch_assoc($result);
          echo $row["subject_no"] . " " . $row["subject_name"];
        }
        ?>
      </h2>
    </div>



    
        <?php
        $query = "SELECT * FROM `chapters` WHERE `subject_id` = '$subject'";
        $result = mysqli_query($db, $query);
        if ($result) {
          if(mysqli_num_rows($result) > 0) {
            echo '    <div class="divider_1"></div>';
            echo '<div class="div_1" id="notes_redirects">
            <p>Chapterwise Notes and Video Explanations (Telegram)</p>
            <div class="links_1">';
          while ($row = mysqli_fetch_assoc($result)) {
            echo "<a href='" . $row["tg_link"] . "'>" . $row["chapter_name"] . "</a>";
          }
          echo '</div>
          </div>';
        }
        }
        ?>
      
    
        <?php
        $query = "SELECT * FROM `lectures` WHERE `subject_id` = '$subject' ORDER BY `id` DESC";
        $result = mysqli_query($db, $query);
        if ($result) {
          if(mysqli_num_rows($result) > 0) {
            echo '    <div class="divider_1"></div>';
            echo '<div class="div_1" id="notes_redirects">
            <p>College Lecture Recordings (Youtube)</p>
            <div class="links_1">';
          while ($row = mysqli_fetch_assoc($result)) {
            echo "<a target='blank' href='" . $row["youtube_link"] . "'>";
            echo "<p class='ll_head'>" . $row["title"] . "</p>";
            echo '<div class="ll_small_text">';
            echo '<p class="ll_time">' . $row["length"] . '</p>';
            echo '<p>' . $row["date"] . '</p>';
            echo '<p>' . $row["instructor"] . '</p>';
            echo '<p>' . $row["pcp_centre"] . '</p>';
            echo '</div>';
            echo '</a>';
          }
          echo '</div>
          </div>';
        }
        }
        ?>


        <?php
        $query = "SELECT * FROM `resources` WHERE `subject_code`= '$subject' ORDER BY `id` DESC LIMIT 5";
        $result = mysqli_query($db, $query);
        if ($result) {
          if(mysqli_num_rows($result) > 0) {
            echo '    <div class="divider_1"></div>';
            echo '    <div class="div_1" id="notes_redirects">
            <p>Resources (Redirect)</p>
            <div class="links_1">';
          while ($row = mysqli_fetch_assoc($result)) {
            echo "<a target='blank' href='" . $row["link"] . "'>";
            echo "<p class='ll_head'>" . $row["title"] . "</p>";
            echo '<div class="ll_small_text">';
            echo '<p>' . $row["description"] . '</p>';
            echo '</div>';
            echo '</a>';
          }
          echo '</div>
          </div>';
        }
        }
        ?>
      

    <div class="divider_1"></div>

  </div>
</body>

</html>