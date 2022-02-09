// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
const str = 'наслаждение';

const cutString = (str, n) => {
    let subStrArr = [];
    for (let i = 0; i <= str.length; i += n) {
        const split = str.slice(i, i + n);
        subStrArr.push(split);
    }
    return subStrArr;
}

console.log(cutString(str, 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
const email1 = 'someemail@gmail.com';
const email2 = 'someeMAIL@gmail.com';
const email3 = 'someeMAIL@i.ua';
const email4 = 'some.email@gmail.com';
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

const nameValidator = (email = '') => {
    email = email.toLowerCase();
    let login;
    if (!email.includes('@')) {
        console.log('Email is not correct');
    }
    let index = 0;
    while (index < email.length) {
        if (email[index] === '@') {
            login = email.slice(0, index)
            if ((email[index + 1] === '.') || (email[index + 2] === '.')) {
                console.log('Mailbox is not correct');
                return 'Mailbox error';
            }
        }
        index++;
    }
    return login;
}

console.log(nameValidator(email1));
console.log(nameValidator(email2));
console.log(nameValidator(email3));
console.log(nameValidator(email4));

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

const modulesAscSort = (arr) => {
    return arr.sort((a, b) => (a.modules.length - b.modules.length));
}

console.log(modulesAscSort(coursesArray));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let stringSearch = "а"
let str2 = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

const count = (str, char) => {
    let charCount = 0;
    for (const item of str.toLowerCase()) {
        if (item === char)
            charCount++;
    }
    return charCount;
}

console.log(count(str2, stringSearch));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str3 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

const cutString2 = (str, n) => {
    return str.split(' ').slice(0, n).join(' ');
}

cutString2(str3, 5)
console.log(cutString2(str3, 5));