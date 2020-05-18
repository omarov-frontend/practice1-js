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
    const arr = ['Ура!', 'Ура!', 'Ура!', 'Это победа!'];

    for (let i = 0; i < arr.length; i++) {     // 1 способ )
      console.log(arr[i]);
    }


    // arr.forEach((item) => {     // 2 способ )
    //     console.log(item);
    // });
}
example2();


/*
    task - 3) Выведи в консоль все нечетные числа от 10 до 0, по убыванию
*/
function example3() {
    // let num = 10;
    // while(num > 0) {          // 1 способ )
    //     num--;
    //     if (num % 2 === 0) {
    //   	    continue;
    //     }
    //     console.log(num);
    // }


    for (let i = 10; i > 0; i--) {     // 2 способ )
        if ( i % 2 !== 0 ) {
          console.log(i);
        }
    }
}
example3();