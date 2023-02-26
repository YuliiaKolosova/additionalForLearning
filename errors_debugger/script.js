'use strict';

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < parseInt(average, 10)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     //const copy = Object.assign({}, data);
//     const copy = {};
//     for (let key in data) {
//         if (typeof (data[key]) == 'object') {
//             if (Array.isArray(data[key])) {
//                 copy[key] = Object.assign([], data[key]);
//             } else {
//                 copy[key] = Object.assign({}, data[key]);
//             }
                
//         } else {
//             copy[key] = data[key];
//         }
//     }
//     copy.waitors[0] = { name: 'Mike', age: 32 };
//     return copy;
  
// }
// // !!!!!!!!!!  Look down  !!!!!!!!!!!!!!!!!!!

// // function transferWaitors(data) {
// //     const copy = Object.assign({}, data);

// //     // Нам просто нужно менять весь массив данных,
// //     // а не лезть напрямую менять каждого из сотрудников
// //     // Так как это верхний уровень объекта, то значение
// //     // будет меняться только у копии
// //     copy.waitors = [{name: 'Mike', age: 32}];
// //     return copy;
// // }

// transferWaitors(restorantData);

// //рекурсія, возведення числа в ступінь
// function pow(x, n) {
//     if (n < 0)
//         return -1;
//     if (n === 0)
//         return 1;
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 0));
// console.log(pow(2, 3));

// //факторіал (рекурсія)
// function factorial(num) {
//     if (typeof (num) != "number" || !Number.isInteger(num))
//         return "Введите целое число";
//     if (num <= 0)
//         return 1;
    
//     if (num === 1) {
//         let result = 1;
//         return result*num;
//     } else {
//         let result = num;
//         return result *= factorial(num - 1);
//     }
    
// }
// console.log(factorial(4.6));

// function amountOfPages(summary) {
//     let result = 0;
//     if (summary < 38889) {
//         while (summary > 2889) {
//             if (!(summary % 4)) result++;
//             summary--;
//         }
//         while (summary > 189) {
//             if (!(summary % 3)) result++;
//             summary--;
//         }
//         while (summary > 9) {
//             if (!(summary % 2)) result++;
//             summary--;
//         }
//         while (summary > 0) {
//             {
//                 result++;
//                 summary--;
//             }
//         }
//     }
//     return result;
  
// }

// function amountOfPages(summary) {
//     let result = 0;
//     if (summary < 38889) {
//         if (summary > 2889) {
//             result += Number.parseInt((summary - 2889) / 4, 10);
//             summary = 2889;
//         }
//         if (summary > 189) {
//             result += Number.parseInt((summary - 189) / 3, 10);
//             summary = 189;
//         }
//         if (summary > 9) {
//             result += Number.parseInt((summary - 9) / 2, 10);
//             summary = 9;
//         }
//         if (summary > 0) {
//             result += summary;
//         }
    
//     }
//     return result;
// }
// function amountOfPages(summary) {
//     let str = '',
//         result = 0;
//     for (let i = 1; i <= summary; i++){
//         str += i;
        
//         if (str.length == summary) {
//             result = i;
//             break;
//         }

//     }
//     return result;
    
// }

// console.log(amountOfPages(1095));
//панграмма БЕЗ ПОВТОРЕНИЙ СИМВОЛОВ (без врахування знаків препинання)
// function isPangram(string) {
//     let newStr = Array.from(new Set(' ' + string)).join('');
//     newStr = newStr.substring(1, newStr.length);
//     newStr = newStr.toLowerCase();
    
//     string = string.replace(/ /g, '')
//     string = string.toLowerCase();
//     console.log(string);
//     console.log(newStr);

//     if (newStr == string) return true;
//     else return false;
// }
// console.log(isPangram('Фабрикуймо гідність, лящім їжею, ґав хапаймо, з’єднавці чаш'));

// function isPangram(string) {
//     let abcStr = 'abcdefghijklmnopqrstuvwxyz',
//         setStr = Array.from(new Set(' .,!?' + string)).join('').toLowerCase();
//     setStr = setStr.substring(5, setStr.length);//прибрали можливі знаки в реченні
    
//     if (setStr.length < 26)
//         return false;
//     for (let i = 0; i < setStr.length; i++){
//         abcStr = abcStr.replace(setStr[i], '');
//     }
//     if (abcStr) return false;
//     else return true;
// }
// console.log(isPangram('The quick brown fox jumps over the lazy dog'));

//считаем вложенные массивы
function deepCount(a) {
    let count = a.length;
    for (let i = 0; i < a.length; i++) 
        if (Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }
    return count;
       
}
console.log(deepCount([1, 2, [3]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));