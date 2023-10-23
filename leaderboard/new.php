<?php
include "../php/db.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IDOL CS</title>
    <link rel="stylesheet" href="../css/base.css?v=1.1" />
    <link rel="stylesheet" href="../css/expand.css?v=1.1" />
</head>

<body>
    <div id="main_wrapper">
        <a href="/leaderboard" class="back_arrow_wrapper">
            <img src="../assets/back_arrow.webp" alt="">
            <p>Back</p>
        </a>
        <div class="divider_1"></div>
        <div class="div_1">
                <p>Enter your first name</p>
                <input type="text" placeholder="Mukesh">
                <button>Submit</button>
            </div>
            <div class="divider_1"></div>
            <div class="divider_1"></div>
            <div class="div_1">
                <p>OR</p>
            </div>
            <div class="divider_1"></div>
            <div class="divider_1"></div>
            <div class="div_1">
                <p>Enter your secret key</p>
                <input type="text" placeholder="Mukesh">
                <button>Submit</button>
        </div>
    </div>
</body>
<script src="../js/leaderboard.js"></script>

</html>