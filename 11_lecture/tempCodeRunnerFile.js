class Calculator {
    static add(a, b) {
        return a + b;
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    multiply() {
        return this.a * this.b;
    }
}

const values = new Calculator(2,3);
console.log(values.multiply());
console.log(Calculator.add(5, 6));