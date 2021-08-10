const inventory = require("./inventory");


function problem3(inventory){
    function compareName(a,b){
        if(a.car_make<b.car_make){
            return -1;
        }else if(a.car_make>b.car_make){
            return 1;
        }else{
            return 0;
        }
    }
    let sortedInventory=[...inventory] 
    sortedInventory.sort(compareName)
    
    
    let carByYear=[]
    
    function groupCarbyYear(carMake,cyear){
    let pushed=false
    for(let i=0;i<carByYear.length;i++){
        if(carByYear[i].carMake==carMake){
            carByYear[i].years.push(cyear);
            pushed=true
            break;
        }
    }
    if(pushed==false){
        let newCar={
            carMake:carMake,
            years:[cyear]
        }
        carByYear.push(newCar)
        }
    }
    
    for(let i=0;i<sortedInventory.length;i++){
        groupCarbyYear(sortedInventory[i].car_make,sortedInventory[i].car_year)
    }
    return carByYear
}

module.exports=problem3(inventory)
