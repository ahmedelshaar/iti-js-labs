let form = document.querySelector('#addTask');
let input = document.querySelector('[name=task]');
let error = document.querySelector('#error');
let deletes = document.querySelectorAll('img');
let table = document.querySelector('table');
let checks = document.querySelectorAll('[type=checkbox]');

const checkTask = function(){
  let toggle = this.parentElement.parentElement.querySelectorAll('td')[1];
  if(toggle.className == "")
    toggle.className = "checked";
  else
    toggle.className = "";
};

const deleteTask = function(){
  this.parentElement.parentElement.remove();
};

checks.forEach((item) => {
  item.addEventListener('click', checkTask)
})

deletes.forEach((item) => {
  item.addEventListener('click', deleteTask)
})

form.addEventListener('submit', function(event){
  event.preventDefault();
  if(input.value.trim() == ""){
    error.style.display = "block";
    return;
  }else{
    error.style.display = "none";
  }
  input.value.trim()
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = checkTask;
  td.append(checkbox);
  tr.append(td);
  td = document.createElement("td");
  td.innerText = input.value.trim();
  tr.append(td);
  td = document.createElement("td");
  let img = document.createElement("img");
  img.src = "image/delete.png";
  img.onclick = deleteTask;
  td.append(img);
  tr.append(td);
  table.append(tr);
  input.value = "";
});