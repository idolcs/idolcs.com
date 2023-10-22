<?php

include "../php/db.php";

    if(isset($_GET["subjects"])){
        $semester = $_GET["subjects"];
        $query = "SELECT * FROM `subjects` WHERE `semester` = '$semester'";
        $result = mysqli_query($db, $query);
        if($result){
            $array_one = [];
            while($row = mysqli_fetch_assoc($result)){
                array_push($array_one, $row);
            }
            $json = json_encode($array_one);
            print_r($json);
        }
    }
?>