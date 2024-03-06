<?php
include "php/db.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IDOL CS</title>
  <link rel="stylesheet" href="css/base.css?v=1.1" />
  <link rel="stylesheet" href="css/index.css?v=1.3" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7148141514273746"
     crossorigin="anonymous"></script>
</head>

<body>
  <div id="main_wrapper">
    <div class="div_1" id="introduction_div">
      <h3>Hey there 👋</h3>
      <p>
        Find notes, recorded lectures, video explanations and other resources for BSC CS IDOL (MU)
      </p>
    </div>
    <div class="divider_1"></div>
    <div class="div_1" id="semester_wise_redirects">
      <p>Access the notes, video explanations, live sessions and official lecture recordings as per semester 👇</p>
      <div id="semester_links" class="links_1">
        <a class="important_link" href="1">Semester 1</a>
      </div>
    </div>
    <div class="divider_1"></div>
    <div class="div_1">
      <p>Latest Added Official Lectures</p>
      <div class="links_1">
        <?php
        $query = "SELECT * FROM `lectures` ORDER BY `id` DESC LIMIT 3";
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
        $query = "SELECT * FROM `chapters` ORDER BY `id` DESC LIMIT 3";
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
      <p>Latest Updated Other Resources</p>
      <div class="links_1">
        <?php
        $query = "SELECT * FROM `resources` WHERE `subject_code` = '0' ORDER BY `id` DESC LIMIT 3";
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
          <p class="ll_head">See Other Resources</p>
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
    <div class="div_1 footer">
      <p class="footer_p">Developed and Maintained by the IDOL CS Community</p>
      <p class="footer_p">IDOLCS.com is an opensource project, the source code can be found on the official <a
          href="https://github.com/yashkolambekar/idolcs.com">Github Repository</a>, feel free to contribute.</p>
      <p class="footer_small">This is website / community does not support, endorse or perform piracy. Contact the
        admins on Telegram for removal of any copyrighted material.</p>
    </div>
  </div>
</body>
<script src='js/index.js?v=1.1'></script>

</html>