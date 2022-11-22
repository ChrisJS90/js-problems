let mainArray = []

for (let i = 1; i <= 12; i++) {
    let arrayLoop = []
    for (let j = 1; j <=12; j++) {
        let multiple = i * j
        arrayLoop.push(multiple)
        // console.log(arrayLoop)
    }
    mainArray.push(arrayLoop)
}

console.log(mainArray)