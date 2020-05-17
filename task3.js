/*
    task - 3) Выведи в консоль все нечетные числа от 10 до 0, по убыванию
*/
let num = 10;

while(num > 0) {
    num--;
    if (num % 2 === 0) {
  	    continue;
    }
    console.log(num);
}