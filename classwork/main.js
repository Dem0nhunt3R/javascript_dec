// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// 1. перебрати його циклом while

const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < 10) {
    console.log(arr[i]);
    i++;
}

//2. перебрати його циклом for

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let k = 0;
while (k < arr.length) {
    if (k % 2 !== 0)
        console.log(arr[k]);
    k++;
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = 0; j < arr.length; j++) {
    if (j !== 0)
        console.log(arr[j]);
}

//5. перебрати циклом while та вивести  числа тільки парні  значення

let l = 0;
while (l < arr.length) {
    if (arr[l] % 2 === 0)
        console.log(arr[l]);
    l++;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення

for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0)
        console.log(arr[j] + ' for');
}

//7. замінити кожне число кратне 3 на слово "okten"

for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0)
        arr[j] = 'okten';
}
console.log(arr);

//8. вивести масив в зворотньому порядку.

for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while


let w1 = (arr.length - 1);
while (w1 >= 0) {
    console.log(arr[w1]);
    w1--;
}

//2. перебрати його циклом for

for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let w2 = (arr.length - 1);
while (w2 >= 0) {
    if (w2 % 2 !== 0) {
        console.log(arr[w2] + ' index=> ' + w2);
    }
    w2--;
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = arr.length - 1; j >= 0; j--) {
    if (j % 2 !== 0)
        console.log(arr[j] + ' index => ' + j);
}

//5. перебрати циклом while та вивести  числа тільки парні  значення

let w3 = (arr.length - 1);
while (w3 >= 0) {
    if (arr[w3] % 2 === 0)
        console.log(arr[w3]);
    w3--;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення

for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 2 === 0)
        console.log(arr[j]);
}

//7. замінити кожне число кратне 3 на слово "okten"

let multipleCounter = 0;
for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 3 === 0) {
        arr[j] = 'okten';
        multipleCounter++;
    } else if (multipleCounter === 0 && j === 0) {
        console.log('there is no multiple numbers of three');
    }
}
console.log(arr)