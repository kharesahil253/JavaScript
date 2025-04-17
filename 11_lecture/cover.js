const arr1 = [1, 2, 3, 1, 4, 6, 3, 8]
const Peakwk = (arr) => {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else end = mid;
    }
    return end;
}
console.log(Peakwk(arr1));

//Private element
class BankAccount {
    #balance;
    constructor(amt) {
        this.amt = amt
    }
    deposit() {
        if (this.amt <= 0) this.#balance += this.amt
    }
    getBalance() {
        return 'My Ac Balance is ${this.#balance};
    }
}
//inheritance
class Vehicle{
        constructor(brand){
            this.brand=brand
        }
        getBrand(){
            return'this.brand'
        }
}
// class Car extends Vehicle{
//     constructor(color,)
// }