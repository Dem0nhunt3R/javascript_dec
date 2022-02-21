// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

const mainHeader = document.querySelector('#main_header');
mainHeader.setAttribute('class', mainHeader.tagName);

// b) робить шириниу елементу ul 400px

const listOfUl = document.querySelectorAll('ul');
listOfUl.forEach(item => item.style.width = '400px');

// c) робить шириниу всіх елементів з класом linkList шириною 50%

const nodeListOfLinkList = document.querySelectorAll('.linkList');
nodeListOfLinkList.forEach(item => item.style.width = '50%');

// d) отримує текст який зберігається в елементі з класом listElement2

const innerText = document.querySelector('.listElement2').innerText;

console.log(innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

const listOfLi = document.querySelectorAll('li');

listOfLi.forEach(item => item.style.backgroundColor = 'grey');

// f) отримує всі елементи 'a' та додає їм клас anchor

const listOfA = document.querySelectorAll('a');

listOfA.forEach(item => item.setAttribute('class', 'anchor'));

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const item of listOfA) {
    if (item.innerText === 'link3')
        item.style.fontSize = '40px';
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

listOfA.forEach(item => item.setAttribute('class', 'element_' + item.innerText));

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const listOfSubHeaders = document.querySelectorAll('.sub-header');
listOfSubHeaders.forEach(item => item.style.backgroundColor = prompt('set the color'));

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// listOfSubHeaders.forEach(item => {
//     if (item.innerText === 'content 2 segment')
//         item.style.backgroundColor = prompt('set the color');
// })

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

const content1 = document.querySelector('.content_1');
// content1.innerText = prompt('enter your text');

// l) отримати елементи p та змінити їм padding на 20px

const listOfP = document.querySelectorAll('p');
listOfP.forEach(item => item.style.padding = '20px');

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const listOfText2 = document.querySelectorAll('.text2');
listOfText2.forEach(item => item.innerText = 'dec-2022');