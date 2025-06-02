//const person = {
   // talk() {
   //     console.log('this', this);//will log the object person in the console
 //   }
//};

//person.talk();

///const person = {
  //  talk() {
  //      setTimeout(function() {console.log('this', this);},  1000);//setTimeout Function will execute the function in 1000ms/1second.
   // } //when logged in, We get the window check not person object
//};
//person.talk();

//To resolve the above problem,

//const person={
 //   talk(){
 //       var self= this; // To resolve, declare a variable self with the value this
 //       setTimeout(function(){
 //           console.log('self',self); //call the self var in the setTime function.
 //       },1000);
 //   }
//};
//person.talk();//When talk is called, what is logged in the console is the object person

//however, arrow functions do not rebind the this keyword
const person={
   talk(){
        setTimeout(() => {
            console.log('this',this);
        },1000);
    }
};
person.talk()//what will be logged into the console is the person object.