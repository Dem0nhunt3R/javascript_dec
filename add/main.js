// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

console.log('The array is ' + (friends.length >= 3) ? 'huge' : 'muy pequeño');

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

const a = +prompt('a');
const b = +prompt('b');
const c = +prompt('c');
isMiddle(a, b, c);

function isMiddle(a, b, c) {
    switch (true) {
        case ((a > b && a < c) || (a < b && a > c)):
            console.log(a);
            break;
        case ((b > a && b < c) || (b < a && b > c)):
            console.log(b);
            break;
        default:
            console.log(c);
    }
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a1 = 3, b1 = 2;
let result = (a1 + b1) < 4 ? 'not enough' : 'too much';
console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = -100;
if (num <= 100 && num >= -100) {
    console.log('Number ' + num + ' ' +
        ((num <= 100 && num > 0) ? ' more than 0' : (num < 0 && num >= -100) ? ' less than 0' : ' equals 0'));
} else {
    console.log('Number ' + num + ' is more than 100 or less than -100');
}
