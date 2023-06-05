//declare variables using the 
let //keyword
//asign values to variables using the assignment operator 
(=)
// use the shortcuts 
+= , -= , ++, -- //to reassign variables
//identify 
undefined //as the default value for unassignmed variables.

//Initializing a variable
//to initalize variable in Javascript we'll need two new pieves of syntaX;
let and = . // We can give the variable any name that we wish and assign it a value. Once we initialize a variable will evaluate to the value assigned:
let bootcamp = "App Academy";
console.log(bootcam); // 'App Academy'


let birthYear=1990;
console.log(birthYear): //2012

//Did you know? Javascript variable names can contain any alphanumeric characters, underscore(_), or dollar sign ($). However, they cannot begin with a number.

//The variable initializations above really consist of two steps: declaration with let and assignment with =. Let's break these two steps down.

//Declaring a variable
//variable ,we must declare it. Variable declartion is the act of introducing the variable to the enviornment.
//TOdeclare a variable, use the let keyword, followed by a spacve and then the name of the variable.
let bootcamp:
console.log(bootcamo); //undefined

//Once a variable is declared, it will contain undefined  as its value. undefined is a common default value in javascript,  and we'll see it come up in a few different places, Think of undefined as showing that the variable is empty.

//Assiging a variable--Once a variable has been declared, we can assign it a value using single-equals = :
let bootcamp;
console.log(bootcamp) ; //undefined
bootcamp = 'App Academy';
console.log(bootcamp); // 'App Academy"

//Manipulating variables
//To change the value of a variable, we need to reassign it to a new value with
 = : 

 let num = 42 ;
 console.log(num + 8) : => 50
 console.log(num); // => 42

 num=num = 10;
 console.log(num): //+> 52

 //in the code above, num + 8 will evaluate to 50, but it will not change the num variable to 50. if we want to change the num variable, we must reassign to it.

 //Assignment Shorthand
 //changing the value of a numble variable is something fairly common in programmingworld. Luckily there is some shorthand operators we can use:
 let number=0;
 number+= 10; // equivalent to number= number =!p
 number-= 2; // equivalent to number =number - 2
 number /=4; // equivalent to number=number /4
 number *=7;// equivalent to number =number * 7
 console.log(number): //14

 //another shorthand to add or substract exactly 1 from a variable, the increment (++) and decodeURIComponent(--) operators:
 let year = 3004;
 year++;
 console.log(year): ?? 3005
 year --;
 console.log(year); //3004


//Nan-now that we have the ability to perform arithmatic with variables, let's take a look at a common programming mistake, getting a result of NAn (not anumber):
let num;
console.log(num +3 ); //NaN
//The above code gives Nan because the unassigned num variable contains undefined; adding 3 to undefined results in NAn. in generalm any nonsensical arithmetic will result in NaN. Math operations involving undefined is perhaps the most cocmmon mistake.
console.log(undefined +3); //NaN
console.log("fish" * 2);//NaN

//variables are declared with let and will contain the value undefined bby default.
//we can use a single-equls = to assign variables
//changing a variable requires a reassignment, for which there are many shortcuts (+=, -+, etc.)











