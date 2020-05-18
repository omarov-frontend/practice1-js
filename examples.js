/* 
    task - 1) Выведи в консоль все числа от -2 до 13
*/
function example1() {
    for (let i = -2; i <= 13; i++) {
        console.log(i);
    }
}
example1();


/*
    task - 2) Выведи с помощью цикла фразу по частям "Ура! Ура! Ура! Это победа!"
*/
function example2() {
    let arr = ['Ура!', 'Ура!', 'Ура!', 'Это победа!'];

    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}
example2();


/*
    task - 3) Выведи в консоль все нечетные числа от 10 до 0, по убыванию
*/
function example3() {
    let num = 10;

    while(num > 0) {
        num--;
        if (num % 2 === 0) {
      	    continue;
        }
        console.log(num);
    }
}
example3();