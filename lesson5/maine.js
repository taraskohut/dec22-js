let p = 3.14
//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//  - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a,b) => a * b;
console.log(calc(2, 5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

let calc1 = (r) => p * (r*r);
console.log(calc1(10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calc2 = (h,r) => (p * (r*r) + (2 * (p * r * h)));
console.log(calc2(15, 20));


//- створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]

let arrayPrint = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
arrayPrint(users)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let addP = (pTxt) => {
    document.write(`<h3>Завдання 6</h3><p>${pTxt}</p>`)
}
addP('some txt')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let addLi = (liTxt) => {
    document.write(`<h3>Завдання 7</h3><ul>
              <li>${liTxt}</li>
              <li>${liTxt}</li>
              <li>${liTxt}</li>
              </ul>`)
}
addLi('somtxt')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let addLi1 = (liTxt, liCalc) => {
    document.write(`<h3>Завдання 8</h3><ul>`);
    for (let i = 0; i < liCalc; i++)
        document.write(`<li>${liTxt}</li>`);
    document.write(`</ul>`)

}
addLi1('another txt', 7)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let mass = ['one', 'two', 3, 4, 5, true, false, 6, 100500, 'last']

let masFunc = (arr) => {
    document.write(`<h3>Завдання 9</h3><ul>`);
    for (let i = 0; i < arr.length; i++) {
        const ms = arr[i];
        document.write(`<li>${ms}</li>`)
    }
    document.write(`</ul>`);
}
masFunc(mass)

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let mass1 = [{name: 'vasya'},{id: 1},{age:33}]
let massFunction1 = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement}</div>`)

    }
}
massFunction1(mass1)

//- створити функцію яка повертає найменьше число з масиву
let massNum = [100, 77, 55, 3, 1, 33, 7, 6, 100500, 999]
let minNum = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){ min <= arr[i];
}
    return min


}
console.log(minNum(massNum));


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arraySum = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);


}

arraySum(massNum)

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr,index1,index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 25

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const currencyElement of currencyValues) {
        if (currencyElement.currency === exchangeCurrency){
            return sumUAH/currencyElement.value
        }
    }
}
console.log(exchange(8800,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))