<?php
    include "../php/db.php";

    $id = $_GET["id"];
    $query = "SELECT `url` FROM `redirects` WHERE `id` = '$id'";
    $result = mysqli_query($db, $query);
    if($result){
        $row = mysqli_fetch_array($result);
        $link = $row["url"];
        header("Location: $link");
    }

?>