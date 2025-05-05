/*
let resultDisplay = document.getElementById("result");


function appendValue(value) {
    resultDisplay.value += value; 
} 


function calculateResult() {
    try {
        resultDisplay.value = eval(resultDisplay.value); 
    } catch (error) {
        resultDisplay.value = "Error"; 
    }
}


function clearDisplay() {
    resultDisplay.value = ""; 
}
*/











function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function clearEnd(){
    let result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        let displayValue = document.getElementById('result').value;
        let result = new Function('return (' + displayValue + ')')();
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = "Error";
    }
}
















