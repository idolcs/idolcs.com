<?php
    include "db.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IDOL CS</title>
  <link rel="stylesheet" href="css/base.css" />
  <link rel="stylesheet" href="css/index.css" />
</head>

<body>
  <div id="main_wrapper">
    <div class="div_1" id="introduction_div">
      <h3>Hey there 👋</h3>
      <p>
        You can find notes of BSc Computer Science IDOL or University of
        Mumbai here! We are working towards providing the students with better
        curated notes and video explanations to help them score in exams!
      </p>
    </div>
    <div class="divider_1"></div>
    <div class="div_1" id="semester_wise_redirects">
      <p>Access the notes, video explanations, live sessions and official lecture recordings as per semester 👇</p>
      <div id="semester_links" class="links_1">
        <a href="1">Semester 1</a>
      </div>
    </div>
    <div class="divider_1"></div>
    <div class="div_1">
      <p>Latest Added Official Lectures</p>
      <div class="links_1">
        <?php
        $query = "SELECT * FROM `lectures` ORDER BY `id` DESC LIMIT 5";
        $result = mysqli_query($db, $query);
        if ($result) {
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
        }
        ?>
      </div>
    </div>
    <div class="divider_1"></div>
    <div class="div_1">
      <p>Latest Added chapters</p>
      <div class="links_1">
        <?php
        $query = "SELECT * FROM `chapters` ORDER BY `id` DESC LIMIT 5";
        $result = mysqli_query($db, $query);
        if ($result) {
          while ($row = mysqli_fetch_assoc($result)) {
            echo "<a target='blank' href='" . $row["tg_link"] . "'>";
            echo "<p class='ll_head'>" . $row["chapter_name"] . "</p>";
            echo '</a>';
          }
        }
        ?>
      </div>
    </div>
    <div class="divider_1"></div>
    <div class="div_1" id="group_links">
      <p>Latest Updated Resources</p>
      <div class="links_1">
      <?php
        $query = "SELECT * FROM `resources` ORDER BY `id` DESC LIMIT 5";
        $result = mysqli_query($db, $query);
        if ($result) {
          while ($row = mysqli_fetch_assoc($result)) {
            echo "<a target='blank' href='" . $row["link"] . "'>";
            echo "<p class='ll_head'>" . $row["title"] . "</p>";
            echo '<div class="ll_small_text">';
            echo '<p>' . $row["description"] . '</p>';
            echo '</div>';
            echo '</a>';
          }
        }
        ?>
        <a href="resources">
          <p class="ll_head">See All Resources</p>
        </a>
      </div>
    </div>
    <div class="divider_1"></div>
    <div class="div_1" id="group_links">
      <p>Join the community on Telegram and Whatsapp</p>
      <div id="group_links_links">
        <a target="_blank" href="tg://resolve?domain=idol_cs" id="telegram_link_div">
          <img src="assets/telegram_icon.png" alt="" />
          <p>Telegram Channel</p>
        </a>
        <a target="_blank" href="https://chat.whatsapp.com/Ep71FS3YkEFGUtv9qcudB2" id="whatsapp_link_div">
          <img src="assets/whatsapp_icon.png" alt="" />
          <p>Whatsapp Group</p>
        </a>
      </div>
    </div>
    <div class="divider_1"></div>
    <div class="div_1 footer" >
      <p>Developed and Maitained by <a href="https://instagram.com/classicaf">Yash</a></p>
      <p class="footer_small">This is website / community does not support, endorse or perform piracy. Contact the admins for removal</p>
    </div>
  </div>
</body>

</html>