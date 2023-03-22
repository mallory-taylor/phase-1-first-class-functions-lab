// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function fareMultiplier(x) {
    return x;
}

function createFareMultiplier (x) {
    return (function(fareMultiplier) {
        return fareMultiplier * x
    });
}
let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, selection) {
    if (selection === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    } else {
        return drivers.slice(-2);
    }
}