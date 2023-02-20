let str = 'hello world'
let str1 = 'lorem ipsum'
let str2 = 'javascript is cool'

//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str.length)
console.log(str1.length)
console.log(str2.length)

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str.toUpperCase())
console.log(str1.toUpperCase())
console.log(str2.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str.toLowerCase())
console.log(str1.toLowerCase())
console.log(str2.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str3 = ' dirty string   '
console.log(str3.substring(1,13))


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str4 = 'Ревуть воли як ясла повні'
let split = str4.split(' ')
console.log(split)

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let mass = [10,8,-7,55,987,-1011,0,1050,0]
let toStr = mass.map(value =>{
    return value +''
})
console.log(toStr)




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
console.log(nums)
function sortArr(arr,direction){
     if (direction === 'ascending'){
         let sor = arr.sort((a,b) => a-b);
         return sor

     }

     if (direction === 'descending') {``
         let sor1 = arr.sort((a, b) => b - a);
         return sor1
     }




 }
 console.log(sortArr(nums, 'ascending'));
console.log(sortArr(nums, 'descending'));





// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
//  -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((u1,u2) =>{
    return u2.monthDuration - u1.monthDuration
    }
);
console.log(sort)

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCurses = coursesAndDurationArray.filter(function (value) {
    return value.monthDuration > 5;
    
})
console.log(filteredCurses)

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapedCurses = coursesAndDurationArray.map(function (value,index) {
    return  {
        id: index +1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
});
console.log(mapedCurses)

//  =========================

//  описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade(піка)', 'diamond(бубна)','heart(черва)', 'clubs(хреста)'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [

    {
        cardSuit: 'spade',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black',
    }

]


//  - знайти піковий туз
let find = cards.find(value => value.value==='ace',index=> index.cardSuit==='spade');
console.log(find)


//  - всі шістки

let filteredCards = cards.filter(function (value) {
    return value.value === '6';});
console.log(filteredCards)

//  - всі червоні карти

let filteredCards1 = cards.filter(function (value) {
    return value.color === 'red';});
console.log(filteredCards1)

//  - всі буби

let filteredCards2 = cards.filter(function (value) {
    return value.cardSuit === 'diamond';});
console.log(filteredCards2)

//  - всі трефи від 9 та більше

let filteredCards3 = cards.filter(function (value) {
    return value.cardSuit === 'clubs' && value.value !== '6' && value.value !== '7' && value.value !== '8' && value.value !== '9'});
console.log(filteredCards3)

//

//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((previousValue, currentValue) =>  {
    if (currentValue.cardSuit === 'spade'){
        previousValue.spades.push(currentValue);
    }else if(currentValue.cardSuit=== 'diamond'){
        previousValue.diamonds.push(currentValue);
    }else if(currentValue.cardSuit=== 'heart'){
        previousValue.hearts.push(currentValue);
    }else if(currentValue.cardSuit=== 'clubs'){
        previousValue.clubs.push(currentValue);
    }
    return previousValue



}, {spades:[], diamonds:[], hearts:[],clubs:[]});
console.log(reduce)
//
//
//

// =========================
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass

let dockerModules = coursesArray.filter(el => el.modules.includes('sass'));
console.log(dockerModules)

// --написати пошук всіх об'єктів, в який в modules є docker

let dockerModules1 = coursesArray.filter(el => el.modules.includes('docker'));
console.log(dockerModules1)

//let filteredCards = cards.filter(function (value) {
//     return value.value === '6';});
// console.log(filteredCards)