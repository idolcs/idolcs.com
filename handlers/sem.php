<?php 
  include "../php/db.php";
  $semester = $_GET["semester"];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo "Semester " . $semester ?></title>
     <base href="/"> 
    <link rel="stylesheet" href="css/base.css?v=1.1" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7148141514273746"
     crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="main_wrapper">

      <a href="/" class="back_arrow_wrapper">
        <img src="assets/back_arrow.webp" alt="">
        <p>Back</p>
      </a>

      <div class="divider_1"></div>
      
      <div class="div_1">
        <h2>Semester <?php echo $semester ?></h2>
      </div>

      <div class="divider_1"></div>

      <div class="div_1" id="subjects_wrapper">
        <p>Choose the subject</p>
        <div class="links_1">
            <?php

                $query = "SELECT * FROM `subjects` WHERE `semester` = '$semester' ORDER BY `subject_no` ASC";
                $result = mysqli_query($db, $query);
                if($result){
                  while($row = mysqli_fetch_assoc($result)){
                    echo "<a href='". $row["subject_no"] ."'>". $row["subject_name"] ."</a>";
                  }
                }

            ?>
        </div>
      </div>
    
    </div>
  </body>
</html>
