
var operatorSelected;
var oldValue;

function btnclick(numb){
calculatorscreen=document.getElementById("calculatorscreen").value
newValue=calculatorscreen+numb
document.getElementById("calculatorscreen").value=newValue

}
function plus(){
    operatorSelected="+"
    oldValue=document.getElementById("calculatorscreen").value;
    document.getElementById("calculatorscreen").value=""
}
function minus(){
operatorSelected="-"
oldValue=document.getElementById("calculatorscreen").value;
document.getElementById("calculatorscreen").value=""
console.log(result)
}
function multiply(){
    operatorSelected="*"
    oldValue=document.getElementById("calculatorscreen").value;
    document.getElementById("calculatorscreen").value=""
    console.log(result)
}
function division(){
    operatorSelected="/"
    oldValue=document.getElementById("calculatorscreen").value;
    document.getElementById("calculatorscreen").value=""
    console.log(result)

}
function calculation(){
    var result;
    currentValue= document.getElementById("calculatorscreen").value
    if(operatorSelected=='+'){
        result=Number(oldValue)+Number(currentValue);
        document.getElementById("calculatorscreen").value=result;
        console.log(result)

    } 
    else if(operatorSelected=='-'){
        result = Number(oldValue)-Number(currentValue) 
        document.getElementById("calculatorscreen").value=result;

    }
    else if(operatorSelected=='*'){
        result = Number(oldValue)*Number(currentValue) 
        document.getElementById("calculatorscreen").value=result;

    }
    else{
        result = Number(oldValue)/Number(currentValue) 
        document.getElementById("calculatorscreen").value=result;
    }
}


function clears(){
    document.getElementById("calculatorscreen").value=""
}
