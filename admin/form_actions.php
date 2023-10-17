<?php

    $gobackhref = "../admin";
    include "../db.php";

    if(isset($_POST["new_subject"])){
        $semester = $_POST["semester"];
        $subject_no = $_POST["subject_no"];
        $subject_name = $_POST["subject_name"];

        $query = "INSERT INTO `subjects` (`id`, `semester`, `subject_no`, `subject_name`) VALUES (NULL, '$semester', '$subject_no', '$subject_name')";
        $result = mysqli_query($db, $query);
        if($result){
            echo "Success!";
            echo "<a href='$gobackhref'>click here to go back</a>";
        }
    }elseif(isset($_POST["new_chapter"])){
        $subject_id = $_POST["subject_id"];
        $chapter_no = $_POST["chapter_no"];
        $chapter_name = $_POST["chapter_name"];
        $tg_link = $_POST["tg_link"];

        $query = "INSERT INTO `chapters` (`id`, `subject_id`, `chapter_no`, `chapter_name`, `tg_link`) VALUES (NULL, '$subject_id', '$chapter_no', '$chapter_name', '$tg_link')";
        $result = mysqli_query($db, $query);
        if($result){
            echo "Success!";
            echo "<a href='$gobackhref'>click here to go back</a>";
        }
    }elseif(isset($_POST["new_lecture"])){
        $subject_id = $_POST["subject_id"];
        $title = $_POST["title"];
        $length = $_POST["length"];
        $date = $_POST["date"];
        $instructor = $_POST["instructor"];
        $pcp_centre = $_POST["pcp_centre"];
        $youtube_link = $_POST["youtube_link"];

        $query = "INSERT INTO `lectures` (`id`, `subject_id`, `title`, `length`, `date`, `instructor`, `pcp_centre`, `youtube_link`) VALUES (NULL, '$subject_id', '$title', '$length', '$date', '$instructor', '$pcp_centre', '$youtube_link')";
        $result = mysqli_query($db, $query);
        if($result){
            echo "Success!";
            echo "<a href='$gobackhref'>click here to go back</a>";
        }
    }elseif(isset($_POST["new_resource"])){
        echo "new resource request";
        echo "<br>";
        $title = $_POST["title"];
        $description = $_POST["description"];
        $link = $_POST["link"];

        $query = "INSERT INTO `resources` (`id`, `title`, `description`, `link`) VALUES (NULL, '$title', '$description', '$link')";
        $result = mysqli_query($db, $query);
        if($result){
            echo "Success!";
            echo "<a href='$gobackhref'>click here to go back</a>";
        }else{
            echo "error";
        }
    }

?>