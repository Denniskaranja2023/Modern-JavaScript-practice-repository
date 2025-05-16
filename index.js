
const person = {   //an object has curly brackets{}
    name: 'Dennis Karanja', //assigned a string value
    walk: function() {},//Is a function within an object also called a method
    talk() {} //In ES6 version, a method can also be declared this way... no need for colon and function
};
person.talk() //can be used to access the object property talk. This is the dot notation
person['name']= 'John'; //another way to access an object property.Reassigns John to name. It is the bracket notation. IT is used when it is not known ahead of time the property to be accessed
//For example:
const Targetmember= 'name'; //imagine Targetmember input field on a form. Depending on what is typed on that field,different properties will be accessed in the person object
person[Targetmember.value] = 'John';
console.log(person)

