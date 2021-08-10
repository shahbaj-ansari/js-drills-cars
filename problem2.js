const inventory = require("./inventory");

function problem2(){
    return inventory[inventory.length-1]
}

module.exports=problem2(inventory)
