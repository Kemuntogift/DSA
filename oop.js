// Design a class pattern
// for the following requirements using JavaScript.

// A pharmacist writes prescriptions to people.

// A cashier collects cash and returns cash to pharmacy

// A manager manages employees

// A manager can sometimes work as a cashier and a pharmacist.
class Cashier {
    collectCash() {
        console.log("Collect");
    }
    returnCash() {
        console.log("Return");
    }
}
let managervar = class Manager extends Cashier {
    manageEmployees() {
        console.log("Manages employees");
    }

}

let Pharmacist = {

    writePrescription() {
        console.log("Prescription");
    }
}
managervar = Object.assign(Pharmacist.writePrescription)
mangervar = Object.assign()

console.log(managervar);