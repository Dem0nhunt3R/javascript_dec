// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника висотою

const rsc = (h) => h * h;

console.log(rsc(5) + ' <= 1');

// - створити функцію яка обчислює та повертає площу кола

const crclSqr = (r) => 3.14 * (r * r);

console.log(crclSqr(222) + ' <= 2');

// - створити функцію яка обчислює та повертає площу циліндру

const clndrSqr = (r, h) => (2 * 3.14 * (r * r) + 2 * 3.14 * r * h);

console.log(clndrSqr(3, 5) + ' <= 3')

// - створити функцію яка приймає масив та виводить кожен його елемент

const getItem = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}

getItem([1, 34, 5, 52, 5, 32, 5, 23, 5, 325, 23]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент


const textCreator = (text) => document.write(`<p>${text}</p>`);

textCreator('0 1 0 1 0 0 0 1 1 0 1 0 0 0 1 1');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulCreate = (text) => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>');

}

ulCreate('Obi wan Kenoby');

// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulCreate2 = (text, n) => {
    document.write('<ol>');
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ol>');
}

ulCreate2('Crossfade - Starless', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const makeList = (arr) => {
    document.write('<ul>');
    for (const element of arr) {
        if (typeof element === 'string') {
            document.write(`<li style="background-color: aqua">Type of ${element} is ${typeof element}</li>`);
        }
        if (typeof element === 'number')
            document.write(`<li style="background-color: rebeccapurple">Type of ${element} is ${typeof element}</li>`);
        if (typeof element === 'boolean')
            document.write(`<li style="background-color: crimson">Type of ${element} is ${typeof element}</li>`);
    }
    document.write('</ul>');
}
makeList([1, 2, '3', '5', 6463242, true, true, true, true, 'ddddddd']);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const cardCreate = (arr) => {
    document.write('<div class="item-box">');
    for (const user of arr) {
        document.write('<div>');
        document.write(`<h2>${user.name}</h2>`);
        document.write(`<h3>${user.age} years. ID - ${user.id}</h3>`);
        document.write('</div>');
    }
    document.write('</div>');

}

cardCreate([
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 2, age: 22},
    {name: 'vasa', id: 3, age: 22},
    {name: 'vasa', id: 4, age: 22},
    {name: 'vasa', id: 5, age: 22},
    {name: 'vasa', id: 6, age: 22},
    {name: 'vasa', id: 7, age: 22},
    {name: 'vasa', id: 8, age: 22},
    {name: 'vasa', id: 9, age: 22},
    {name: 'vasa', id: 10, age: 22},
    {name: 'vasa', id: 11, age: 22},
    {name: 'vasa', id: 12, age: 22},
])