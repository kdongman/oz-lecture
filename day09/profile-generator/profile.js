let name1 = "dong";
console.log(name1);

var lastName = "kwon"
console.log(lastName);

const birthYear = 2000
console.log(birthYear);

console.log(typeof name1)
console.log(typeof lastName)
console.log(typeof birthYear)

let male = true;
let female = false;

console.log(typeof male);

const profile = "권동현\n" +
"2000년생\t  남성"
console.log(profile);

let hobby = ["reading", "gaming", "coding", undefined];
console.log("My hobbies:", hobby.join(", "));

let profile1 = {
  name: "Kwon",
  birthYear: 2000,
  ozStudent: true,
  email: null
}

console.log(typeof profile1.ozStudent);
console.log(typeof profile1.birthYear);
console.log(typeof profile1.email);

let myNull = null;
let myUndefined;

console.log(typeof myNull, typeof myUndefined);
console.log(myNull === myUndefined); //false


console.log(`Name: ${name1}, Birthyear: ${birthYear}`);
