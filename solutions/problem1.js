function getStudentGrade() {
  let marks = parseInt(prompt("Enter student marks(o-100):"));
  if (iSNaN(marks) || marks < 0  ||marks > 100) {
    console.log("Invalid input. Enter a number between 0and 100");
    return;
  }


  let grade;
  if (marks > 79) {
    grade = "A";
  }else if (marks >= 60) {
    grade = "B";
  }else if (marks >= 50) {
    grade = "c";
  }else if (marks >= 40) {
    grade = "D";
  }else  {
    grade = "E";
 }

console.log(`The student's grade is: ${grade}`);

}

