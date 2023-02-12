//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a,b) {
    return (a+b)*2

}
console.log(calc(4,6))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcr(r) {
    let p = 3.14
    return p * (r * r)

}

console.log(calcr(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calchr(h,r) {
    const p = 3.14
    let s0 = p * (r*r)
    let sb = 2 * (p*r*h)
    return 2 * s0 + sb;


}
console.log(calchr(10, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент

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




function us(arr) {
    for (let i = 0; i < arr.length; i++) {
        const user = arr[i];
        console.log(user)

    }

}
us(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text){
    document.write(
        `<p>${text}</p>
    `
    )
}
paragraf('some text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulli(liText) {
    document.write(`
    <ul>
       
       <li>${liText}</li>
       <li>${liText}</li>
       <li>${liText}</li>
    
    </ul>
    `)

}
ulli('some txt')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulliCull(liTxt, liCalc) {
    console.log(`<ul>`)
    for (let i = 0; i <liCalc; i++) {
        document.write(`
        <li>${liTxt}</li>`
        )
    }
    console.log(`</ul>`)


}
ulliCull('brbr', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let mass = ['one', 'two', 3, 4, 5, true, false, 6, 100500, 'last']
function massFunction(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        const ms = arr[i];
        document.write(`<li>${ms}</li>`)

    }
    document.write(`</ul>`);

}
massFunction(mass)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let mass1 = [{name: 'vasya'},{id: 1},{age:33}]
function massFunction1(arr) {
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
}
massFunction1(mass1)

// - створити функцію яка повертає найменьше число з масиву

let massnum = [99, 77, 55, 3, 2, 33, 7, 6, 100500, 999]
function minnum(arr) {
    let min = arr[0];
    for (const arrElemet of arr) {
        if (arrElemet <= min){
            min = arrElemet
        }
        
    }
    console.log(min)

}
minnum(massnum)




// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);


}

arraySum(massnum)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let x = arr[index1];
    let y = arr[index2];
    arr[index1] = y;
    arr[index2] = x;
    return arr;


}

console.log(swap([11, 22, 33, 44,55], 0, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currencyElement of currencyValues) {
        if (currencyElement.currency === exchangeCurrency){
            return sumUAH/currencyElement.value
        }
    }
}
console.log(exchange(4200,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))




