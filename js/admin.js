function fetchUrl(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        return request.responseText;
    }
}

// let subjects_array = fetchUrl("admin/get.php?subjects");
// console.log(subjects_array);

let semester_select = document.getElementById("semester_select");

semester_select.addEventListener("change", function(){
    let sem = semester_select.value;
    let url = `admin/get.php?subjects=${sem}`;
    let subjects_array = fetchUrl(url);
    subjects_array = JSON.parse(subjects_array);
    removeAllOptions("new_chap_subject");
    for(let i = 0; i < subjects_array.length; i++){
        addOption("new_chap_subject", subjects_array[i]["subject_no"], subjects_array[i]["subject_name"])
        // console.log(subjects_array[i]["subject_name"]);
    }
})

function addOption(selectId, optionValue, optionText) {
    var select = document.getElementById(selectId);
    var option = document.createElement("option");
    option.value = optionValue;
    option.text = optionText;
    select.add(option);
}

function removeAllOptions(selectId) {
    var select = document.getElementById(selectId);
    for(var i = select.options.length - 1; i >= 0; i--) {
        select.remove(i);
    }
}

let new_chap_tg = document.getElementById("new_chap_tg");
new_chap_tg.addEventListener("change", function(){
    // this.removeEventListener; 
    let raw_link = new_chap_tg.value;
    // "https://t.me/idol_cs/33?comment=25";
    // "tg://resolve?domain=idol_cs&post=34&comment=25";
    let new_link = "tg://resolve?domain=";
    raw_link = raw_link.replace("https://t.me/", "");
    let id_array = raw_link.split("/");
    console.log(`id array = ${id_array}`);
    new_link += id_array[0];
    if(id_array[1].includes("?")){
        id_array[1] = id_array[1].replace("?", "&");
        new_link += `&post=${id_array[1]}`;
    }else{
        new_link += `&post=${id_array[1]}`;
    }
    new_chap_tg.value = new_link;
})