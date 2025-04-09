const ob2 = {
    Name: "Random",
    Roll: 237,
    absent: false
};
// To Obtain all the keys
console.log(Object.keys(ob2));

// To Obatian all the values
console.log(Object.values(ob2));

//The key values pair
console.log(Object.entries(ob2));

//Iterate in object with for in loop
for (let key in ob2) {
    console.log(`${key} => ${ob2[key]}`);
}

// frequency
const frequency = (str) => {
    let freq = {}; 
    for (let i = 0; i < str.length; i++) { 
        let char = str[i];
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    for (let char in freq) {
        console.log(`${char} => ${freq[char]}`);
    }
};

const str = "hello";
frequency(str);