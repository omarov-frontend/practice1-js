/* 
    task - 1) Выведи в консоль все числа от -2 до 13
*/
let num1 = -2;

for (num1 = -2; num1 <= 13; num1++) {
 	console.log(num1);
}


/*
    task - 2) Выведи с помощью цикла фразу по частям "Ура! Ура! Ура! Это победа!"
*/
let arr = ['Ура!', 'Ура!', 'Ура!', 'Это победа!'];

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}


/*
    task - 3) Выведи в консоль все нечетные числа от 10 до 0, по убыванию
*/
let num2 = 10;

while(num2 > 0) {
    num2--;
    if (num2 % 2 === 0) {
  	    continue;
    }
    console.log(num2);
}