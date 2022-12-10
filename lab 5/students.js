const checkName = name => /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(name);
const pascalCase = string => {
    let words = string.toLowerCase().split(' ');
    let textArray = [];
    words.forEach(word => {
      textArray.push(word[0].toUpperCase() + word.substr(1));
    });
    return textArray.join(' ');
}

window.addEventListener("load",function(){
    let addButton = document.querySelector("input[value=Add]");
    let nameTxtBox = document.querySelector("input[name=studentName]");    
    let gradeTxtBox = document.querySelector("input[name=studentGrade]");
    let tableData = document.querySelector("table#studentsData");

    let nameError = document.querySelector("#nameError");
    let gardeError = document.querySelector("#gardeError");
    let addError = document.querySelector("#addError");

    let filter = document.querySelector("select[name=filter]");
    let sort = document.querySelector("select[name=sort]");

    const filterGrades = function(value){
        if(typeof(value) == "string") filter.value = value;
        let grades = document.querySelectorAll("#studentsData tr td:nth-child(2)");
        if(filter.value == "success"){
            grades.forEach((grade) => {
                if(+grade.innerText < 60){
                    grade.parentElement.style.display = 'none';
                }else{
                    grade.parentElement.style.display = 'table-row';
                }
            })
        }else if(filter.value == "all"){
            grades.forEach((grade) => {
                grade.parentElement.style.display = 'table-row';
            })
        }else{
            grades.forEach((grade) => {
                if(+grade.innerText >= 60){
                    grade.parentElement.style.display = 'none';
                }else{
                    grade.parentElement.style.display = 'table-row';
                }
            })
        }
    }

    const sortStudent = function(){
        let students = document.querySelectorAll("#studentsData tr");
        if(sort.value == "name"){
            students = [...students].sort((a, b) => {
                return a.innerText.charCodeAt(0) - b.innerText.charCodeAt(0);
            })
        }else{
            students = [...students].sort((a, b) => {
                return +b.innerText.split('\t')[1] - +a.innerText.split('\t')[1] 
            })
        }
        tableData.innerHTML = "";
        tableData.append(...students); 
    };

    filter.onchange = filterGrades;

    sort.onchange = sortStudent;

    // observe
    let nameNotValid = false;
    nameTxtBox.onblur = function(){
        if(nameTxtBox.value.trim() == ""){
            nameError.style.display = "inline";
            nameNotValid = true;
        }else{
            nameError.style.display = "none";
            nameNotValid = false;
        }
    }

    let gradeNotValid = false;
    gradeTxtBox.onblur = function(){
        if(gradeTxtBox.value.trim() == "" || gradeTxtBox.value < 0 || gradeTxtBox.value > 100){
            gardeError.style.display = "inline";
            gradeNotValid = true;
        }else{
            gardeError.style.display = "none";
            gradeNotValid = false;
        }
    }

    // validate
    nameTxtBox.onkeypress = function(event){

        if(
            !checkName(nameTxtBox.value + event.key) &&
            (event.key == " " && nameTxtBox.value.at(-1) == " ")
        ){
            event.preventDefault();
        }
    }

    gradeTxtBox.onkeypress = function(event){
        if(isNaN(event.key)){
            event.preventDefault();
        }
    }
    
    gradeTxtBox.onpaste = function(event){
        if(isNaN(event.clipboardData.getData('text/plain'))){
            event.preventDefault();
        }
    }

    
    //action adding
    addButton.onclick=function(){
        if(gradeNotValid || nameNotValid) return;

        let nameStudent = document.querySelectorAll("#studentsData tr td:first-child");
        let name = pascalCase(nameTxtBox.value.trim());


        // Duplicate
        let repeated = false;
        nameStudent.forEach((e) => {
            if(e.innerText == name){
                addError.style.display = "inline";
                repeated = true;
            }
        })

        if(repeated){
            return;
        }else{
            addError.style.display = "none";
        }

        let trObject=document.createElement("tr");//<tr></tr>
        let tdObject=document.createElement("td");//<td></td>
        tdObject.innerText=name;
        trObject.append(tdObject);
        tableData.append(trObject);

        tdObject=document.createElement("td");//<td></td>
        tdObject.innerText = gradeTxtBox.value;
        trObject.append(tdObject);
        tableData.append(trObject);

        tdObject=document.createElement("td");//<td></td>
        let deleteButton=document.createElement("button");
        deleteButton.innerText="delete";
        deleteButton.onclick=function(){
            this.parentElement.parentElement.remove()
        }
        tdObject.append(deleteButton);
        trObject.append(tdObject);
        
        let departmentValue=document.querySelector("input[name=Department]:checked").value;
        trObject.classList.add(departmentValue);

        // reset filter
        filterGrades("all");
        sortStudent();
    };

});