'use strict'

const lines = 5;
    
let result = '';
    

// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < (i * 2 + 1); j++) {
        result += '*';
    }
     
    if (i < lines) result = result + '\n';
   
}
console.log(result);


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

secondTask();