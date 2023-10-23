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
            <h2>Yash</h2>
            <p>
                66% completed as of 22/09/2023
            </p>
        </div>
        <div class="div_1">
            <div id="table_wrapper">
                <table>
                    <tr class="head_tr">
                        <td>Subject</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>Computer Organisation and Design</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5"></td>
                    </tr>
                    <tr>
                        <td>Programming with Python 1</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="6" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="7" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="8" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="9" checked></td>
                    </tr>
                    <tr>
                        <td>Free and Open Source Software</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5"></td>
                    </tr>
                    <tr>
                        <td>Database Systems</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="6" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="7" checked></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="8"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="9"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="10"></td>
                    </tr>
                    <tr>
                        <td>Discrete Maths</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="6"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="7"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="8"></td>
                    </tr>
                    <tr>
                        <td>Descriptive Statistics</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="6"></td>
                    </tr>
                    <tr>
                        <td>Soft Skills Development</td>
                        <td><input type="checkbox" data-subject="107" data-lesson="1"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="2"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="3"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="4"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="5"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="6"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="7"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="8"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="9"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="10"></td>
                        <td><input type="checkbox" data-subject="107" data-lesson="11"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>
<script src="../js/leaderboard.js"></script>

</html>