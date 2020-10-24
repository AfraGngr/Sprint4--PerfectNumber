const inputNumber = document.getElementById("number")
const checkButton = document.querySelector("#btn")
const result = document.querySelector("#result")

checkButton.addEventListener("click", checkNumber)
inputNumber.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
  });



function checkNumber () {
    var number = 1 

    if (inputNumber.value < 1 || inputNumber.value === "" || isNaN(inputNumber.value) ) {
        result.innerHTML =
          "⚡⚡Please Enter A Positive Number⚡⚡";
    } else {
        for (var i = 2 ; i < inputNumber.value; i++) {
            if(inputNumber.value % i == 0){
                number += i
            }
        }
        console.log(inputNumber.value)
        console.log(number)
        if (number == inputNumber.value){
            result.innerHTML = inputNumber.value + " is a Perfect Number.🎯"
        } else {
            result.innerHTML = inputNumber.value + " is not a Perfect Number.❌"
        }
        inputNumber.value = "";
        inputNumber.focus()

    }
    
}

function enter(event) {
    if (event.keyCode === 13) {
        checkNumber();
    }
  }






