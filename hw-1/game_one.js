function monthNumber() {
const month = Number(prompt("Введите число;" ))
    if (month >= 3 && month <= 5) {
        alert('Весна');
    } else if (month >= 6 && month <= 8) {
        alert('Лето');
    } else if (month >= 9 && month <= 11) {
        alert('Осень');
    } else if ( month >= 1 && month <= 2 || month === 12){
        alert('Зима');
    } else {
        alert('Ошибка');
    }
}

function gameWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let first = prompt('Чему равнялся первый элемент массива?');
    if (first === null) {    
            alert ('Вы отменили ввод');
            return;
    }
    let last = prompt('Чему равнялся последний элемент массива?');
    if (last === null) {    
        alert ('Вы отменили ввод');
        return;
    }
    if (first.toLowerCase() === words[0].toLowerCase() && last.toLowerCase() === words[words.length - 1].toLowerCase()) {
         alert('Поздравляю, Вы угадали!');
    } else if (first.toLowerCase() === words[0].toLowerCase() || last.toLowerCase() === words[words.length - 1].toLowerCase()) {
         alert('Вы были близки к победе!');
    } else {
         alert('Вы ответили неверно.');
    }
}

