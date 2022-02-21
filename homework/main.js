// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

const innerText = document.querySelector('#content').innerText;
console.log(innerText);

// -- отримує текст з блоку з id "rules"

console.log(document.querySelector('#rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

console.log(document.querySelector('#content').innerText = 'text');

// -- замініть текст параграфа з id 'rules' на будь-який інший

document.querySelector('#rules').innerText = 'rules';

// -- змініть кожному елементу колір фону на червоний

for (const element of document.body.children) {
    element.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (const element of document.body.children) {
    element.style.backgroundColor = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.querySelector('#rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const fcRules = document.getElementsByClassName('fc_rules');
for (const element of fcRules) {
    element.style.backgroundColor = 'red';
}
