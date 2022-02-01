//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let result = arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4] + arr1[5] + arr1[6] + arr1[7] + arr1[8] + arr1[9];
console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {name: 'some book', pageCount: 234, genre: 'poem'};

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book22 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book1 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book2 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book3 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book4 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book5 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book6 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book7 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book8 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book9 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};
let book10 = {name: 'some book', pageCount: 234, genre: 'poem', authors: [1, 2, 3]};

let books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

//console.log(books[0]);
//console.log(books[1]);
//console.log(books[2]);
//console.log(books[3]);
//console.log(books[4]);
//console.log(books[5]);
//console.log(books[6]);
//console.log(books[7]);
//console.log(books[8]);
//console.log(books[9]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = 0.5*height*width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = Math.round(3.14*dC*heightC);
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n=3;
let m = 4;
let hypotenuse = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(hypotenuse);