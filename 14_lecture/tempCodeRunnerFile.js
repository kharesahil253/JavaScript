const fast = new Promise(res => setTimeout(() => res("Fast success"), 100));
const slow = new Promise(res => setTimeout(() => res("Slow success"), 500));
const error = new Promise((_, rej) => setTimeout(() => rej("Error!"), 200));

const res = Promise.any([fast, slow, error])
    .then((resut) => console.log(resut))
    .catch((er) => console.error(er));