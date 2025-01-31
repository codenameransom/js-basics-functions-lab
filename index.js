// Code your solution in this file!
let blocks
function distanceFromHqInBlocks(blocks){
    if(blocks > 42){
        return(blocks - 42)
    }else{
        return(42 - blocks);
    }
}
let feet
function distanceFromHqInFeet(feet){
    return(distanceFromHqInBlocks(feet) * 264);
}

function distanceTravelledInFeet(startingB, endingB){
    if(startingB > endingB){
        return(startingB - endingB) * 264
    }else{
        return(endingB - startingB) * 264
    } 
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }