// Relational or Comparition Operators
console.log(5>=6)
//equalit operator
var x=6
console.log(x=="6")
console.log(x==="6")
//logical operators
     //AND --- All values in expression should be true then o/p will be true
console.log(true&&true)     
console.log(true&&false) 
console.log(false&&false)   
     //OR---Any one of the values in expression should be true then o/p will be true
console.log(true||true)     
console.log(true||false) 
console.log(false||false) 
//Validate the eligibility of a person for get Driving License
var isCandidateInLocalPerson=false
var isHeCompleted18=true
var eligibilityValidation=isCandidateInLocalPerson&&isHeCompleted18
console.log(eligibilityValidation)
//by using Conditional Statement
if(isCandidateInLocalPerson&&isHeCompleted18){
    console.log("He is eligible to get DC")
} else{
    console.log("He is not eligible to get DC")
}
//to chk eligible to get privileges for Militery stuffs
let personRelatedToAnyArmyPerson=true
let personInArmyCurrently=false
if(personInArmyCurrently||personRelatedToAnyArmyPerson){
    console.log("He can purchase stuffs from Canteen")
} else{
    console.log("He can't purchase stuffs from Canteen")
}
     //NOT
var x=4
console.log(x!=='6')     

