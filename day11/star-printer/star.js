const maxStars = 10;
const STAR = "*";
var stars;

const getPromptInput = () => {
  let input;
  let isNotValid = true;

  while (isNotValid) {
    let inputStr = prompt("출력할 별 갯수를 입력하세요.")
    input = Number(inputStr);
    if (!isNaN(input) && input >= 1 && input <= maxStars) {
      isNotValid = false;
    } else {
      console.log("Invalid input! Enter a number between 1 and 10.");
    }
  }
  return input;
}

function printStar(count = 1) {
  stars = "";
  for (let i = 0; i < count; i++) {
    stars += STAR;
  }
  console.log(stars); 
}

const input = getPromptInput();
printStar(input);