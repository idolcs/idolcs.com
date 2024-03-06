<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin</title>
    <base href="../">
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/admin.css" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7148141514273746"
     crossorigin="anonymous"></script>
</head>

<body>
    <div id="main_wrapper">

        <div class="div_1">
            <p>Create new Redirect</p>
            <form class="form_div" action="admin/form_actions.php" method="post">
                <label for="">
                    <br>
                    <p>Expected id = <?php 
    include "../php/db.php";
    $query = 'SELECT `id` FROM `redirects` ORDER BY `id` DESC LIMIT 1';
    $result = mysqli_query($db, $query);
    if ($result) {
        $row = mysqli_fetch_array($result);
        $new_id = (int)$row['id'] + 1;
        echo $new_id;
    }
    
                    ?></p>
                </label>
                <label for="">
                    <p>Title</p>
                    <input name="title" type="text" maxlength="255">
                </label>
                <label for="">
                    <p>Link</p>
                    <input name="link" type="text">
                </label>
                <input type="hidden" name="new_redirect">
                <button type="submit">Submit</button>
            </form>
        </div>

        <div class="divider_1"></div>

        <div class="div_1">
            <p>Create new Chapter</p>
            <form class="form_div" action="admin/form_actions.php" method="post">
                <label for="">
                    <p>Semester</p>
                    <select id="semester_select">
                        <option disabled selected>---Select Semester---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </label>
                <label for="">
                    <p>Subject</p>
                    <select name="subject_id" id="new_chap_subject">
                        <option disabled selected>---Select Subject---</option>
                    </select>
                </label>
                <label for="">
                    <p>Chapter Number</p>
                    <input name="chapter_no" type="number">
                </label>
                <label for="">
                    <p>Chapter Name</p>
                    <input name="chapter_name" type="text">
                </label>
                <label for="">
                    <p>Telegram Link</p>
                    <input id="new_chap_tg" name="tg_link" type="text">
                </label>
                <input type="hidden" name="new_chapter">
                <button type="submit">Submit</button>
            </form>
        </div>

        <div class="divider_1"></div>

        <div class="div_1">
            <p>Create New Subject</p>
            <form class="form_div" method="post" action="admin/form_actions.php">
                <label for="">
                    <p>Semester</p>
                    <select required name="semester" id="">
                        <option selected="true" disabled="true"value="">---Select Semester---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </label>
                <label for="">
                    <p>Subject Number</p>
                    <input required name="subject_no" type="number">
                </label>
                <label for="">
                    <p>Subject Name</p>
                    <input required name="subject_name" type="Text">
                </label>
                <input name="new_subject" type="hidden">
                <button type="submit">Submit</button>
            </form>
        </div>

        <div class="divider_1"></div>
        
        <div class="div_1">
            <form action="admin/form_actions.php" method="post" class="form_div">
            <p>Create new Lecture</p>
            <label for="">
                <p>Subject id</p>
                <input type="number" name="subject_id">
            </label>
            <label for="">
                <p>Title</p>
                <input type="text" name="title" id="">
            </label>
            <label for="">
                <p>Length</p>
                <input type="text" name="length" id="">
            </label>
            <label for="">
                <p>Date (27/03/2024)</p>
                <input type="text" name="date" id="">
            </label>
            <label for="">
                <p>Instructor</p>
                <input type="text" name="instructor" id="">
            </label>
            <label for="">
                <p>PCP Centre</p>
                <input type="text" name="pcp_centre" id="">
            </label>
            <label for="">
                <p>Youtube Link</p>
                <input type="text" name="youtube_link" id="">
            </label>
            <input type="hidden" name="new_lecture">
            <button type="submit">Submit</button>
        </form>
    </div>
    
        <div class="divider_1"></div>

        <div class="div_1">
            <form action="admin/form_actions.php" method="post" class="form_div">
            <p>Create New Resource</p>
            <label for="">
                <p>Title</p>
                <input type="text" name="title">
            </label>
            <label for="">
                <p>Subject Code</p>
                <input type="number" name="subject_code">
            </label>
            <label for="">
                <p>Description</p>
                <input type="text" name="description">
            </label>
            <label for="">
                <p>Link</p>
                <input type="text" name="link">
            </label>
            <input type="hidden" name="new_resource">
            <button type="submit">Submit</button>
            </form>
        </div>
    
</div>
</body>
<script src="js/admin.js"></script>

</html>