function selectFromArr (numInput : number, filtering: number): number[] {
    //convert the input into an array
    let numArr = numInput.toString().split('').map(Number)
    //and then use filter to select only the digits in the array that satisfies your filter
    const filteredArr = numArr.filter(x => x % filtering ===0)

    return filteredArr

}


function mapArr (numInput: number, operator: number): number[]{

    let numArr = numInput.toString().split('').map(Number)
    const newArr = numArr.map( x => x * operator)        

    return newArr 
}

const selectedDigits = selectFromArr(245789,3)
const newDigits = mapArr(245789,3)

console.log(selectedDigits)
console.log(newDigits)