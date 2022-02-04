//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function oneOrMany() {
    const args = arguments;
    if (args.length > 1) {
        let argsSum = 0;
        for (let i = 0; i < args.length; i++) {
            argsSum += args[i];
        }
        return argsSum;
    } else
        console.log(args[0]);
}

oneOrMany(1);

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function newArr(arr1, arr2) {
    const arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr[i] = arr1[i] + arr2[i];
    }
    return arr;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(newArr(arr1, arr2));

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

const objectArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const keysArr = [];

for (let i = 0; i < objectArr.length; i++) {
    for (const key in objectArr[i]) {
        keysArr.push(key);
    }
}

console.log(keysArr)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

const keysArr2 = [];

for (let i = 0; i < objectArr.length; i++) {
    for (const key in objectArr[i]) {
        keysArr2.push(objectArr[i][key]);
    }
}

console.log(keysArr2)
