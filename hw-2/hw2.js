//Задание 1
let a=10 // создание переменной
alert(a); // вывод значения а
a=20 // присваиваем а значение 20
alert(a); // выводим новое значение а

//Задание 2
const iPhoneYearRelease = 2007; // константа с годом выпуска первого iphone
alert(iPhoneYearRelease); // вывод значения

//Задание 3
const jsCreator = "Brendan Eich"; // константа с именем создателя JS
alert(jsCreator) 

//Задание 4
let num1=10, num2=2; // создание двух переменных
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

//Задание 5
let result=2 ** 5; // возведение 2 в 5 степень
alert(result);

//Задание 6
let b = 9;
let c = 2;
let remainder = b % c; // остаток деления
alert(remainder);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++; //+1
num--; //-1
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9
let user = {
    name: "Alina",
    age: 21,
    isAdmin: true
}

//Задание 9.1
user["city of residence"] = 'Togliatti';

//Задание 9.2
user.age = 30;

//Задание 9.3
delete user["city of residence"];

//Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Задание 10
let userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`);


