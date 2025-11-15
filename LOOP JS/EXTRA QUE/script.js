//1. wap to print the series of numbers : 1 11 111 1111 11111 using while loop
// let i = 1;
// j = 1;
// while (i <= 5) {
//     document.writeln(j)
//     j = j * 10 + 1;
//     i++;
// }

// using do while loop
// let i = 1;
// let j = 1;

// do {
//     document.writeln(j)
//     j = j * 10 + 1
//     i++;
// } while (i <= 5);

//using for loop

// let i = 1, j = 1;
// for (i = 1; i <= 5; i++) {
//     document.writeln(j)
//     j = j * 10 + 1
// }

// wap to print the number series : 0 1 1 2 3 5 8 13

//1. using while loop
// let i = 1;
// let first = 0;
// let second = 1;

// while (i <= 10) {
//     third = first + second;
//     document.writeln(third);
//     first = second;
//     second = third;
//     i++;
// }


// using do while loop 

// let i = 1;
// let first = 0;
// let second = 1;

// do {

//     third = first + second;
//     document.writeln(third);
//     first = second;
//     second = third;
//     i++;
// } while (i <= 10);


// 3. using for loop 

let i = 1;
let first = 0;
let second = 1;
document.writeln("0")
document.writeln("1")


for (i = 1; i <= 10; i++) {
    let third = first + second;
    document.writeln(third);
    first = second;
    second = third;
}
