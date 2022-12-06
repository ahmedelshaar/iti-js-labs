const checkUsername = username => /^[A-Za-z]+$/.test(username) && username != null;

const checkName = name => /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(name) && name != null;

const checkEmail = email => /^\S+@\S+\.\S+$/.test(email) && email != null;

const checkNumber = number => isNaN(Number(number)) || number == null ? false : true;

const checkDeparment = department => {
  const departments = ['OS', 'SD', 'AI'];
  return departments.includes(department);
}

const getUsername = _ => {
  let usernamePrompt = "Enter your username?";
  while(true){
    let username = prompt(usernamePrompt);
    if(checkUsername(username)){
      console.log(username.toUpperCase());
      break;
    }else{
      usernamePrompt = "Please Enter Valid Username:"; 
    }
  }
}

const getStudent = () => {
  let studentDataPrompt = "Enter data for Student";
  while(true){
    let flag = true;
    let studentData = prompt(studentDataPrompt).split(',');
    if(studentData.length != 4){
      studentDataPrompt = "plz enter all field for student";
      flag = false;
    }else if(!checkName(studentData[0])){
      studentDataPrompt = "Not Valid name";
      flag = false;
    }else if(!checkNumber(studentData[1])){
      studentDataPrompt = "Not Valid age";
      flag = false;
    }else if(!checkEmail(studentData[2])){
      studentDataPrompt = "Not Valid email";
      flag = false;
    }else if(!checkDeparment(studentData[3])){
      studentDataPrompt = "Not Valid department";
      flag = false;
    }
    if(flag){
      return studentData;
    }
  }
}

const getNumberOfStudent = _ => {
  let numberOfStudentPrompt = "Enter your Number of Students?";
  let students = [];
  while(true){
    let numberOfStudents = prompt(numberOfStudentPrompt);
    if(checkNumber(numberOfStudents)){
      let avgAge = 0;
      for(let i = 0; i < numberOfStudents; i++){
        let student = getStudent();
        students.push(student);
        avgAge += +student[1];
      }
      console.table(students)
      console.table("avgAge = ", avgAge);
      break;
    }else{
      numberOfStudentPrompt = "Please Enter Valid Number:"; 
    }
  }
}
  