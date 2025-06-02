//Objects in J.S are a collection of key value pairs
const person= {
    name: 'Dennis',
    //walk: function() {} //a function within an object is a method 
    walk() {},//a simpler way to define a method in an object. 
    talk() {},
};
//To access the members of the object there are two methods of doing this
person.talk();//1. The dot notation--> OBJECT-NAME.PROPERTY-TO-BE-ACCESSED. Used when it is known ahead of time the property to be accessed in an object
person['name']= 'John'; //2. The bracket notation-->OBJECT-NAME['PROPERTY-TO-BE-ACCESSED]
console.log(person);

//Bracket notation is used when it is not known ahead of time what method in an object/property is to be accessed. e.g:
const targetMember= 'name';// supposing targetMember is an input field on a form. Whatever the user types in that field, is what will be accessed from the person object
person[targetMember.value]='John';
person.name;

