// 1. wap to print 1 to n using while loop 
// let i = 1;// start point 
// let n = 10;
// while (i <= n) {
//     document.writeln(i, "<br>");
//     i++;
// }

//2. wap to print n to 1 using while loop 
// let i = 1;
// let n = 10;
// while (n >= 1) {
//     document.writeln(n, "<br>")
//     n--;
// }

// 3. wap to print only even numbers from 1 to n using while loop
// let i = 1;
// let n = 20;
// while (i <= n) {
//     if (i % 2 == 0)
//         document.writeln(i, "<br>");
//     i++;
// }

// 4.wap to print only odd number from n to 1 using while loop 
// let i = 1;
// let n = 20;
// while (n >= 1) { // 20 

//     if (n % 2 == 1) {
//         document.writeln(n, "<br>");
//     }
//     n--;

// }

// wap to print leap years between start to end 
let start = 2025;
let end = 2050;

while (start <= end) {
    if (start % 4 == 0) {
        document.writeln(start, "<br>");

    }
    start++;
}
