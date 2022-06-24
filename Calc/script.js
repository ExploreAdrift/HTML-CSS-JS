// putting numbers into display
var disp = "";
let curFun = "";

function press(num){
    disp = disp + num;
    let display = document.querySelector ("#display");
    display.innerText = disp;
}

//  operators
let values = [];


function setOP (oper){
    if(values.length === 1){
        var valTwo = parseFloat(disp);
        values.push(valTwo);
        calc(curFun);
        values = [];
        values.push (sum);
        disp = "";
        curFun = oper;
    }
    if(values.length === 0){
        curFun = oper;
        valOne = parseFloat (disp)
        values.push(valOne)
        disp = ""
    }
    }

function calc(cal){
    if( cal === "+"){
        sum = values[0] + values [1];
    }
    if( cal === "-"){
        sum = values[0] - values [1];
    }
    if( cal === "*"){
        sum = values[0] * values [1];
    }
    if( cal === "/"){
        sum = values[0] / values [1];
    }
    var total = document.querySelector("#display");
    total.innerText = sum;
}
function calculate(){
    var lastNum = parseFloat(disp);
    values.push(lastNum);
    calc(curFun);
}

function clr(){
    values = []
    curFun = ""
    sum = 0
    disp = ""
    var displayText = document.querySelector("#display");
    displayText.innertext = "0";
}


    

