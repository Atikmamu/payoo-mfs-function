function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldValueById(id){
    const TextValue = document.getElementById(id).innerText;
    const TextNumber = parseFloat(TextValue);
    return TextNumber; 
}