const Prompt = require('prompt-sync')();
const fs = require("fs");

//for creating a parking lot
function create_parking_lot(capacity = Prompt("enter the slot")) {
    for (let counter = 1; counter <= Number(capacity); counter++) {
        fs.appendFileSync('input.txt', counter);
        console.log(counter);
    }
    return;
}



//park a car


const park = (carNumber = Prompt("enter the car number")) => {
    let parkingSlots =

};