
function clearInput(){
    let inputEle=document.getElementById("inputId");
    inputEle.value= "";
}
function modulus(){
    let inputEle=document.getElementById("inputId");
    appendOperator(inputEle,"%");
}
function del(){
    let inputEle=document.getElementById("inputId");
    let currentInput = inputEle.value;

    // Check if the current input has any characters
    if (currentInput.length > 0) {
        // Remove the last character using slice
        inputEle.value = currentInput.slice(0, -1);
    }
}
function dividedby(){
    let inputEle=document.getElementById("inputId");
    appendOperator(inputEle,"/");
}
function seven(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="7";
}
function eight(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="8";
}
function four(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="4";
}
function five(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="5";
}
function six(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="6";
}
function one(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="1";
}
function two(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="2";
}
function three(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="3";
}
function minus(){
    let inputEle=document.getElementById("inputId");
    appendOperator(inputEle,"-");
}
function zero(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="0";
}
function dot(){
    let inputEle=document.getElementById("inputId");
    if(!inputEle.value.includes(".")){
        inputEle.value+=".";
    }
}

function numNine(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="9";
}

function sumfun(){
    let inputEle=document.getElementById("inputId");
    appendOperator(inputEle,"+");
}
function multiply(){
    let inputEle=document.getElementById("inputId");
    appendOperator(inputEle,"*");
}
function doublezero(){
    let inputEle=document.getElementById("inputId");
    inputEle.value+="00";
}


function equalto(){
    let inputEle=document.getElementById("inputId");
       /*  inputEle.value=eval(inputEle.value)  */
       try{
        inputEle.value=eval(inputEle.value)
       }catch(error){
        inputEle.value="Error";
       }
    
}

function appendOperator(inputEle,operator){
    let currentvalue=inputEle.value;
    let lastChar=currentvalue.charAt(currentvalue.length-1)
    if(isOperator(lastChar)){
        inputEle.value=currentvalue.slice(0,-1)+operator;
    }else{
        inputEle.value+=operator;
    }
}

function isOperator(char){
    return ["+","-","*","/","%"].includes(char);
}