//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function oneOrMany(...args) {
    if (args.length > 1) {
        let argsSum = 0;
        for (const argument of args) {
            argsSum += argument;
        }
        return argsSum;
    } else if (args.length === 1)
        console.log(args[0]);
    else {
        console.log('There is no arguments of function');
    }
}

oneOrMany(2);
oneOrMany();
console.log(oneOrMany(1, 2, 3));

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function newArr(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i] + arr2[i];
    }
    return newArr;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(newArr(arr1, arr2));

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

const objectArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const getKeys = (arr) => {
    const keysArr = [];
    let index = 0;
    for (const item of arr) {
        for (const key in item) {
            keysArr[index] = key;
            index++;
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     for (const key in arr[i]) {
    //         keysArr.push(key);
    //     }
    // }
    return keysArr;
}

console.log(getKeys(objectArr))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

const getValues = (arr) => {
    const valuesArr = [];
    let index = 0;
    for (const item of arr) {
        for (const key in item) {
            valuesArr[index] = item[key];
            index++;
        }
    }
    return valuesArr;
}

console.log(getValues(objectArr));