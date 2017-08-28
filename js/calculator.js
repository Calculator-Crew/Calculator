(function () {
    "use strict";

    var buttonPressed = "";

    var leftOperand = document.getElementById("leftOperand");
    var operator = document.getElementById("operator");
    var rightOperand = document.getElementById("rightOperand");
    var calculatorButtons = document.getElementsByClassName("calculatorBtn");

    for (var i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', function (event) {
           event.preventDefault();
           buttonPressed = this.innerText;

           switch(buttonPressed) {
               case "C":
                   leftOperand.value = "";
                   operator.value = "";
                   rightOperand.value = "";
                   break;

               case "=":
                   var leftValue = leftOperand.value;
                   var rightValue = rightOperand.value;
                   var operatorValue = operator.value;
                   if(leftValue.length > 0 && rightValue.length > 0 && operatorValue.length > 0) {
                       var calculationValue = computeCalculation(leftValue, rightValue, operatorValue);

                       if(calculationValue !== false) {
                           leftOperand.value = calculationValue;
                           operator.value = "";
                       } else {
                           alert("Sorry, can not divide by 0!");
                       }
                       rightOperand.value = "";
                   }
                   break;

               default:
                   if (isOperatorBtn(this)) {
                       operator.value = buttonPressed;
                   } else if (operator.value.length > 0) {
                       rightOperand.value = rightOperand.value + buttonPressed;
                   } else {
                       leftOperand.value = leftOperand.value + buttonPressed;
                   }
           }

        });
    }

    function isOperatorBtn (buttonToTest) {
        return (buttonToTest.className.split(" ").indexOf("operatorBtn") > -1);
    }

    function computeCalculation(leftOperand, rightOperand, operator) {
        switch (operator) {
            case "+":
                return Number(leftOperand) + Number(rightOperand);
            case "-":
                return Number(leftOperand) - Number(rightOperand);
            case "*":
                return Number(leftOperand) * Number(rightOperand);
            case "/":
                if(rightOperand !== "0") {
                    return Number(leftOperand) / Number(rightOperand);
                } else {
                    return false;
                }
        }
    }
})();