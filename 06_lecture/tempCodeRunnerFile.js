let start = 10;
let end = 50;
for (let i = start; i <= end; i++) {
    let ki ;
    for (let j = 2; j <= start - 1; j++) {
        if (start % j == 0) {
            break;
        }
    }
    console.log(start)
}