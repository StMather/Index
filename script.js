(() => {
  var numbers = document.getElementsByClassName("grid-number");
  var equal = document.getElementById("equal");
  var add = document.getElementById("+");
  var subtract = document.getElementById("-");
  var multiply = document.getElementById("x");
  var divide = document.getElementById("/");
  var total = document.getElementById("total");

  console.log(numbers);
  console.log(equal);

  //calc class
  class Calculator {
    constructor() {
      (this.total = 0), (this.temp = 0), (this.operator = "None");
    }
    doMath() {
      //switch
      switch (true) {
        case this.operator === "+":
          return this.total + this.temp;
          break;
        case this.operator === "-":
          return this.total - this.temp;
          break;
        case this.operator === "x":
          return this.total * this.temp;
          break;
        case this.operator === "/":
          if (this.temp === 0) {
            return "Cannot divide by zero";
          }
          return this.total / this.temp;
          break;
        default:
          console.log("Error with the math");
      }
    }
    //math operations
    addToTemp(number) {
      this.temp = this.temp * 10 + parseInt(number);
      this.display();
    }

    equal() {
      console.log(this.operator);
      this.temp = calc.doMath();
      this.display();
      this.temp = 0;
      this.total = 0;
    }

    plus() {
      this.operator = "+";
      this.total = this.temp;
      this.temp = 0;
      this.display();
    }

    subtract() {
      this.operator = "-";
      this.total = this.temp;
      this.temp = 0;
      this.display();
    }

    multiply() {
      this.operator = "x";
      this.total = this.temp;
      this.temp = 0;
      this.display();
    }

    divide() {
      this.operator = "/";
      this.total = this.temp;
      this.temp = 0;
      this.display();
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

  add.addEventListener("click", () => {
    calc.plus();
    console.log("plus");
  });

  subtract.addEventListener("click", () => {
    calc.subtract();
    console.log("subtract");
  });

  multiply.addEventListener("click", () => {
    calc.multiply();
    console.log("multiply");
  });

  divide.addEventListener("click", () => {
    calc.divide();
    console.log("divide");
  });
})();
console.log("Anyhing?");
