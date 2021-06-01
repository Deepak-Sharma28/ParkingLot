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


// create_parking_lot();
//park a car


const park = (carNumber = Prompt("enter the car number")) => {
    let parkingSlots = fs.readFileSync('input.txt', 'utf-8');
    let Parked = parkingSlots.split('').forEach(element => {
        if (!isNaN(element)) {
            parkingSlots[element] = Number(element);
        }

    });


    let emptySlots = parkingSlots.find(element => typeof(element) === Number);
};


console.log(park());