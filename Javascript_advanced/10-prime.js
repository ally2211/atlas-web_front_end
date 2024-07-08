const { endAt } = require("firebase/database");

function countPrimeNumbers(limit) {

    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i=2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j=1 * i; j<= limit; j+= i) {
                isPrime[j] = false;
            }
        }
    }

    let primeCount= 0;
    for (let i = 2; i<= limit; i++) {
        if (isPrime[i]) {
            primeCount++;
        }
    }
    return primeCount;
  }
 
const limit = 100;
const startTime = performance.now();
for (let i=0; i<100; i++) {
    countPrimeNumbers(limit);
}
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`Execution time of calculating prime numbers 100 times was  ${executionTime} milliseconds.`)
