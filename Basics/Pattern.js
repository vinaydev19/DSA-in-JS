let prompt = require("prompt-sync")();


let n = Number(prompt("enter a numer:- "))


/*
// pattern 1
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ")
    }
    console.log();
}

*/

/* 
 working
 first loop i = 1 inside it 
 second loop j = 1 it run the 1 to n 
 repeat

 in first loop it run second loop that print ***** then it end the second loop 
 then it run the console.log when it run the console.log it go the next line
 then it repeat unit it condition failed 
*/




/*
// pattern 2
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
*/


/*
// pattern 3
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ")
    }
    console.log();
}
*/


/*
// pattern 4
for (let i = 1; i <= n; i++) {
    let ascii = 65
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii) + " ")
        ascii++
    }
    console.log();
}
*/



/*
working:example
let n =5 

first loop i = 1 it run it unit i <= 5 as n
then it go to second inside loop j = 1 run it unit j <= i
round 1
loop 1: i = 1
loop 2: j = i what is i = 1 it run only one time and print one *


round 2
loop 1: i = 2
loop 2: j = i what is i = 2 it run only two time and print two **

repeat and increased by one everytime
*/



/*
// pattern 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
*/



/* 
working:example
let n =5 

first loop i = 1 it run it unit i <= 5 as n
then it go to second inside loop j = 1 run it unit j <= n - i + 1
round 1
loop 1: i = 1
loop 2: j <= n - i + 1 what is n = 5, i = 1, + 1 then 5 - 1 + 1 =  it print five time *****

round 2
loop 1: i = 2
loop 2: j <= n - i + 1 what is n = 5, i = 2, + 1 then 5 - 2 + 1 = 4 it print four time ****

it repeat
*/


/*
// pattern 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
    */


/*
working:example
let n =5 

first loop i = 1 it run it unit i <= 5 as n
then it go to second inside loop j = 1 run it unit j <= n - i
then it go the three third loop j = 1 run it nit j <= i
round 1
loop 1: i = 1
inside of loop 1: loop 1: j <= n - i what is n = 5, i = 1, then 5 - 1 = 4 it print four time space
inside of loop 1: loop 2: j <= i what is i = 1 then it print four time *

round 2
loop 1: i = 2
inside of loop 1: loop 1: j <= n - i what is n = 5, i = 2, then 5 - 2 = 3 it print three time space
inside of loop 1: loop 2: j <= i what is i = 1 then it print four time **

it repeat

*/



/*
// pattern 6
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log();
}
    */






/*
// pattern 7
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (i === j || i + j === 2 * n) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log();
}
*/



// question

// pattern 1
/*
*
* *
*   *
*     *
* * * * *
*/
// solve
// TODO:
/*
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}
*/


// pattern 2
/*
* * * * *
*       *
*       *
*       *
* * * * *
*/
/*
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if(i === 1 || i === n || j === n || j === 1){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}
*/



// pattern 1
/*
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) { 
        process.stdout.write("* ");
    }
    console.log();
}



// pattern 1
/*
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/



// pattern 1
/*
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
*/


// pattern 1
/*
*           *
* *       * *
* * *   * * *
* * * * * * *
* * * * * * *
* * *   * * *
* *       * *
*           *
*/


// pattern 1
/*
        1
      1 1
    1 2 1
   1 3 3 1
 1 4 6 4 1
*/



// pattern 1
/*
        1
      2 3
    4 5 6
  7 8 9 10
11 12 13 14 15
*/



// pattern 1
/*
1
2 3
4 5 6
7 8 9 10
*/




