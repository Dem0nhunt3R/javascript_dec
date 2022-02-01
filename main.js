//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let a = 1;
let b = -999;
let c = 123;
let pi = 3.14;
let d = 2.7;
let e = 16;
let bool1 = true;
let bool2 = false;

//Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(a);
console.log(b);
console.log(c);
console.log(pi);
console.log(d);
console.log(e);
console.log(bool1);
console.log(bool2);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(a);
alert(b);
alert(c);
alert(pi);
alert(d);
alert(e);
alert(bool1);
alert(bool2);

document.write(`<div>${hello}</div>`);
document.write(`<div>${owu}</div>`);
document.write(`<div>${com}</div>`);
document.write(`<div>${ua}</div>`);
document.write(`<div>${a}</div>`);
document.write(`<div>${b}</div>`);
document.write(`<div>${c}</div>`);
document.write(`<div>${pi}</div>`);
document.write(`<div>${d}</div>`);
document.write(`<div>${e}</div>`);
document.write(`<div>${bool1}</div>`);
document.write(`<div>${bool2}</div>`);

//- Переприсвоїти кожній змінній з завдання значення на довільне.

hello = 1;
owu = 2;
com = 3;
ua = 4;
a = 5;
b = 6;
c = 'c';
pi = 'pi';
d = 'd';
e = 1.1;
bool1 = 5 === 3;
bool2 = 5 !== 3;

//Вивести кожну змінну за допомогою: console.log , alert, document.write
 console.log(hello);
 console.log(owu);
 console.log(com);
 console.log(ua);
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(pi);
 console.log(d);
 console.log(e);
 console.log(bool1);
 console.log(bool2);

 alert(hello);
 alert(owu);
 alert(com);
 alert(ua);
 alert(a);
 alert(b);
 alert(c);
 alert(pi);
 alert(d);
 alert(e);
 alert(bool1);
 alert(bool2);

 document.write(`<div>${hello}</div>`);
 document.write(`<div>${owu}</div>`);
 document.write(`<div>${com}</div>`);
 document.write(`<div>${ua}</div>`);
 document.write(`<div>${a}</div>`);
 document.write(`<div>${b}</div>`);
 document.write(`<div>${c}</div>`);
 document.write(`<div>${pi}</div>`);
 document.write(`<div>${d}</div>`);
 document.write(`<div>${e}</div>`);
 document.write(`<div>${bool1}</div>`);
 document.write(`<div>${bool2}</div>`);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Mykyta';
let middleName = 'Viacheslavovych';
let lastName = 'Naumenko';
let person =firstName+'_'+middleName+'_'+lastName;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


 let name = prompt('Enter your name');
 let middleName2 = prompt('Enter your middle name');
 let age = prompt('Enter your age');

 console.log('Вітаю '+name+' '+middleName2+'. Тобі '+age+' років');
 alert('Вітаю '+name+' '+middleName2+'. Тобі '+age+' років');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a1 = 100; let b1 = '100'; let c1 = true;

console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//5 < 6 -> true
//5 > 6 -> false
//5 === 6 -> false
//5 == 6 -> false
//10 === 10 -> true
//10 >= 10 -> true
//10 !== 10 -> false
//10 > 10 -> false
//10 < 10 -> false
//123 === '123' -> false
//123 == '123' -> true

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a2 = 5;
// document.write(str + a2 + "<br/>"); 205 та переніс каректи на наступний рядок. Приведення до string
// document.write(str - a2 + "<br/>"); 15 та переніс каретки на наступний рядок. Приведення до number
// document.write(str * "2" + "<br/>"); 40 та переніс каретки на наступний рядок. Приведення до number
// document.write(str / 2 + "<br/>"); 10 та переніс каретки на наступний рядок. Приведення до number

