const pr = new Promise((res, rej) => {
    setTimeout(() => {
        res('Resolved');
    },4000)
})

const pr2 = new Promise(res => {
    setTimeout(() => {
        res('Once')
    }, 1000)
}
)

async function none() {
    const v1 = await pr
    const v2 = await pr2
    console.log(v1, v2)
}
none()