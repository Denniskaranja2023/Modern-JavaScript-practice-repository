const person= {
    name: 'Dennis',
    walk() {
        console.log(this);//this is a special keyword in Javascript. In C languages, this returns reference to the current object in this case person. It is a bit different for Javascript as it only refers to the object if the method is called in conjunction with the object
    }
};

person.walk();// object will be displayed in console including the method walk
const walk= person.walk;
walk();//when called alone, the method wont appear in console despite this being used. It will be undefined