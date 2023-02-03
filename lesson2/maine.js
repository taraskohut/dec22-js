

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let av = ['one', 'two', 3, 4, 5, true, false, 6, 100500, 'last']
console.log(av[0])
console.log(av[1])
console.log(av[2])
console.log(av[3])
console.log(av[4])
console.log(av[5])
console.log(av[6])
console.log(av[7])
console.log(av[8])
console.log(av[9])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let b = {
    title : 'kobzar',
    pageCount : 388,
    ganre : 'fantesy'
}
let c = {
    title : 'Біблія',
    pageCount : 250,
    ganre : 'релігійні'

}
let d = {
    title: 'Буквар',
    pageCount: 150,
    ganre: 'освіта'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let e = {
    title: 'dory',
    pageCount: 388,
    ganre: 'shortstory',
    autors:  [
        {
            name: 'Ann'
        },
        {
            age: 40
        }
    ]
}

let pre = {
    title: 'Body',
    pageCount: 228,
    ganre: 'pre',
    autors:  [
        {
            name: 'Mary'
        },
        {
            age: 33
        }
    ]
}

let bw = {
    title: 'Row',
    pageCount: 388,
    ganre: 'rowe',
    autors: [
        {
            name: 'Tary'
        },
        {
            age: 25
        }
    ]

}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [

    {name: 'gena', username: 'gena22', password: 11111},
    {name: 'ivan', username: 'ivan11', password: 'ivan44'},
    {name: 'ann', username: 'superann', password: 125697},
    {name: 'svitlana', username: 'svit_lana', password: 'lviv'},
    {name: 'petro', username: 'petya', password: '123lok'},
    {name: 'pavlo', username: 'pasha', password: 555566},
    {name: 'tania', username: 'tatia', password: 'tat11'},
    {name: 'vitalik', username: 'vita', password: 'gir'},
    {name: 'oleg', username: 'oleo', password: 'love'},
    {name: 'nazar', username: 'nazkamaz', password: 'kamaz'}

]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10
if (x !== 0) {
     console.log('Вірно');}
else if (x === 0) {
     console.log('невірно');}

let a = 1
if (a > 0) {
    console.log('Вірно');}
else if (a < 0) {
    console.log('невірно');}

let ba = -3
if (ba > 0) {
    console.log('Вірно');}
else if (ba < 0) {
    console.log('невірно');}





// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter any hour')
if (time <= 15) {
    console.log('1 четверть');}
else if (time <= 30) {
    console.log('2 четверть');}
else if (time <= 45) {
    console.log('3 четверть');}
else if (time <= 59) {
    console.log('4 четверть');}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter any day')
if (day === 0) {
    console.log(false);}
else if (day <= 10) {
    console.log('1 декада');}
else if (day <= 20) {
    console.log('2 декада');}
else if (day <= 31) {
    console.log('3 декада');}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weakDay = prompt('enter dey number')

switch (weakDay) {
    case '1':
        console.log('monday');
        break;
    case '2' :
        console.log('tuesday')
        break;
    case '3' :
        console.log('wednesday')
        break;
    case '4' :
        console.log('thursday')
        break;
    case '5' :
        console.log('friday')
        break;
    case '6' :
        console.log('saturday')
        break;
    case '7' :
        console.log('sunday')
        break;
    default :
        console.log('????')


}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


let k = 22
let l = 22

if (k === l) {
    console.log(k,l)
}
else if (k > l) {
    console.log(k)
}
else if (k < l) {
    console.log(l)
}
let g = 30
let i = 22

if (g === i) {
    console.log(g,i)
}
else if (g > i) {
    console.log(g)
}
else if (g < i) {
    console.log(i)
}
let t = 30
let o = 33

if (t === o) {
    console.log(t,o)
}
else if (t > o) {
    console.log(t)
}
else if (t < o) {
    console.log(o)
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код який,
//  за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let z = ""

if(z ===0 || z=== false|| z=== ""|| z=== -0 || z===`` || z==='' || z===null || z=== undefined || z=== NaN || z=== 0n ){
    z = 'default'
}
console.log(z)



//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log('супер')
}
if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log('супер')
}
if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log('супер')
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('супер')
}
if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log('супер')
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('супер')
}















