
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo "Semester " . $semester ?></title>
     <base href="/"> 
    <link rel="stylesheet" href="css/base.css?v=1.1" />
    <link rel="stylesheet" href="css/sem.css?v=1.1" />
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
      <?php

if(isset($_GET["sub"]) and isset($_GET["chap"])){

    include "../php/db.php";

    $subject = $_GET["sub"];
    $chapter = $_GET["chap"];

    $query = "SELECT `tg_link` FROM chapters WHERE `subject_id` = '$subject' AND `chapter_no` = '$chapter'";
    $result = mysqli_query($db, $query);
    if($result and mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $link = $row['tg_link'];
        header('Location: '.$link);
    }else{
        echo "Invalid Combination";
    }

}

?>
      </div>
    
    </div>
  </body>
</html>
