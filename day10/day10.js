// 이항산술연산자
let sum = 10 + 20;
console.log(sum);
let sub = 20 - 10;
console.log(sub);
let multi = 10 * 20;
console.log(multi);
let remain = 10 % 3;
console.log(remain);
let expon = 2 ** 3;
console.log(expon);

//단항산술연산자
let increment = 10;
increment++;
console.log(increment);
let decrement = 10;
decrement--;
console.log(decrement);

// let inc = 10++;  // 불가능함

// 단항산술연산자 : 전치연산 /  후치연산
var num = 10;
let sumNum = ++num; //앞에 사용했으므로 전치 연산
console.log(sumNum);

var num = 10;
let subNum2 = num++; // 뒤에 사용했으므로 후치연산
console.log(subNum2); // num값은 11 subNum2는 10

// 복합 대입 연산자
let x = 10;
x += 5;
console.log(x);
let y = 10;
y -= 5;
console.log(y);
let z = 10;

// 삼항 연산자
// let score = 90;
// let grade = (score >= 90) ? 'A+' : 'B';
// console.log(grade);

// switch문
let food = "melon";
switch(food) {
  case "melon":
  case "apple":
    console.log("fruit");
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruites and vegetables")
    break;
}

// if 문
var score = 90;
if (score >= 90 && score <= 100) {
  console.log("A++학점");
} else if (score >=80) {
  console.log("A학점")
} else if (score >=70) {
  console.log("B학점")
} else {
  console.log("학점없음");
}
