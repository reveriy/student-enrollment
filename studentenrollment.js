
let DSA = [];
let PL = [];
let Networks = [];
function selectSubject() {
  let subjectChoice = prompt("Select the subject of choice to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();
  return subjectChoice;
}
function subjectOperations(subjectArray) {
  while (true) {
    let operation = prompt("Select an option:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();
    
    switch (operation) {
      case 'A':
        let studentToEnroll = prompt("Enter the name of the student to enroll:");
        subjectArray.push(studentToEnroll);
        console.log(`${studentToEnroll} has been enrolled in the subject.`);
        break;
        
      case 'B':
        if (subjectArray.length === 0) {
          console.log("No students enrolled in this subject.");
        } else {
          console.log("Currently enrolled students: " + subjectArray.join(", "));
          let studentToUnenroll = prompt("Enter the name of the student to unenroll:");
          let index = subjectArray.indexOf(studentToUnenroll);
          if (index !== -1) {
            subjectArray.splice(index, 1);
            console.log(`${studentToUnenroll} has been unenrolled from the subject.`);
          } else {
            console.log(`${studentToUnenroll} is not enrolled in the subject.`);
          }
        }
        break;
        
      case 'C':
        return; 
      case 'D':
        console.log("Enrolled students in each subject:");
        console.log("DSA: " + DSA.join(", "));
        console.log("PL: " + PL.join(", "));
        console.log("Networks: " + Networks.join(", "));
        return;
        
      default:
        console.log("Invalid option. Please try again.");
    }
  }
}
while (true) {
  let subjectChoice = selectSubject();
  
  switch (subjectChoice) {
    case 'A':
      subjectOperations(DSA);
      break;
      
    case 'B':
      subjectOperations(PL);
      break;
      
    case 'C':
      subjectOperations(Networks);
      break;
      
    case 'D':
      console.log("Exiting the program.");
      console.log("Enrolled students in each subject:");
      console.log("DSA: " + DSA.join(", "));
      console.log("PL: " + PL.join(", "));
      console.log("Networks: " + Networks.join(", "));
      return;
      
    default:
      console.log("Invalid subject choice. Please try again.");
  }
}
