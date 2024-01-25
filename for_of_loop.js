// this is for of loop section 

let object = "sathya sachi paira";

for (const iterator of object) {
    console.log(iterator);
}

// another for-of loop program 

let name_for= "i love my mom";
let size = 0 ;

for (const individual of name_for) {
    console.log("every single word =",individual);
    size++;

}
console.log('size of the word =', size); // size variable is use to find the size of the string in the program 


// for in loop

let detail_of_object ={
    name_of_student : "sathya sachi paira" ,
    roll_number : 34 ,
    class_of_the_student :  12 , 
    stream_of_the_student : "science" ,
    ispass : true  

};
for (const detail_of_object2 in detail_of_object) {
    console.log(detail_of_object2,detail_of_object[detail_of_object2])
}