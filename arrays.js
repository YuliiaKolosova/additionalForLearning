// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0)
//         return 'Семья пуста';
    
//     let result = 'Семья состоит из:';
//     for (let elem of arr)
//         result += ` ${elem}`;
//     return result;
    
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let elem of arr) {
//         console.log(elem.toLowerCase());
//     }
// }

// const someString = 'This is some strange string';
// const reverse = function (str) {
//     if (typeof (str) !== 'string')
//         return 'Ошибка!';
    
//     let arr = [],
//         result = '';
    
//     for (let i = 0; i < str.length; i++){
//         arr[i] = str[i];
//     }
//     arr.reverse();
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }

// reverse(someString);

// standardizeStrings(favoriteCities);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard','Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
    
//     const notInGroupCount = arr.length % 3;
//     let index = 0,
//         groupNum = 0,
//         groups = [],
//         notInGroupStr = 'Оставшиеся студенты:';
    
//     for (let i = 0; i < (arr.length - notInGroupCount) / 3; i++)
//     {
//         groups.push([]);
//     }
//     while (index < arr.length - notInGroupCount) {
//         groups[groupNum].push(arr[index]);
//         index++;
//         if (!((index - groupNum * 3) % 3))
//              groupNum++;
//     }
//     if (notInGroupCount > 0) {
//         for (let i = notInGroupCount; i > 0; i--) {
//             notInGroupStr += ` ${arr[arr.length - i]}`;
//             if (i > 1) notInGroupStr += ",";
//             console.log(arr.length - i);
//         }
//     } else {
//         notInGroupStr += ' -';
//     }
//     groups.push(notInGroupStr);
//     return groups;
// }

// sortStudentsByGroups(students);

// console.log([] + 1 + 2);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8)
}


// function showListOfFilms(arr) {
//     return arr.reduce((resStr, current, i) => {
//         if (i > 0)
//             return `${resStr}, ${current.name}`
//         else
//             return `${current.name}`
//     }, '')
// }

function showListOfFilms(arr) {
    return arr.reduce((resStr, current) => `${typeof (resStr) === 'object' ? resStr.name : resStr}, ${current.name}`)
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film['id'] = i + 1;
        return film;
    }
    )
}


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => Object.keys(film).includes('id'))
}
console.log(checkFilms(films));
    




