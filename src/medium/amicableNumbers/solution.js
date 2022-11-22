let mainArray = []

function findDevisors(num) {
    let arrayDevisors = []
    for (let i = 1; i <= num; i++) {
        let divis = num % i
        if (divis === 0) {
            arrayDevisors.push(i)
        }
    }
    return arrayDevisors
}

function sumDevisors(array) {
    let sum = 0
    for (let i = 0; i < array.length - 1; i++){
        sum += array[i]
        // console.log(`in loop devisors ` + sum)
    }    
    return sum
}

function isAmicable(num) {
    let num2 = sumDevisors(findDevisors(num))
    // console.log(`sum deviors ` + num2)
    let num1 = sumDevisors(findDevisors(num2))
    if (num === num1) {
        let array = [num, num2]
        return mainArray.push(array)
        }
}

for (let i = 1; i < 100000; i++) {
    isAmicable(i)
}

// isAmicable(220)

console.log(mainArray)