// for loops

// print 1 to 100
// for(let i = 1; i<=100;  i++){
//     console.log(i);
// }

// print 100 - 1
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }




// sum of n natural numbers
/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i
            }
            console.log(sum);
        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}
*/



// Sum of n natural numbers and factorial of number
/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            let fact = 1;
            for (let i = 1; i <= n; i++) {
                fact *= i
            }
            console.log(fact)
        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}
*/




// Factors of number
/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            for (let i = 1; i <=n; i++) {
                if (n % i === 0) {
                    console.log(i);

                }
            }
        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}
*/



// prime no
/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            // isPrime = true
            // for (let i = 2; i <= Math.floor(n / 2); i++) {
            //     if (n % i === 0) {
            //         isPrime = false
            //         break;
            //     }
            // }
            // console.log(isPrime);

            console.log(isPrime(n))
        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}


function isPrime(n) {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 == 0) return false
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) return false
    }
    return true
}
*/



/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            let sum = 0;
            while (n > 0) {
                let rem = n % 10;
                sum += rem
                n = Math.floor(n / 10)
            }
            console.log(sum);

        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}

*/


/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            let rev = 0;
            while (n > 0) {
                let rem = n % 10;
                rev = rev * 10 + rem
                n = Math.floor(n / 10)
            }
            console.log(rev);

        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}
    */




/*
let pr = prompt("enter a number")
if (pr === null) {
    console.log("user is cancel");
} else {
    let n = Number(pr)
    if (isNaN(n)) {
        console.log("invalid input");
    } else {
        if (n > 0) {
            let sum = 0
            let copyOfn = n
            while (n > 0) {
                let rem = n % 10;
                let fact = 1
                for (let i = 1; i <= rem; i++) {
                    fact *= i
                }
                sum += fact
                n = Math.floor(n / 10)
            }
            // console.log(sum);
            if (copyOfn === sum) {
                console.log("yes");
            } else {
                console.log("no");

            }
        } else {
            console.log("no should be +ve and more then 0");
        }
    }
}

*/



// let random = Math.floor(Math.random() * 100) + 1

// let guess = -1
// while (guess !== random) {
//     guess = Number(prompt("enter a no"))
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log("enter a no btn 1 to 100");
//         continue
//     }
//     if (guess > random) {
//         console.log("to high");

//     } else if (guess < random) {
//         console.log("to low");

//     } else {
//         console.log("congrate you guess is right", guess);

//     }
// }




