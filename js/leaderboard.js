let syllabus_progress = document.getElementsByClassName("syllabus_progress");

for(let i = 0; i < syllabus_progress.length; i++){
    syllabus_progress[i].style.width = syllabus_progress[i].getAttribute("data-progress") + "%"; 
}