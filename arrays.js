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


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard','Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    
    const notInGroupCount = arr.length % 3;
    let index = 0,
        groupNum = 0,
        groups = [],
        notInGroupStr = 'Оставшиеся студенты:';
    
    for (let i = 0; i < (arr.length - notInGroupCount) / 3; i++)
    {
        groups.push([]);
    }
    while (index < arr.length - notInGroupCount) {
        groups[groupNum].push(arr[index]); 
        index++;
        if (!((index - groupNum * 3) % 3))
             groupNum++;
    }
    if (notInGroupCount > 0) {
        for (let i = notInGroupCount; i > 0; i--) {
            notInGroupStr += ` ${arr[arr.length - i]}`;
            if (i > 1) notInGroupStr += ",";
            console.log(arr.length - i);
        }
    } else {
        notInGroupStr += ' -';
    }
    groups.push(notInGroupStr);
    return groups;
}

sortStudentsByGroups(students);

console.log([ ] + 1 + 2);