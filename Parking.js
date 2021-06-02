const Prompt = require('prompt-sync')();
const fs = require("fs");



// for creating a lot

const createLots = (capacity = Prompt("Enter number of slots")) => {
    var Obj = {
        "Slots": []
    };
    for (let counter = 0; counter < Number(capacity); counter++) {
        Obj.Slots.push("Empty");
    }
    fs.writeFileSync("input.json", JSON.stringify(Obj));
};


// createLots();



//for Parking a car


const carPark = (carNumber = Prompt("Enter the car number")) => {
    const slots = JSON.parse(fs.readFileSync("input.json", "utf-8"));


    var index = -1;
    if (typeof(slots.Slots.find(slot => {
            index++;
            return slot === "Empty";
        })) !== "undefined") {

        slots.Slots[index] = {
            car: {
                "carNumber": carNumber,
                "parkingTime": new Date(),
                "leavingTime": ""
            }
        };
        fs.writeFileSync("input.json", JSON.stringify(slots));
        console.log(slots);

    } else {
        return "do not have empty parking slot here";
    }
};

carPark();