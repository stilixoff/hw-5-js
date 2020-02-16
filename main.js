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

//-----------------------------------------------------------------------------
// Создайте функцию filterEvenNumbers(...numbers) – которая 
// фильтрует четные числа переданные как аргументы функции
// Пример: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const numForEvenNum = [1, 2, 3, 4, 5, 6, 7];
const filterEvenNumbers = (numbers) => {
    let res = numbers.filter(num => num % 2 !== 0);
    return res;
}
console.log(filterEvenNumbers(numForEvenNum));

//-----------------------------------------------------------------------------
// Создайте функцию countPositiveNumbers(...numbers) – которая посчитает количество числел больших 0
// Пример: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const numForCount = [1, -2, 3, -4, -5, 6];
const countPositiveNumbers = (numbers) => {
    let res = numbers.filter(num => num > 0);
    return res.length;
}
console.log(countPositiveNumbers(numForCount));

//-----------------------------------------------------------------------------
// Создайте функцию getDividedByFive(...numbers) – которая отфильтрует все элементы 
// в массиве и оставит только те, которые делятся нацело на 5
// Пример: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const numForFive = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 5];
const getDividedByFive = (numbers) => {
    let res = numbers.filter(num => num % 5 === 0);
    return res;
}
console.log(getDividedByFive(numForFive));

//-----------------------------------------------------------------------------
// Создайте функцию replaceBadWords(string) – которая 1) разобьет фразу на слова, 
// 2) заменит плохие слова на звездочки (*). 
// При решении этого задания необходимо разбить массив на слова с помощью функции .split(" "), 
// после чего массив необходимо будет склеить .join(" ") Плохие слова: 
// shit и fuck. Предусмотрите возможность расширять список этих слов в будущем.
// Пример: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" 
// Пример: replaceBadWords("Holy shit!") -> "Holy ****!" 
// Пример: replaceBadWords("It's bullshit!") -> "It's bull****!"

const replaceBadWords = (string) => {
    let res = string.replace( (/(fuck|shit)/gi), '****');
    return res;
}

console.log(replaceBadWords("Are you fucking kidding shit?"));

//-----------------------------------------------------------------------------
// Создайте функцию divideByThree(word), которая разбивает каждое слово на условные слоги по 3 буквы. 
// Если букв меньше трёх – не разбиваем. Пробелы всегда удаляются. Строка приводится к нижнему регистру. 
// Пример: divideByThree("Commander) -> ["com", "man", "der"] Пример: divideByThree("live") -> ["liv", "e"]

const divideByThree = (word = "Commander") => {
    const val = 3;
    let spliWordsd = word.split('');
    let res = [];
    for(let i = 0; i < spliWordsd.length; i += val) {
        res.push(spliWordsd.slice(i, i + val).join(''));
    }
    let result = res.forEach(n => n.join(''));
    return result;
}

console.log(divideByThree());