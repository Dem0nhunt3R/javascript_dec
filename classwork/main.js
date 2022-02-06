// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const getMin = (a, b, c) => {
    let min;
    if (a < b && a < c)
        min = a;
    else if (b < c && b < a)
        min = b;
    else
        min = c;
    console.log(min);
}

getMin(1, 2, 3);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const getMax = (a, b, c) => {
    let max;
    if (a > b && a > c)
        max = a;
    else if (b > a && b > c)
        max = b;
    else
        max = c;
    console.log(max);
}

getMax(333334, 333333333335, 33333336);

// - створити функцію яка повертає найбільше число з масиву

const getMaxFromArr = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

console.log(getMaxFromArr([111111111, 2, 3, 422, -5, 6666666666666666, 71111, 911]));

// - створити функцію яка повертає найменьше число з масиву

const getMinFromArr = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        if (num < min)
            min = num;
    }
    return min;
}

console.log(getMinFromArr([-1111111, 2, 3, -4, -1115, 6, -7]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const getSumOfArr = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

console.log(getSumOfArr([1, 2, 10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const getAverageOfArr = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log(getAverageOfArr([1, 2, 3, 4, 5]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const getMinShowMax = (...args) => {
    let min = args[0];
    let max = args[0];
    for (const num of args) {
        if (num > max)
            max = num;
        else
            min = num;
    }
    console.log('Max number is => ' + max);
    return 'Min number is => ' + min;
}

console.log(getMinShowMax(1, 2, 3, 4, 5));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

const randomNumbersArr = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

console.log(randomNumbersArr(20));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

const randomNumbersArr2 = (length, limit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    return arr;
}
console.log(randomNumbersArr2(10, 10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


const reverseArr = (arr) => {
    let newArr=[];
    for (let i = arr.length-1; i>=0 ; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArr([1, 2, 3, 4, 5, 6]));