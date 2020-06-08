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
      console.log('example2:', arr[i]);
    }


    // arr.forEach((item) => {     // 2 способ )
    //     console.log('example2:', item);
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
    //     console.log('example3:', num);
    // }


    for (let i = 10; i > 0; i--) {     // 2 способ )
        if ( i % 2 !== 0 ) {
          console.log('example3:', i);
        }
    }
}
example3();


/*
 Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
*/
function example4() {
    for(let line = '#'; line.length <= 7; line += '#') {
        console.log('example4:', line);
    }
}
example4();


/*
Напишите программу, которая выводит через console.log все числа от 1 до 100, 
с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить 
‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех 
чисел, которые делятся и на 3, и на 5.
*/
function example5() {
    for (let num = 1; num <= 100; num++) {
        let output = '';
        if(num % 3 === 0) output += 'Fizz';
        if(num % 5 === 0) output += 'Buzz';
        console.log('example5:', output || num);
    }
}
example5();


/*
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
*/
function example6() {
    let size = 8;

    let board = '';

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += ' ';
            } else {
                board += (1 + 2) % 2 === 0 ? ' ' : '#';
            }
        }
        board += '\n';
    }
    console.log(board);
}
example6();


/* 
Создайте непустой массив и получите сумму его первого и 
последнего элементов.
 */
function example7() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return arr[0] + arr[arr.length - 1]; 
}
console.log(example7());


/* 
есть автобус, надо посчитать сколько останется пассажиров после 
последней остановки
*/
function example8() {
    const bus = [ [10, 0], [5, 3], [1, 5] ]; // 8
    let count = 0;

    for(let i = 0; i < bus.length; i++ ) {
      count = count + bus[i][0] - bus[i][1];
    }
    return count;
}
console.log(example8());

/* 
тоже самое но - с помощью массива объекта
*/
function example9() {
    const bus1 = [ 
      {in: 10, out: 0},
      {in: 5, out: 3},
      {in: 1, out: 7},
    ]; // 6
    let resultCount = 0;

    for(let i = 0; i < bus1.length; i++ ) {
    	resultCount = resultCount + bus1[i].in - bus1[i].out;
    }
    return resultCount;
}
console.log(example9());