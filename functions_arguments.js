'use strict';

function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];

    return arr;
}

console.log(returnNeighboringNumbers(3));

// Место для третьей задачи
function getMathResult(nummer, step) {
    let result = '';
    if (typeof(step) !== 'string' && step > 0 ) {
        for (let i = 1; i <= step; i++) {
            result += nummer * i;
            if (i < step) {
                result += "---";
            }
        }
        return result;
    }
    else return nummer;
}

console.log(getMathResult(4, '0'));



// Место для первой задачи
function calculateVolumeAndArea(lengt) {
    if (typeof (lengt == 'number') && lengt > 0 && (Math.round(lengt) == lengt))
    {
        return `Объем куба: ${lengt * lengt * lengt}, площадь всей поверхности: ${lengt * lengt * 6}`;
    } else {
        return 'При вычислении произошла ошибка';
    }

}
console.log(calculateVolumeAndArea(1.2));

// Место для второй задачи
function getCoupeNumber(nummer) {
    if (typeof (nummer === 'number') && nummer >= 0  &&  Number.isInteger(nummer))
    {
        if (nummer == 0 || nummer > 36) {
            return 'Таких мест в вагоне не существует';
        } else {
            if (nummer < 4) return 1;
            else return Math.ceil(nummer / 4);
        }
    } else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
}

console.log(getCoupeNumber(33));

// Место для первой задачи
function getTimeFromMinutes(time) {
    if (typeof(time) == 'string' || time < 0 || !Number.isInteger(time))
    {
        return "Ошибка, проверьте данные";
    }
    else {
        let min, hour, hourWord, minWord;
        
        min = time % 60; 
        hour = (time - min) / 60; 
        
        if (hour % 10 == 1)
            hourWord = "час";
        else if (hour % 10 >= 2 && hour % 10 <= 4)
            hourWord = "часа";
        else if (hour % 10 >= 5 || hour % 10 === 0 || hour <= 20)
            hourWord = "часов";
        
        if (min % 10 == 1)
            minWord = "минута";
        else if (min % 10 >= 5 || min % 10 === 0 || min <= 20) 
            minWord = "минут";
        else if (min % 10 >= 2 && min % 10 <= 4)
            minWord = "минуты";
        else console.log(min % 10);
        
        return `Это ${hour} ${hourWord} и ${min} ${minWord}`;
    }
}

console.log(getTimeFromMinutes(120));


// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (a !== undefined && b !== undefined && c !== undefined && d !== undefined &&
        typeof (a) == 'number' && typeof (b) == 'number' && typeof (c) == 'number' && typeof (d) == 'number') {
        return Math.max(a, b, c, d);
    }
    else return 0;

}

console.log(findMaxNumber(1,2,4));


function fib(num) {
    let resultStr = '';
    
    if (typeof (num) == 'number' && num > 0 && Number.isInteger(num))
    {
        let preLastNum = 0,
            lastNum = 1,
            sum = 1;
        resultStr = "0";
        for (let i = 1; i < num; i++) {
            resultStr += " " + sum;
            sum = preLastNum + lastNum;
            preLastNum = lastNum;
            lastNum = sum;
            
        }
    }
  
    return resultStr;
}

console.log(fib(8));