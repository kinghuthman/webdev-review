// const myName = "Adelia";

// let age = 31;
// console.log(myName);

// console.log(age);

// let itsMyBirthdayToday = 1;

// age = age + itsMyBirthdayToday;

// console.log({ age });

function countDown(num) {
  if (num <= 0) {
    return;
  } else {
    console.log(num);
    num--;
    countDown(num);
  }
}
countDown(5);
