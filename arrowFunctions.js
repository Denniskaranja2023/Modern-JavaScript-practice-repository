//const square = function(number) { //old Javascript way
    //return number*number;
//}

const square = number =>  number*number;// Modern Javascript way. Where there are more than one parameter, they are enclosed in paranthesis deparated by comma. For no parameters, paranthesis are left blank. 
console.log(square(5.7));

//practical example
const jobs= [//Array with different objects defining whether a job type is active or not active
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false},
];
//you want only the active jobs
//const activeJobs = jobs.filter(function(job){return job.isActive; }); //we are calling a filtered array of the jobs variable. what is the parameter? a function called job that returns only the object where is active is found to be true.
//the constant activeJobs is assigned whatever comes out of the function above... the above code is not clean
//To make the code clean: Use arrow functions.
const activeJobs = jobs.filter(job => job.isActive); //filter jobs where job is active
console.log(activeJobs);