//Class and methods
class CarDetails{
    carConfiguration(){
        var size=34
        var long=28
        console.log(size*long)
    }
    //we can give some description of methods like below
    /**
     * 
     * @param {string} modelOne 
     * @param {string} modelTwo 
     */
    modelsOfCar(modelOne, modelTwo){
        var i=modelOne
        var j=modelTwo
       console.log("We have some types of car which is "+i+" and  "+j)
      this.carConfiguration() // invoking another method
    }
}
 var carDetails=new CarDetails()
carDetails.carConfiguration()
carDetails.modelsOfCar("Benz", "Rolesroyz")

