
const inventory= require('./inventory');

function Problem1(inventory,cid){
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].id==cid){
            return inventory[i];
        }
    }
}

module.exports=Problem1(inventory,33)

