const SumOf50 = () =>{
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value

    sum = num1 + num2

    if (sum === 50){
        Result = "True"
    }else if (num1 || num2 !== 50){
        Result = "False"
    }else{
        Result = "False"
    }

    document.getElementById("Analyze").innerHTML = Result;
} 

