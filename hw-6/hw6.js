//Задание 1
const number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    if (number[i] === 10) break;
}

//Задание 2
const item = [1, 5, 4, 10, 0, 3];
const index = item.indexOf(4);
console.log(index);

//Задание 3
const items = [1, 3, 5, 10, 20];
const num = items.join(' ');
console.log(num);

//Задание 4
let arr = [];
for (let i = 0; i < 3; i++) {
    let addArr = [];
    for (let j = 0; j < 3; j++) {
        addArr.push(1);
    }
    arr.push(addArr);
}
console.log(arr);

//Задание 5
const array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

//Задание 6
let ar = [9, 8, 7, 'a', 6, 5];
ar.sort((b, c) => b - c).pop();
console.log(ar);

//Задание 7
let a = [9, 8, 7, 6, 5]
let answer = Number(prompt('Угадай число'));
if (a.includes(answer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
let str = 'abcdef';
let revStr = str.split('').reverse().join('');
console.log(revStr);

//Задание 9
const mas = [[1, 2, 3,], [4, 5, 6]];
const flatMas = mas.flat();
console.log(flatMas);

//Задание 10
const mass = [1, 3, 5, 7, 9];
for (let i = 0; i < mass.length - 1; i++) {
    console.log(mass[i] + mass[i + 1]);
}

//Задание 11
function squareNumbers(m) {
    return m.map(num => num * num);
}

//Задание 12
function getLengthWords(words) {
    return words.map(words => words.length);
}

//Задание 13
function getLengthWords(words) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

