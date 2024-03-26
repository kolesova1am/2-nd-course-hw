//Задание 1
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(4,5));

//Задание 2
function parity(num) {
    if (num % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное"
    }
}
console.log(parity(5));

//Задание  3.1 
function square(num) {
    console.log(num * num);
}

//Задание 3.2
function returnSquare(num) {
    return num * num;
}

//Задание 4
function question() {
    let age = prompt("Сколько вам лет?");
    if (!age){
        return
    }
    age = Number(age)

    if (age < 0 || isNaN(age)) {
        console.log("Вы ввели неправильное значение");
    } else if (age <= 12) {
        console.log("Привет друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}
question()
//Задание 5
function numbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

//Задание 6
function cube() {
    let num = prompt("Введите число:");
    if (!num){
       return
    }
    num = Number(num);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}
console.log(cube());

//Задание 7
function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 2,
    getArea,
    getPerimeter,
};

const circle2 = {
    radius: 5,
    getArea,
    getPerimeter,
};

//Задание 8
function monthNumber(month) {
    if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Лето';
    } else if (month >= 9 && month <= 11) {
        return 'Осень';
    } else if (month >= 1 && month <= 2 || month === 12){
        return 'Зима';
    } else {
        return 'Ошибка'
    }
}

console.log(monthNumber(prompt("Введите число:")));   
