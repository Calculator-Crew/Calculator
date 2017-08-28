(function () {
    "use strict";

    // var calculator = {};
    // calculator.leftOperand = "";
    // calculator.operator = "";
    // calculator.rightOperand = "";
    var buttonPressed = "";

    var leftOperand = document.getElementById("leftOperand");
    var operator = document.getElementById("operator");
    var rightOperand = document.getElementById("rightOperand");
    var calculatorButtons = document.getElementsByClassName("calculatorBtn");

    for (var i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', function (event) {
            event.preventDefault();
           buttonPressed = this.innerText;

           if (isOperatorBtn(this)) {
               operator.value = buttonPressed;
           } else if (operator.value.length > 0) {
               rightOperand.value = rightOperand.value + buttonPressed;
           } else {
               leftOperand.value = leftOperand.value + buttonPressed;
           }

           switch(buttonPressed) {
               case "C":
                   leftOperand.value = "";
                   operator.value = "";
                   rightOperand.value = "";
                   break;
           }

        });
    }

    function isOperatorBtn (buttonToTest) {
        return (buttonToTest.className.split(" ").indexOf("operatorBtn") > -1 ? true : false);
    }
})();