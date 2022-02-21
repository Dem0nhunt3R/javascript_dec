// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter=Uddd....Wertddd--Uptersad';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger-Ope';

const normName = (str) => {
    const symbols = '!@#$%^&*()_+=-0987654321?/.,:;"\'';
    for (const symbol of symbols) {
        if (str.includes(symbol)) {
            str = str.replaceAll(symbol, ' ');
        }
    }
    str = str.split(' ');
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        if (i === str.length - 1)
            newStr += item;
        else if (item.length > 0) {
            newStr += item + ' ';
        }

    }
    return newStr;
}
console.log(normName(n1));
console.log(normName(n2));
console.log(normName(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const randomNumbersArr = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}
console.log(randomNumbersArr());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

const sortedArr = randomNumbersArr().sort();
console.log(sortedArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(randomNumbersArr().filter(item => item % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(randomNumbersArr().map(item => item + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

const sortNums = (direction, arr) => {
    if (direction === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'des')
        return arr.sort((a, b) => b - a);
}

console.log(sortNums('des', nums));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

const sortedByCoursesDuration = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sortedByCoursesDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));