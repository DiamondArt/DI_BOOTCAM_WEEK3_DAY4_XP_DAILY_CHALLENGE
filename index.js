/***********************************************************************************
 * Exercise challenge : Coloring Game
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : Build a Todo List
 * @typeof {string|Array}
 * @typeof {number}
 * @typeof {function}
 * **********************************************************************************/ 
let close = document.getElementsByClassName("close");
let list = document.querySelector('ul');
let itemLi = document.getElementsByTagName('li');

/******************************************************************************
 * @function closeTask
 * @description: close a task
 * @returns {void}
 ******************************************************************************/
function closeTask() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.remove()
        }
      }
}

/******************************************************************************
 * @function newTask
 * @description: add new task in the list of task
 * @returns {void}
 ******************************************************************************/
function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue.trim() === '') {
        alert("You must write something!");
    } 
     else if(itemLi.length !== 0){
        for(let i = 0; i < itemLi.length; i++){
            if(inputValue.trim() === itemLi[i].textContent.slice(0, -1).trim()){
                console.log("task exist")
            } else {
                document.getElementById("task-list").appendChild(li);
            }
        }
    }else{ document.getElementById("task-list").appendChild(li); }

    document.getElementById("task").value = "";
    let spanClose = document.createElement("SPAN");
    let spanBox = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    spanClose.className = "close";
    spanBox.className = "checkbox"
    spanClose.appendChild(txt);
    li.appendChild(spanClose);
    li.appendChild(spanBox)
    console.log(itemLi);
    closeTask()
}
// Event list for button action
document.querySelector("#addTask").addEventListener('click',newTask);
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

