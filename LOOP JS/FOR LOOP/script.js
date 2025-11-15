// wap to print from 1 to n using for loop 
// let i = 1;
// let n = 20;

// for (i = 1; i <= n; i++) {
//     document.writeln(i, "<br>")
// }

// 2. wap to print from n to 1 using for loop 
// let i = 1;
// let n = 20;

// for (i = 1; n >= 1; n--) {
//     document.writeln(n, "<br>")
// }

// 3. wap to print only even numbers using for loop 

// let i = 1;
// let n = 20;

// for (i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         document.writeln(i, "<br>")
//     }
// }


// 4. wap to print only odd numbers from n to 1 using for loop 
// let i = 1;
// let n = 20;

// for (i = 1; n >= i; n--) {
//     if (n % 2 == 1) {
//         document.writeln(n, "<br>")
//     }
// }

//5. wap to print leap years from start to end using for loop 
let start = 2025;
let end = 2050;
for (start = 2025; start <= end; start++) {
    if (start % 4 == 0) {
        document.writeln(start, "<br>")
    }
}