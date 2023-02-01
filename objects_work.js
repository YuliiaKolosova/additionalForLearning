// 'use strict';

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         let result = '';
//         const { age } = plan,
//             { languages } = plan.skills;
//         if (age) {
//             result += `Мне ${age}`;
//         }
        
//         if (languages.length > 0) {
//             result += ` и я владею языками:`;
//             for (let elem of languages) {
//                 result += ` ${elem.toUpperCase()}`;
//             }
//         }
//         return result;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// // function showExperience(plan) {
// //     const obj = { ...plan['skills'] };
// //     return (obj['exp']);
// // }

// function showExperience(plan) {
//     const { exp } = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     const { programmingLangs } = plan['skills'];
//     let result = '';
   
//     for (let key in programmingLangs) {
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return result;
// }

// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    square: function () {
        let result = 0;
        for (let item of this.shops) {
            const { width, length } = item;
            result += width * length; 
        }
        return result;
    },
    volume: function () {
        return this.square() * this.height;
    }
    
}

function isBudgetEnough(data) {
    if (data.volume() * data.moneyPer1m3 > data.budget) {
        return 'Бюджета недостаточно';
    } else {
        return 'Бюджета достаточно';
    }
}

isBudgetEnough(shoppingMallData);