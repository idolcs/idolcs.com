<?php
    if(!isset($db)){
        $db = mysqli_connect("localhost", "root", "", "u245833061_idol");
        // $db = mysqli_connect("localhost", "u245833061_idoluser", "StrongEnough?123", "u245833061_idol");
        global $db;
    }