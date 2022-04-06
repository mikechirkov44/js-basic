// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
//Решение через цикл for 

let n = 100;

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// решение с помощью цикла While

let nums = 0;
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(nums);
    nums++;

    //решение с помощью Алгорита - Решето Эратосфена 

    function getPrimes(n) {
        const seive = [];
        const primes = [];

        for (let i = 2; i <= n; i++) {
            if (!seive[i]) {
                primes.push(i);
                for (let j = i * 2; j <= n; j += i) {
                    seive[j] = true;
                }

            }
        }
        return primes;
    }
    showPrimes(n);
    console.log(getPrimes(n));
