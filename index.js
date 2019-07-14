// Code your solution in this file!
debugger

let hq = 42

function distanceFromHqInBlocks(destination) {
    return Math.abs(hq - destination)
}

function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) *264
}

function distanceTravelledInFeet(start, finish) {
    return Math.abs(finish-start) * 264
}

function calculatesFarePrice (start, finish) {
    let distance = distanceTravelledInFeet(start, finish) 
    if (distance <= 400) {
        return 0;
    } else if (distance >400 && distance <2000) {
        return 0.02 * (distance-400) ;
    } else if (distance > 2000 && distance <2500) {
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far";
    }
}

// function {

// }

// function {

// }

// function {

// }

// function {

// }

// function {

// }

// function {

// }

