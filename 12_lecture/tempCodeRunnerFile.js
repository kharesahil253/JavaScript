function multiplying(number) {
    return this.num * number;
}
const numpro = {
    num: 5
}
const result = multiplying.call(numpro, 3)
console.log(result);