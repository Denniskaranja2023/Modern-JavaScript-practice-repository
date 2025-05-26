const person= {
    name: 'Dennis',
    walk() {
        console.log(this); //in other programming languages like c# and Java, this always returns the reference to the current object
    },
};
person.walk();//when a function is called as a method in an object this will return a reference to that object

//walk();//when a function is called outside of an object this returns window , the global object/ undefined when the strict mode is enabled 
//Binding this.
const walk= person.walk.bind(person);//bind method defines which object will be called from the 'this' argument... it binds the property to that object
walk(); // in this case, when walk is called, it returns the person object.