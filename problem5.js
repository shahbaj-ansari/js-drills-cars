const carByYear = require("./problem4");

const inventory = require("./inventory");

function problem5(inventory){
    let oldercar=[]
    for(let i=0;i<carByYear.length;i++){
        let count=0
        for(let j=0;j<carByYear[i].years.length;j++){
            if(carByYear[i].years[j]<2000){
                count++;
            }
        }
        if(count){
            oldercar.push(carByYear[i].carMake)
        }
    }
    return oldercar;
}
module.exports=problem5(inventory)