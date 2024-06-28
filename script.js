const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add task whenever button is clicked
function addTask(){
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// add completed and remove functionality to tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save Task from refreshing
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// show tasks whenever opens broswer
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();