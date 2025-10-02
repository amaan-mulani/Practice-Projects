let display = document.getElementById("display");

//takes strings...concats basically
function appendValue(value){
    display.value += value;
}

//clearing display
function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value); //in-build method, turns strings into codes. performs operations
    }
    catch{
        display.value="Error";
    }
}