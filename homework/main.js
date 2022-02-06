// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника висотою

const rsc = (h) => {
    return h * h;
}

console.log(rsc(5) + ' <= 1');

// - створити функцію яка обчислює та повертає площу кола

const crclSqr = (r) => {
    return 3.14 * (r * r);
}

console.log(crclSqr(222) + ' <= 2');

// - створити функцію яка обчислює та повертає площу циліндру

const clndrSqr = (r, h) => {
    return 2 * 3.14 * (r * r) + 2 * 3.14 * r * h;
}

console.log(clndrSqr(3, 5) + ' <= 3')

// - створити функцію яка приймає масив та виводить кожен його елемент

const getItem = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}

getItem([1, 34, 5, 52, 5, 32, 5, 23, 5, 325, 23]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент


const textCreate = (text) => {
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = text;
    document.body.append(paragraphElement);
}

textCreate('0 1 0 1 0 0 0 1 1 0 1 0 0 0 1 1');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulCreate = (text) => {
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.innerText = text;
    li2.innerText = text;
    li3.innerText = text;
    ul.append(li1, li2, li3);
    document.body.append(ul);
}

ulCreate('Obi wan Kenoby');

// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulCreate2 = (text, n) => {
    const ul2 = document.createElement('ul');
    for (let i = 0; i < n; i++) {
        const li2 = document.createElement('li');
        li2.innerText = text;
        ul2.append(li2);
    }
    document.body.append(ul2);
}

ulCreate2('Crossfade - Starless', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const makeList = (arr) => {
    const list = document.createElement('ul');
    document.body.append(list);
    for (const item of arr) {
        let li = document.createElement('li');
        list.append(li);
        if (typeof item === 'number') {
            li.innerText = 'Typeof ' + item + ' is => ' + (typeof item);
        } else if (typeof item === 'string') {
            li.innerText = 'Typeof ' + item + ' is => ' + (typeof item);
        } else if (typeof item === 'boolean') {
            li.innerText = 'Typeof ' + item + ' is => ' + (typeof item);
        }
    }
}
makeList([1, 2, '3', '5', 6463242, true, true, true, true, 'ddddddd']);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const cardCreate = (arr) => {
    const itemBox = document.createElement('div');
    itemBox.setAttribute('class', 'item-box');
    document.body.append(itemBox);
    for (const item of arr) {
        const itemCard = document.createElement('div');
        const name = document.createElement('h2');
        name.innerText = item.name;
        const id = document.createElement('p');
        id.innerText = 'Id - ' + item.id;
        const age = document.createElement('p');
        age.innerText = 'Age - ' + item.age;
        itemCard.append(name, id, age);
        itemBox.append(itemCard);
    }
}

cardCreate([
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
    {name: 'vasa', id: 1, age: 22},
])