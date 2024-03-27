//Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
function returnStr(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

//Задание 5
function randomNum() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

//Задание 6
function randomNumbers(n) {
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}

//Задание 7
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //генерация случайного числа
}

//Задание 8
console.log(new Date()); //текущие дата и время

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function formDate() {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    return `Дата: ${date.getDate()} ${months[date.getmonth()]} ${date.getFullYear()} -это ${days[date.getDay()]}\n Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formDate(new Date()));

//Задание 11
let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//сортировка
fruits = fruits.sort(() => Math.random() - 0, 5);
alert(fruits);
//запрос пользователю 
let guessFirst = prompt('Чему равнялся первый элемент массива?');
let guessLast = promt('Чему равнялся последний элемент массива?');
//проверка 
if (guessFirst === fruits[0] && guessLast === fruits[fruits.length - 1]) {
    alert("Поздравляю, Вы угадали оба слова!");
} else if (guessFirst === fruits[0] || guessLast === fruits[fruits.length - 1]){
    alert("Вы были близки к победе!");
} else { 
    alert("Вы ответили неверно.")
}
