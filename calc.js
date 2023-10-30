// Function to display data on click of button
const displayData = function(_value){
    //console.log(num);
    document.getElementById("display").value += _value;
}

const clearScreen = function(){
    document.getElementById("display").value = "";
}