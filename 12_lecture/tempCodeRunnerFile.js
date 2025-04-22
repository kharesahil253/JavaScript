const per1 = {
    name: "king",
};
function getname() {
    console.log(`${this.name}`)
}
const per2 = {
    name: "Lion"
}
const bindon = getname.bind(per1);
bindon();