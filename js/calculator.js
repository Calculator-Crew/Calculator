(function () {
    "use strict";

    function isOperatorBtn (buttonToTest) {
        return (buttonToTest.className.split(" ").indexOf("operatorBtn") > -1);
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        if(rightOperand !== 0) {
            return num1 / num2;
        } else {
            return false;
        }
    }

    function computeCalculation(leftOperand, rightOperand, operator) {
        switch (operator) {
            case "+":
                return add(Number(leftOperand), Number(rightOperand));

            case "-":
                return subtract(Number(leftOperand), Number(rightOperand));

            case "*":
                return multiply(Number(leftOperand), Number(rightOperand));

            case "/":
                return divide(Number(leftOperand), Number(rightOperand));

        }
    }

    function clearCalculator(left, right, operator) {
        left.value = "";
        operator.value = "";
        right.value = "";
    }

    function triggerCalculation(left, right, operator) {
        var leftValue = left.value;
        var rightValue = right.value;
        var operatorValue = operator.value;
        var calculationValue;

        if(leftValue.length > 0 && rightValue.length > 0 && operatorValue.length > 0) {
            calculationValue = computeCalculation(leftValue, rightValue, operatorValue);

            if(calculationValue !== false) {
                left.value = calculationValue;
                operator.value = "";
            } else {
                alert("Sorry, can not divide by 0!");
            }
            right.value = "";
        }
    }

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
                   clearCalculator(leftOperand, rightOperand, operator);
                   break;

               case "=":
                   triggerCalculation(leftOperand, rightOperand, operator);
                   break;

               case "%":
                   rightOperand.value = "100";
                   operator.value = "/";
                   triggerCalculation(leftOperand, rightOperand, operator);
                   break;

               case "+/-":
                   rightOperand.value = "-1";
                   operator.value = "*";
                   triggerCalculation(leftOperand, rightOperand, operator);
                   break;

               default:
                   if (isOperatorBtn(this)) {
                       operator.value = buttonPressed;
                   } else if (operator.value.length > 0) {
                       if(buttonPressed === ".") {
                           buttonPressed = rightOperand.value.indexOf(".")  > -1 ? "" : buttonPressed;
                       }
                       rightOperand.value = rightOperand.value + buttonPressed;

                   } else {
                       if(buttonPressed === ".") {
                           buttonPressed = leftOperand.value.indexOf(".")  > -1 ? "" : buttonPressed;
                       }
                       leftOperand.value = leftOperand.value + buttonPressed;
                   }
           }

        });
    }
})();