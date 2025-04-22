class Person {
    #ssn;
    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }
    get() {
        return `${this.name} the ${this.#ssn}`;
    }
}
class Employee extends Person {
    constructor(name, ssn, Employeeid) {
        super(name, ssn);
        this.Employeeid = Employeeid;
    }
    getDetails() {
        return `${this.get()} and ${this.Employeeid}`
    }
}
const e1 = new Employee('Sahil', 1, 12);
const ans = e1.getDetails();
console.log(ans);