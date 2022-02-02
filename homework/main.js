//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
const time = Math.floor(Math.random() * 59 + 1);

const currentTime = (time) => {
    if (time >= 1 && time < 16)
        console.log('1 half => ' + time);
    else if (time >= 16 && time < 30)
        console.log('2 half => ' + time);
    else if (time >= 30 && time < 45)
        console.log('3 half => ' + time);
    else if (time >= 45 && time < 60)
        console.log('4 half => ' + time);
    else if (time === 0)
        console.log('time = 0')

}
currentTime(time);

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const time2 = Math.floor(Math.random() * 30 + 1);

const currentDecade = (decade) => {
    if (decade >= 1 && decade < 11)
        console.log('1 decade => ' + decade);
    else if (decade >= 11 && decade < 21)
        console.log('2 decade => ' + decade);
    else if (decade >= 21 && decade < 31)
        console.log('3 decade => ' + decade);
}

currentDecade(time2);

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

const test = true;
console.log('Test is ' + (test ? 'false' : 'true'))

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const notZero = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const isTrue = (number) => {
    console.log(number + (number ? ' is true' : ' is false'));
}

isTrue(notZero(-3, 1));

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день.

const day = +prompt('Enter a day number');

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Wrong day');
}

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

const isLeapYear = (year) => {
    console.log('The year is ' + ((year % 4 === 0) ? 'leap' : 'not leap'));
}

isLeapYear(2004);

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
const officialName = prompt('Яка «офіційна» назва JavaScript?');

if (officialName === 'ECMAScript')
    alert('Correct');
else
    alert('Не знаєте? ECMAScript!');
