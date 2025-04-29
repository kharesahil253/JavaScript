// Use Promise.all to fetch data from multiple APIs and process results only if all succeed.
// // Simulate API calls
const fetchUser = () => Promise.resolve("User data");
const fetchPosts = () => Promise.resolve("Post data");
const fetchComments = () => Promise.resolve("Comment data");
Promise.all([fetchPosts(), fetchUser(), fetchComments()])
    .then(([x, y, z]) => {
        console.log(x, y, z);
    })
    .catch((error) => {
        console.log("Error fetching data", error);
    });

//Q-2
// Use Promise.allSettled to log the result of all API calls regardless of success or failure.
const p1 = Promise.resolve("A resolved");
const p2 = Promise.reject("B failed");
const p3 = Promise.resolve("C resolved");

const ans = Promise.allSettled([p1, p2, p3])
    .then((res) => console.log(res))

//Q-3
// Use Promise.race and Promise.any to handle timeouts and partial success.
const fast = new Promise(res => setTimeout(() => res("Fast success"), 100));
const slow = new Promise(res => setTimeout(() => res("Slow success"), 500));
const error = new Promise((_, rej) => setTimeout(() => rej("Error!"), 200));

const res = Promise.any([fast, slow, error])
    .then((resut) => console.log(resut))
    .catch((er) => console.error(er));

const res2 = Promise.race([fast, slow, error])
    .then((re) => console.log(re))
    .catch((non) => console.log(non));