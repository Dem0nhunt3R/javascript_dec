// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str2 = 'Каждый охотник желает знать';

const stringToArr = (str) => {
    return str.split(' ');
}

console.log(stringToArr(str2));
document.writeln(stringToArr(str2));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


const deleteCharacters = (str, length) => {
    return str.substring(0, length);

}
console.log(deleteCharacters(str2, 6))
document.writeln(deleteCharacters(str2, 6));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str3 = 'HTML JavaScript PHP';

const insertDash = (str) => {
    return str.split(' ').join('-').toUpperCase();
}
console.log(insertDash(str3));
document.writeln(insertDash(str3));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

const firstToUpperCase = (str) => {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());

}

let str4 = 'dog';
console.log(firstToUpperCase(str4));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const capitalize = (str) => {
    return str.split(' ').map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' ');
}

console.log(capitalize(str2));
