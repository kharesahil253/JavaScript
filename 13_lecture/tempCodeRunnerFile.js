const user = {
    name: 'Sahil',

    introduce: function (name, city, country) {
        this.city = city;
        this.country = country;
        console.log(`${this.name} lives in ${this.city}, and the country is ${this.country}`);
    }
};

// Using call
user.introduce.call(user, 'Sahil', 'Lucknow', 'India');

// Using apply
user.introduce.apply(user, ['Sahil', 'Lucknow', 'India']);

// Using bind
const bindFn = user.introduce.bind(user, 'Sahil', 'Lucknow', 'India');
bindFn();