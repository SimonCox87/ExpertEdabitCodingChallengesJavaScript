// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array 
// with the first and second elements representing hours and minutes, respectively.
// Examples

// timeToEat("2:00 p.m.") ➞ [5, 0]
// // 5 hours until the next meal, dinner

// timeToEat("5:50 a.m.") ➞ [1, 10]
// // 1 hour and 10 minutes until the next meal, breakfast

function timeToEat(currentTime) {
    const mealTimes = [7,12,19];
    let cTimeSplit = currentTime.split(/:|\s/);
    let hour = +cTimeSplit[0];
    let mins = +cTimeSplit[1];
    let am = cTimeSplit[2];

    hour = am == "a.m." && hour == 12 ? hour = 0 : hour;

    hour = am == "p.m." && hour != 12 ? hour += 12: hour;

    let timeMins = hour * 60 + mins;

    let nextMeal = 0;

    for (let i = 0; i < mealTimes.length; i++) {
        if (mealTimes[i] * 60 > timeMins) {
            nextMeal = mealTimes[i] * 60;
            break
        }
        nextMeal = mealTimes[0] * 60;
    }

    let difference = 0;

    if (nextMeal < timeMins) {
        difference = 1440 - (timeMins - nextMeal);
    }
    else{
        difference =  nextMeal - timeMins;
    }

    return [Math.floor(difference / 60), difference % 60];
}

console.log(timeToEat("2:00 p.m.")) // [5, 0];
console.log(timeToEat("5:50 a.m.")) // [1, 10];
console.log(timeToEat("6:37 p.m.")) // [0, 23];
console.log(timeToEat("12:00 a.m.")) // [7, 0];
console.log(timeToEat("11:58 p.m.")) // [7, 2]; 
console.log(timeToEat("3:33 p.m.")) // [3, 27];
