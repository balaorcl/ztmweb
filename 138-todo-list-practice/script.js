// get the input
var input = document.getElementById("userinput");
// get the ADD button
var button = document.getElementById("enter");
// get the unordered list
var ul = document.querySelector("ul");

function createListElement(){
    // This function creates one list element when user press ADD button
    /*
    <div class="wrapper">
        <li class="taskClass">Notebook</li>
        <button class="delClass">Del</button>
    </div>
    */

   // Start - create a list element
   var li = document.createElement("li");
   li.classList.add("taskClass") // add taskClass class to div element
   li.appendChild(document.createTextNode(input.value));
   input.value = "";
   // End - create a list element   

   // Start - create a delete button
   var delButton = document.createElement("button");
   delButton.classList.add("delClass");
   delButton.innerHTML = "Del";
   // End - create a delete button


    // Start - create a div element
    var div = document.createElement("div");
    div.classList.add("wrapper");    // add wrapper class to div element
    div.append(li, delButton)
    // End - create a div element 

   // append the div element to list ul
   ul.appendChild(div);
}

// returns input value length
function inputLength(){
    return input.value.length;
}

// Add one list element after user clicks ADD button
function addListAfterClick(){
    console.log("I am working");    
    if (inputLength() > 0) {
        console.log("I am working here alsdo");  
        createListElement();
    }
}

// Add one list element after user ENTER keypress
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// toggle list element strikethrough when clicked
function doneTask(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("done");
    }
}

// when delete button is clicked, delete the fill div element
function deleteListElement(element) {
    if (element.target.className === "delClass") {
        element.target.parentElement.remove();
    }
}

// handle ul list click
function handleUlClick(element) {
    // for strike through toggle
    doneTask(element);
    // to delete if the user pressed delete button
    deleteListElement(element);
}

// handle ul list click add Event
ul.addEventListener("click", handleUlClick)
// to add list element when ADD button click
button.addEventListener("click", addListAfterClick);
// to add list item after keypress
input.addEventListener("keypress", addListAfterKeypress)
