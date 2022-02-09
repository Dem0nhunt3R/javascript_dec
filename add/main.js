// - Дано натуральное число n. Выведите все числа от 1 до n.

const numbersLog = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

numbersLog(2);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

const numbersLog2 = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log('asc ' + i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log('des ' + i);
        }
    }
}
numbersLog2(5, 1);
numbersLog2(1, 5);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const swap = (arr, i) => {
    if (i === (arr.length - 1)) {
        console.log('i === last index, can`t swap it');
    } else if (i >= arr.length) {
        console.log('i > arr length');
    } else {
        let temp;
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
let arr = [1, 2, 3, 4];
swap(arr, 1);
console.log(arr);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr2 = [0,1, 0, 0, 1, 22, 3, 0, 0, 0, 6, 0, 3];

const allZeroToTheEnd = (arr) => {
    let newArr = [];
    let notZeroCount = 0;
    let zeroCount = 0;
    for (const item of arr) {
        if (item === 0) {
            zeroCount++;
        } else {
            newArr[notZeroCount] = item;
            notZeroCount++;
        }
    }
    for (let i = 0, j = newArr.length - 1; i < zeroCount; i++, j++) {
        newArr[j] = 0;
    }
    return newArr;

    // const filterArr = arr.filter(item => item === 0);
    // for (const item of arr) {
    //     if (item !== 0)
    //         newArr.push(item);
    // }
    // newArr.push(...filterArr);
    // return newArr;

}

console.log(allZeroToTheEnd(arr2));





