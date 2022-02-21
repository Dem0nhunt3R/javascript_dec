// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

console.log(document.querySelector('#content').innerText);

// -- отримує текст з блоку з id "rules"

console.log(document.querySelector('#rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

document.querySelector('#content').innerText = 'text';

// -- замініть текст параграфа з id 'rules' на будь-який інший

document.querySelector('#rules').innerText = 'rulets';

// -- змініть кожному елементу колір фону на червоний

for (const element of document.body.children) {
    element.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій



// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
