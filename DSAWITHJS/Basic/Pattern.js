let n = 5


// pattern 1
/*
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
*/


// pattern 2
/*
*
* *
* * *
* * * *
* * * * *

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
*/


// pattern 2

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j} `)
    }
    console.log();
}
*/


// pattern 4
/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${i}`)
    }
    console.log();
}
*/


// pattern 5
/*
* * * * *
* * * *
* * *
* *
*

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
*/


// pattern 6
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(`${j} `)
    }
    console.log();
}
*/


// pattern 7
/*
     *
    ***
   *****
  *******
 *********

 for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(" ")
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        process.stdout.write("*")
    }

    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(" ")
    }
    console.log();
}
*/


// pattern 8
/*
 *********
  *******
   *****
    ***
     *

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ")
        }

        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
            process.stdout.write("*")
    }

    for (let j = 0; j < i; j++) {
        process.stdout.write(" ")
    }
    console.log();
}
    */


// pattern 9
/*
     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *
    
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(" ")
        }
        
    for (let j = 0; j < 2 * i + 1; j++) {
        process.stdout.write("*")
    }

    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(" ")
    }
    console.log();
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write(" ")
    }

    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
        process.stdout.write("*")
    }

    for (let j = 0; j < i; j++) {
        process.stdout.write(" ")
    }
    console.log();
}
*/


// pattern 10
/*
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *
*/

for (let i = 1; i <= n * 2 - 1; i++) {
    let star = i;
    if (i > n) star = 2 * n - i
    for (let j = 1; j < star; j++) {
        process.stdout.write("* ")
    }
    console.log();
}


// pattern 11
/*
1
01
101
0101
10101
010101

let star = 1;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) star = 1
    else star = 0
    for (let j = 0; j <= i; j++) {
        process.stdout.write(star.toString())
        star = 1 - star
    }
    console.log();
}
*/


