

let exp_input = document.getElementsByClassName('exp_input')[0]
let result_input = document.getElementsByClassName('result_input')[0]

function clicked(x){
    if(x == "C") {
        exp_input.value = exp_input.value.slice(0, exp_input.value.length-1)
        let ans = eval(exp_input.value)
            if(ans != undefined) result_input.value = ans
    }
    else if(x == "AC") {
        exp_input.value = ""
        result_input.value = ""
    }
    else if(x == "="){
        exp_input.value = result_input.value
        result_input.value = ''
    }
    else {
        exp_input.value = exp_input.value + x
        if(exp_input.value.charAt(exp_input.value.length-1) != '+' &&
        exp_input.value.charAt(exp_input.value.length-1) != '-' &&
        exp_input.value.charAt(exp_input.value.length-1) != '/' &&
        exp_input.value.charAt(exp_input.value.length-1) != '*') {
            let ans = eval(exp_input.value)
            if(ans != undefined) result_input.value = ans
        }
    }
}