const maxScore = 100;

let input = prompt("점수를 입력하세요.");
let score = Number(input);

// 0~100, 숫자가 아닐시 나오는문구. 유효성검사.
if (!isNaN(score) && score < 0 && score > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  score++;
  score *= 1.1;
  if (score > 100) score = 100;
  let finalScore = score + 5;
  if (finalScore > 100) finalScore = 100;
  let result = score >= 60 ? "Pass" : "Fail";

  console.log(`Final Score: ${finalScore}`);

  // 등급부여
  var grade;
  if (finalScore >= maxScore) {
    grade = "S";
  } else if (finalScore >= 90) {
    grade = "A";
  } else if (finalScore >= 80) {
    grade = "B";
  } else if (finalScore >= 70) {
    grade = "C";
  } else if (finalScore >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`Grade: ${grade}`);

  console.log(`Status: ${result}`);

  //메세지
  let message = grade;
  switch (message) {
    case "S":
      if (finalScore === 100) {
        console.log(`Message: "Perfect Score!”`);
      } else {
        console.log(`Message: “Super!!”`);
      }
      break;
    case "A":
      console.log(`Message: "Excellent work!"`);
      break;
    case "B":
      console.log(`Message: "Good job!"`);
      break;
    case "C":
      console.log(`Message: "Satisfactory performance."`);
      break;
    case "D":
      console.log(`Message: "Needs improvement."`);
      break;
    default:
      console.log(`Message: "Please try harder!"`);
      break;
  }
}
