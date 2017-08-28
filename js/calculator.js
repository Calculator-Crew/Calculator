(function () {
    "use strict";

    // var calculator = {};
    // calculator.leftOperand = "";
    // calculator.operator = "";
    // calculator.rightOperand = "";
    var buttonPressed = "";

    var leftOperand = document.getElementById("leftOperand");
    var calculatorButtons = document.getElementsByClassName("calculatorBtn");

    for (var i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', function (event) {
           event.preventDefault();
           buttonPressed = this.innerText;
           leftOperand.value = leftOperand.value + buttonPressed;
           switch(buttonPressed) {
               case "C":
                   leftOperand.value = "";
                   break;
           }

        });
    }
})();