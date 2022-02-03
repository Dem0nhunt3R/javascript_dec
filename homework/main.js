// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

const arr2 = ['1', '2', '3', '4', '5'];

console.log(arr2);

const arr3 = [1, '2', 3, '4', true];

console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const arr4 = [];

for (let i = 0; i < 5; i++) {
    arr4[i] = i;
}

console.log(arr4);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${10 - i}</div>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>This is ${i + 1}</div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 1;
while (i < 21) {
    document.write(`<h1>${i}</h1>`);
    i++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i1 = 1;
while (i1 < 21) {
    document.write(`<h1>This is ${21 - i1}</h1>`);
    i1++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const arr5 = [];

for (let j = 0; j < 10; j++) {
    arr5[j] = j;
}

for (let j = 0; j < arr5.length; j++) {
    console.log(arr5[j]);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const arr6 = [];

for (let j = 0; j < 10; j++) {
    arr6[j] = '1' + j;
}

for (let j = 0; j < arr6.length; j++) {
    console.log(arr6[j]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const arr7 = [1, '2', 3, '4', true, false, {name: 'vasya'}, 8, '9', undefined];
for (let j = 0; j < arr7.length; j++) {
    console.log(arr7[j]);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

const arr8 = [1, '2', 3, '4', true, false, {name: 'vasya'}, 8, '9', undefined];
let boolArr = [];
for (let j = 0; j < arr8.length; j++) {
    if (typeof arr8[j] === 'boolean') {
        boolArr.push(arr8[j]);
        console.log(arr8[j]);
    }
}

for (const item of boolArr) {
    console.log(item);
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

const arr9 = [1, '2', 3, '4', true, false, {name: 'vasya'}, 8, '9', undefined];

for (let j = 0; j < arr9.length; j++) {
    if (typeof arr9[j] === 'string') {
        console.log(arr9[j]);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

const arr10=[];

arr10[0]=1;
arr10[1]='2';
arr10[2]=3;
arr10[3]='4';
arr10[4]=false;
arr10[5]=true;
arr10[6]=7;
arr10[7]='8';
arr10[8]=9;
arr10[9]='10';

for (const item of arr10) {
    console.log(item);
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j+1);
    document.write(`<div>document.write=>${j+1}</div>`);
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j <=100; j++) {
    console.log(j+1);
    document.write(`<div>document.write=>${j+1}</div>`);
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j <=100; j+=2) {
    console.log(j);
    document.write(`<div>document.write=>${j}</div>`);
}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let j = 0; j <=100; j++) {
    if(j%2===0){
        console.log(j);
        document.write(`<div>even => ${j}</div>`);
    }
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let j = 0; j <=100; j++) {
    if(j%2!==0){
        console.log(j);
        document.write(`<div>odd => ${j}</div>`);
    }
}