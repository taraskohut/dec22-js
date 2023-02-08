//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a,b) {
    let result = a * b
    return result
}
let r = calc(2, 2)
console.log(r)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcr(r) {
    let p = 3.14
    let result = p * (r * r)
    return result
}
let t = calcr(5)
console.log(t)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calchr(h,r) {
    const p = 3.14
    let s0 = p * (r*r)
    let sb = 2 * (p*r*h)
    let result = 2 * s0 + sb;
    return result

}
let g = calchr(10,5)
console.log(g)


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

function us() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user)

    }

}
us()


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text){
    document.write(
        `<p>${text}</p>
    `
    )
}
paragraf('some text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulli(litext) {
    document.write(`
    <ul>
       
       <li>${litext}</li>
       <li>${litext}</li>
       <li>${litext}</li>
    
    </ul>
    `)

}
ulli('some txt')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ullicukl(litxt, licalc) {`
<ul></ul>`
    for (let i = 0; i <licalc; i++) {
        ;
        document.write(`
        <li>${litxt}</li>`
        )
        

        
    }


}
ullicukl('brbr', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
