// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function logMin(a, b, c) {
    if (a < b && a < c)
        console.log(a);
    else if (b < a && b < c)
        console.log(b);
    else
        console.log(c);
}

logMin(3, 3333, 444);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function logMax(a, b, c) {
    if (a > b && a > c)
        console.log(a);
    else if (b > a && b > c)
        console.log(b);
    else
        console.log(c);
}

logMax(3, 3333, 444);

// - створити функцію яка повертає найбільше число з масиву

const arr = [-100, 2, 3333, 4, 53, 6, 7111, 8, -99];

function getMax(arr) {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maxNumber < arr[i])
            maxNumber = arr[i];
    }
    return maxNumber;
}

console.log(getMax(arr));

// - створити функцію яка повертає найменьше число з масиву

function getMin(arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minNumber > arr[i])
            minNumber = arr[i];
    }
    return minNumber;
}

console.log(getMin(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(getSum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / (arr.length));
}

console.log(getAverage(arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function getMinShowMax(...args) {
    let min = args[0];
    let max = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        } else if (args[i] < min)
            min = args[i];
    }
    console.log(max);
    return min;
}

console.log(getMinShowMax(100, -6, 2, 33, 2, -5));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function fillArray() {
    let randomNumbers = [];
    for (let i = 0; i < 20; i++) {
        randomNumbers[i] = Math.round(Math.random() * 100);
    }
    return randomNumbers;
}

console.log(fillArray());
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

function fillArray2(limit) {
    let min = 0;
    let max = limit;
    let randomNumbers = [];
    for (let i = 0; i < 20; i++) {
        randomNumbers[i] = Math.round(min + Math.random() * (max - min));
    }
    return randomNumbers;
}

console.log(fillArray2(1));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const arr2 = [1, 2, 3, 4, 5, 6, 7];

function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        newArr[j] = arr[i];
    }
    return newArr;
}

console.log(reverse(arr2));
