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
  <link rel="stylesheet" href="../css/leaderboard.css?v=1.1" />
</head>

<body>
  <div id="main_wrapper">
  <a href="/" class="back_arrow_wrapper">
        <img src="../assets/back_arrow.webp" alt="">
        <p>Back</p>
      </a>
    <div class="div_1">
        <h2>Leaderboard</h2>
        <p>
            To develop a sense of healthy competition, let's compete within ourselves and complete the whole syllabus in the process.
        </p>
    </div>
    <div class="div_1">
        <div id="table_wrapper">
        <table>
            <tr class="head_tr">
                <td>#</td>
                <td>Name</td>
                <td>Syllabus %</td>
                <td>Expand</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Harsh</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="73"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ayush</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="58"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Yash</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="44"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Mercury</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="39"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Venus</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="36"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Earth</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="33"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>Mars</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="33"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>8</td>
                <td>Jupiter</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="31"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
            <tr>
                <td>9</td>
                <td>Saturn</td>
                <td>
                    <div class="syllabus_wrapper">
                        <div class="syllabus_progress" data-progress="30"></div>
                    </div>
                </td>
                <td>
                    <img src="../assets/view_icon.png" alt="">
                </td>
            </tr>
        </table>
        </div>
    </div>
  </div>
</body>
<script src="../js/leaderboard.js"></script>
</html>