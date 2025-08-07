function name() {
    return 'Hello "аргумент функций"'
}
name()

const users = [1,2,3,4,5]

function checkForCopyItem(array,item) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return ${item}
        }
    }
    return
}

console.log(checkForCopyItem(numbers))


const users = [2, 3]
function calculate (num1, num2, operator)

let result = calculate(2, 3, '+')
console.log(result)

let result = calculate(2, 3, '-')
console.log(result)

let result = calculate(2, 3, '*')
console.log(result)

let result = calculate(2, 3, '/')
console.log(result)