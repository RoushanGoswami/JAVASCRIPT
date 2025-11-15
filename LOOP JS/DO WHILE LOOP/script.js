// 1. wap to print 1 to n using do while loop
// let i = 1;
// const n = 20;

// do {
//     document.writeln(i, "<br>");
//     i++;
// } while (i <= n);

// 2. wap to print n to 1 using do while loop 
// let i = 1;
// let n = 20;

// do {
//     document.writeln(n, "<br>")
//     n--;
// } while (n >= 1);

//3. wap to print only even numbers from 1 to n using do while loop 

// let i = 1;
// let n = 20;
// do {
//     if (i % 2 == 0) {
//         document.writeln(i, "<br>")
//         i++;
//     }

// } while (i <= n);
// 4. wap to print only odd number from n to 1 using do while loop 
// let i = 1;
// let n = 20;

// do {
// if (n%2==1)
// {
//     document.writeln(n,"<br>")
// }
//     n--;
// }while (n>=1);

// wap to print leap years from start to end using do while loop

let start = 2025;
let end = 2050;

do {
    if (start % 4 == 0) {
        document.writeln(start, "<br>")
    }
    start++;
} while (start <= end);