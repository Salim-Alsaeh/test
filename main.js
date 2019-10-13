function square(monkey) {
  return monkey * monkey;
}
// Intro to functions
function compoundInterest(p, r, n, t) {
  return p * ((1 + (r / n)) ** (n*t))
}
// Booleans and comparisions
function oldEnoughToDrive(age) {
  if (age > 16){
    return true;
  }
}

function sameLength(str1 , str2) {
  if (str1.length === str2.length)
    return true
  else
    return false
}
function passwordLongEnough(password) {
  if (password.length >= 8)
    return true;
}
function rentCar(name, age,day) {
  if ((age > 18 && age < 21 && (day === "monday" || day === 'tuesday')) || (age < 18 && (name === 'Joe' || name === 'joe')) )
    return `You cant drive ahole, ${name}`;
  else
    return `Here are the keys, ${name}`;
}
function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function randIntValues(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min))+ min
}

// Repetition

function sum(s, n) {
  if (n+1 === s){
    return 0;
  }
  return n + sum(s,n-1);
}

function fict(n) {
  if (n === 0){
    return 1
  }
  return n * fict(n - 1);
}
function repeatString(str, count) {
  if (count === 0){
    return ''
  }
  return str + repeatString(str, count - 1)
}

function fibno(num) {
  if (num >= 0 && num < 2){
    return 1;
  }
  return fibno(num - 2) + fibno(num - 1);
}

function fibnoWhile(num) {
  var f1 = 1;
  var fprev = 1;
  var i = 1;
  while (i < num){
    var temp = f1;
    f1 = f1 + fprev;
    fprev = temp;
    i++;
  }
  return f1;
}
function multiplyBy10(num, n){
  if (n === 0){
    return num;
  }
  return 10 * multiplyBy10(num, --n)
}
function inc(x) {
  return x + 1;
}
function dec(x) {
  return x - 1;
}

function add(x , y) {
  if (x === 0 ){
    return y;
  }
  return add(dec(x) , inc(y))
}
function isEvenRec(num) {
  if (num === 0){
    return true;
  }
  if (num < 0){
    return false;
  }
  return isEvenRec(num - 2)
}
function multiplyRec(x , y) {
  if (y === 0){
    return 0;
  }
  return x + multiplyRec(x , --y)
}

function rango(x , y) {
  if (x < y ){
    x = x+1;
    console.log(x);
    return x + ", " + rango(x,y) ;
  } else
  return ''
}

function lentho(str, x ) {
  if (str === "") {
    return x;
  }
  return lentho(str.slice(1), ++x)
}

function reverseStringo(str) {
  var rStr = '';
  var i = 1;

  while (i <= str.length ){
    rStr = rStr +  str[str.length - i];
    i++;
  }
  return rStr;
}
function remove(arr, element) {
  var i = 0;
  while (i < arr.length){
    if (arr[i] === element){
      arr.splice(i, 1);
      i--;
    }
    i++;
  }
  return arr;
}
//

function isEven(arg) {
  if (arg % 2 === 0){
    return true;
  }
}

function keeps(arr, condition) {
  let newArr = [];
  let x;
  for (var i = 0; i < arr.length; i++){
    if (condition(arr[i]) === true){
      newArr.push(arr[i]);
    }
  }
}

keeps([1,2,3,4,5,6,7], isEven);

function keep(arr, arg) {
  //let splittedArr = arr.split('');
  let newArr = [];
  let x;

  for (var i = 0 ; i < arr.length; i++){
    if (arg === 'even'){
      if (arr[i] % 2 === 0){
        newArr.push(arr[i]);
      }
    } else if (arg === 'odd'){
      if (arr[i] % 2 !== 0){
        newArr.push(arr[i]);
      }
    } else {
      console.log('your wish is not granted')
    }
  }
  return newArr;
}

function firstAndLast(num) {
  let firstNum = 0;
  let lastNum = 0;
  lastNum = num % 10;
  num = num / 10;
  while (num  > 10){
    num = num / 10;
    firstNum = Math.floor(num);
    console.log(num, firstNum);
  }
  return firstNum + lastNum
}

function stars() {
  for (var  i = 0 ; i <= 5 ; i++){
    for (var  j = 0 ; i <= 5 ; i++){
    }
  }
}