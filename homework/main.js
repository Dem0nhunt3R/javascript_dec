// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectSqrCalc(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSqrCalc(r) {
    return 3.14 * (r * r);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSqtCalc(h, r) {
    return (2 * 3.14 * r * h);
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrElemLog(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createPar(text) {
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createLi(text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createLi2(text, liQuantity) {
    document.write('<ul>');
    for (let i = 0; i < liQuantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}

createLi2('222', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList(arr) {
    document.write('<ul>')
    for (const elem of arr) {
        document.write(`<li>${elem}</li>`)
    }
    document.write('</ul>')
}

createList([1, '2', 3, '4', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function createUserBlock(arr) {
    for (const elem of arr) {
        document.write(`<div>id - ${elem.id}, name - ${elem.name}, age - ${elem.age}</div>`)
    }
}

const users = [
    {id:1,name:'vasgen', age:33},
    {id:2,name:'vasgen', age:33},
    {id:3,name:'vasgen', age:33},
    {id:4,name:'vasgen', age:33}
]

createUserBlock(users);