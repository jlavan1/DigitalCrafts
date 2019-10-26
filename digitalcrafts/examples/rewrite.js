const rewrite = (param) => {
    let x = param
    rever = ""
    console.log(param.length)

    for (i =param.length-1; i >=0; i--){
        console.log(param[i])
        console.log(rever+=param[i])
    }

}

rewrite("this");