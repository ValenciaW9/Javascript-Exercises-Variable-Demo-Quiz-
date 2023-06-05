// 1. Declare a variable called `firstName` and assign it your first name as a string:
var firstname = ('Valencia')

// 2. Declare a variable called `lastName` and assign it your last name as a string:
var firstName = "Valencia":
var lastname ="Walker"
Var firstName, lastname, fullname;
firstName = 'valencia';
lastname = 'walker';
fullname ='firstName' + 'lastName';
// 3. Declare a variable called `age`:
var myage ; var myage: var myage = 
"33"
console.log(myAge); 33


// 4. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?

public static void main(String[] args) throws Exception {
    Scanner scan = new Scanner ( System.in);
    System.out.println(" Enter Name : ");
    String name = scan.nextLine();
    System.out.println("Input: " + name);
    System.out.println("Formated: " + formatName(name));
}

public static String formatName ( String name ) throws Exception {
    String[] nameTokenized = name.split(" ");
    if (nameTokenized.length!=2){
        throw new Exception("Incorrect Name");
    }
    String firstName = nameTokenized[0];
    String lastName = nameTokenized[1];

    return lastName + ",
}//end formatName


// 5. Assign the `age` variable to a number:

var myAge = 33;

// 6. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
myFunction = function() {
    var first = document.getElementById("firstname").value;
    var second = document.getElementById("lastname").value;

    document.getElementById("here").innerHTML = first+" "+second;
}