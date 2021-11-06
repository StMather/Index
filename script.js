import { doesNotMatch } from "assert";

(() => {
  var numbers = document.getElementsByClassName("grid-number");
  var equal = document.getElementById("equal");
  var add = document.getElementById("+");
  var total = document.getElementById("total");

  console.log(numbers);
  console.log(equal);

  //class
  class Calculator {
    constructor() {
      (this.total = 0), (this.temp = 0), (this.operator = "None");
    }
    doMath(){
        //switch
        switch (true) {
            case this.operator === "+":
            return this.total + this.temp;
              break;
            case  this.operator === "-":
            return this.total - this.temp;
              break;
              case  this.operator === "x":
                return this.total * this.temp;
              break;
              case  this.operator === "/":
                  if(this.temp === 0)
                  {
                      return "Cannot divide by zero";
                  }
                return this.total / this.temp;
              break;
            default:
                console.log("Error with the math")
    }

    addToTemp(number) {
      this.temp = this.temp * 10 + parseInt(number);
      this.display();
    }

    equal() {
        
      this.temp = calc.doMath();
      this.display();
    }

    plus(){
        this.operator="+";
        this.total = this.temp;
    }

    display() {
      total.innerText = this.temp;
      console.log(this.temp);
    }
  }

  var calc = new Calculator();

  //eventlistiners

  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      calc.addToTemp(this.innerText);
    });
  }

  equal.addEventListener("click", () => {
    calc.equal();
    console.log("Equal");
  });
})();
console.log("Anyhing?");
