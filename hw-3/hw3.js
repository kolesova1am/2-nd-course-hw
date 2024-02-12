//Задание 1
let password = 'пароль'
let userPassword = prompt('Введите пароль');
if (userPassword === password) {  // строгое сравнение
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = 120;
let e = 60;
if (d > 100|| e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задвние 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default : alert('Ошибка');
        break;
}

