//object
var company={
    empFirstName:"Sathees",
    empSecondNmae:"Kumar"
}
console.log(company.empFirstName)
console.log(company)
//reassign values by dot notation
company.empFirstName="R Sathees"
//reassign value by 
company['empSecondNmae']="Sathees"
console.log(`${company.empFirstName} ${company.empSecondNmae}`)
company.empSecondNmae='Kumar'
var mainEmployee=company.empFirstName+" "+company.empSecondNmae
console.log(mainEmployee)
//Arrays
var typesOfBike=["Hero", "Hyaboza", "Duke"]
console.log(typesOfBike[1])
typesOfBike[0]="Splender"
typesOfBike[1]="Xpulse"
console.log(typesOfBike)
//handling arrey using object
var company={
    empFirstName:"Sathees",
    empSecondNmae:"Kumar",
    typesOfBike:["Hero", "Hyaboza", "Duke"]
}
console.log(company.typesOfBike[1])
console.log(company.empFirstName+" "+company.empSecondNmae+" is having "+company.typesOfBike[2]+" Bike")


