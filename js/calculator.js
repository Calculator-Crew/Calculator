(function () {
    "use strict";

    var calculator = {};
    calculator.leftOperand = "";
    calculator.operator = "";
    calculator.rightOperand = "";

    var calculatorButtons = document.getElementsByClassName("calculatorBtn");

    for (var i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', function (event) {
           event.preventDefault();
           console.log(this.innerText);
        });
    }
})();