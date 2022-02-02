// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

const getMax = (min, max) => {
    if (min > max) {
        console.log(min + ' > ' + max);
    } else if (min < max) {
        console.log(min + ' < ' + max);
    } else {
        console.log(min + ' = ' + max);
    }
}

getMax(3333, 33333);

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

const apartmentNumber = prompt('Enter the number of your apartment');

switch (true) {
    case (apartmentNumber >= 1 && apartmentNumber < 21):
        alert('first entrance');
        break;
    case (apartmentNumber >= 21 && apartmentNumber < 49):
        alert('second entrance');
        break;
    case (apartmentNumber >= 49 && apartmentNumber < 91):
        alert('third entrance');
        break;
    default:
        alert('another entrance');
}

//- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

const number = +prompt('10?');

alert(number === 10 ? 'true' : 'false');

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

const x = true;

if (typeof x === 'number')
    console.log(1);
else if (typeof x === 'string')
    console.log(2);
else if (typeof x === 'object')
    console.log(3);
else if (typeof x === 'boolean') {
    console.log(4);
}
else
    console.log('else');

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
temperature(prompt('Enter the T'));

function temperature(x) {
    switch (true) {
        case (x < 10 || x > 22):
            console.log('Not today');
            break;
        default:
            console.log('Go go go');
    }
}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

getPrize(+prompt('enter a number'));

function getPrize(x) {
    switch (true) {
        case x === 1:
            console.log('car');
            break;
        case x === 2:
            console.log('moto');
            break;
        case x === 3:
            console.log('mobile');
            break;
        case x === 4:
            console.log('and');
            break;
        case x === 5 :
            console.log('etc');
            break;
        default:
            console.log('wrong number');
    }
}