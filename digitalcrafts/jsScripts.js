const arra = (numbers) =>{
    const k = 5;
    const number = numbers.sort()
    console.log(number)
    for(i = 0; i < number.length; i++){
        let j = number[i]
        for (z = 0; z < number.length; z++){
            let l = number[z]
            if (l + j == 5){
                console.log(l, j)
            }

        }
    

    }

}

const largestEle = (findFrom, findTo) =>{
    let x = findTo
    largestEleArray = []

    if (x > findFrom.length || x < 0){
        console.log("You are out of index")
    }else{
        for(i = 0; i < x; i++){
            largestEleArray.push(findFrom[i])
            }
        console.log(largestEleArray)
        console.log(Math.max(...largestEleArray))
        }
}

arra([0,3,-1,2,4,1,6,3]) 
largestEle([4,5,9,2,35,4,1], 1)