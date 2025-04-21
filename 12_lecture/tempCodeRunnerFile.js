const user = {
    name: "Sahil",
    getName(age) {
        console.log(`Name: ${this.name}, Age: ${age}`);
    }
}
user.getName.call(user, 21); // call
user.getName.apply(user,[21]) // apply array main

const bindfn = user.getName.bind(user);
bindfn(21);//bind