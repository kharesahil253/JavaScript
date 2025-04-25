// Asycn and Await 
async function resolve() {
    // pr.then((res) => console.log(res))
    // console.log("Hello")
    const val = await pr;
    console.log(val)
    console.log("Yoo Buddy")
}

resolve();
const pr = new Promise((res, rej) => {
    setTimeout(() => {
        res('Resolved');
    }, 4000)
})

const pr2 = new Promise(res => {
    setTimeout(() => {
        res('Once')
    }, 1000)
}
)
//even though second await has done it work it will wait for the first to complete it's task then the output of both the function will ocuur at same time
async function none() {
    const v1 = await pr
    const v2 = await pr2
    console.log(v1, v2)
}
none()