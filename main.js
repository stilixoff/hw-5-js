/* Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел.
В функции есть параметры: length - длина массива, 
min – минимальное значение целого числа, 
max – максимальное значение целого числа. 
Пример: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
*/
const arrgetRandomArray = (length, min, max) => {
    let res = [];
    if ((length ^ 0) !== length) {
        return 'lenght не целое число'
    }
    if (min >= max) {
        return 'Минимальное число больше максимального'
    } else {
        for(let i = 0; i < length; i++) {
            res.push(Math.floor(min + Math.random() * (max + 1 - min)));
        }
    }
    return res;
}

console.log(arrgetRandomArray(15, 1, 100));

// //-----------------------------------------------------------------------------

// // Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных в неё аргументов. 
// // НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// // Пример: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const numbers = [2, 16, 16, 2, 24, 26, 32, 34, 35, 50, 64, 78, 83, 89, 95];

const getModa = (numbers) => {
    let res = [];
    number = numbers.sort( (a, b) => a - b );
    for(let i = 0; i < number.length; i++) {
        if((numbers[i] ^ 0) === numbers[i]) {
            if(number[i] === number[++i]) {
                res.push(number[i]);
            };
        }
    }
    return res;
}

console.log(getModa(numbers));

//-----------------------------------------------------------------------------

// Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое 
// всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const numbersForAverage = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const getAverage = (number) => {
    let res = 0;
    let numFilter = number.filter(num => (num ^ 0) === num);
    for(let i = 0; i < numFilter.length; i++) {
        res = (res + numFilter[i]);
    }
    return res / numFilter.length;
}

console.log(getAverage(numbersForAverage));

//-----------------------------------------------------------------------------
// Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов. 
// НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
// Пример: getMedian(1, 2, 3, 4) –> 2.5 Пример: getMedian(1, 2, 3, 4, 5) –> 3

let numForArr = [1, 2, 4, 5];
const getMedian = (numbers) => {
    let res = 0;
    let numFilter = numbers.filter(num => (num ^ 0) === num).sort( (a, b) => a - b );
    if(numFilter.length % 2 === 0) {
        res = (numFilter[numFilter.length / 2] + (numFilter[(numFilter.length / 2) + 1])) / 2;
    } else {
        res = numFilter[(numFilter.length / 2) - 0.5];
    }
    return res;
}

console.log(getMedian(numForArr));