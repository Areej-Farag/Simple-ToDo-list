
let list = document.getElementById("list");
let sec= document.getElementsByTagName('section')[0];

function createTask(value , C) {
    let task = document.createElement("li");
    task.setAttribute("class", "task");
    task.setAttribute("id", `task${C}`);
    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delete");
    delBtn.innerHTML = `<i class="fa-regular fa-trash-can delete"></i>`;
    let doneBtn = document.createElement("button");
    doneBtn.setAttribute("class", "done");
    doneBtn.innerHTML = `<i class="fa-solid fa-check done"></i>`;
    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-pen edit"></i>`;
    let text = document.createElement("p");
    text.innerHTML = value;
    let icons = document.createElement("div");
    icons.setAttribute("class", "icons");
    icons.appendChild(doneBtn);
    icons.appendChild(editBtn);
    icons.appendChild(delBtn);
    task.appendChild(text);
    task.appendChild(icons); 
    list.appendChild(task);
    delBtn.addEventListener("click", (ele) => {
        ele.target.parentNode.parentNode.parentNode.remove();
        localStorage.removeItem(`task${C}`);
    });
    doneBtn.addEventListener("click", (ele) => {
        let task = ele.target.parentNode.parentNode.parentNode;
        task.style.opacity = "0.5";
    });
    editBtn.addEventListener("click", (ele) => {
        let task = ele.target.parentNode.parentNode.parentNode.children[0];
        console.log(task);
        task.contentEditable = true;
        task.focus();
    });
}
function addTask() {
    let inputValue = document.getElementById("input").value;
    if(inputValue) {
    let count = list.children.length;
    createTask(inputValue, count)
    localStorage.setItem(`task${count}`, inputValue);
}
}

function mapTasks() {
   for (let i = 0; i < localStorage.length; i++) {
    let task = localStorage.getItem(`task${i}`);
     createTask(task, i);
   }
}
// let CLR= document.createElement('button')
//     CLR.setAttribute('class' , 'clear')
//     CLR.innerText= 'Clear';
//     sec.appendChild(CLR)
let CLR = document.getElementById('clear')
mapTasks();
if(localStorage.length != 0){
    console.log("LLLL")
    CLR.addEventListener('click' , ()=>{
        localStorage.clear();
        list.replaceChildren('')
        
    })
}
else{
    console.log("mmmm")
    CLR.style.visibility = 'hidden'
}

