const Prompt = require('prompt-sync')();
const fs = require("fs");



// // for creating a lot

// const createLots = (capacity = Prompt("Enter number of slots")) => {
//     var Obj = {
//         "Slots": []
//     };
//     for (let counter = 0; counter < Number(capacity); counter++) {
//         Obj.Slots.push("Empty");
//     }
//     console.log(`Created parking lot with ${counter+1} slots`);
//     fs.writeFileSync("input.json", JSON.stringify(Obj));
// };


// // createLots();



// //for Parking a car


const carPark = (carNumber = Prompt("Enter the car number")) => {
    const slots = JSON.parse(fs.readFileSync("input.json", "utf-8"));
    var index = -1;
    if (typeof(slots.Slots.find(slot => {
            index++;
            return slot === "Empty";
        })) !== "undefined") {
        var current = new Date();

        slots.Slots[index] = {
            car: {
                "carNumber": carNumber,
                "parkingTime": `${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`,
            }
        };
        fs.writeFileSync("input.json", JSON.stringify(slots));
        // console.log(slots);
        console.log(`Allocated slot number: ${index+1}`);

    } else {
        console.log("do not have empty parking slot here");
    }
};

// carPark();

// //for leaving the parking


const leavePark = (carNumber = Prompt("Enter the car Number")) => {
    const Slots = JSON.parse(fs.readFileSync("input.json", "utf-8"));
    var index = -1;
    Slots.Slots.find((e) => {
        index++;
        return typeof(Slots.Slots[index]) === "object" && Slots.Slots[index].car.carNumber === carNumber;
    });
    if (index >= 0) {

        var time = new Date().getHours() - Number(Slots.Slots[0].car.parkingTime.slice(0, 3).trim());

        console.log(`${Slots.Slots[index].car.carNumber} number with Slot Number${index++} is free with Charge ${(time) <= 2 ? 20 : time * 10 } $`);

        Slots.Slots[index] = "Leaved";

        fs.writeFileSync("input.json", JSON.stringify(Slots));
    } else {

        console.log("Please check your entered carNumber");
    }
};
// leavePark();