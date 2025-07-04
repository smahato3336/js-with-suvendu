/*
01. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop 
    when it finds "chai".
    Store all teas before "chai" in a new array named 'selectedTeas'.
    let teas =  ["green tea", "black tea", "chai", "oolong tea"];
    let selectedTeas = [];
    
    for (let i = 0; i  < teas.length; i++) {
        if (teas[i] == "chai") {
            break;
        }
        selectedTeas.push(teas[i])   ;
        
    }
    console.log(selectedTeas);
*/

/*
02. Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
    Store the other cities in a new array named 'visitedCities'.
    let cities = ["London", "New York", "Paris", "Berlin"];
    let visitedCities = [];
   
    for (let j = 0; j < cities.length; j++) {
        if (cities[j] === "paris" || cities[j] === "Paris") {
            continue;
        }
        visitedCities.push(cities[j])
        
    }
    console.log(visitedCities);
*/

/*
03. Use a 'for-of' loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found.
    Store the numbers before 4 in an array named 'smallNumbers'.
    
    let numbers = [1, 2, 6, 3, 4, 5];
    let smallNumbers = [];
    
    for (const num of numbers) {
        if(num === 6){
            break;
        }
        smallNumbers.push(num);
    }
    console.log(smallNumbers);
*/

/*
04. Use a 'for-of' loop to iterate through the array ["Chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
    Store the other teas in an array named 'preferredTeas'.
    
    let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
    let preferredTeas = [];
    
    for (const tea of teaTypes) {
        if(tea === "herbal tea") {
            continue;
        }
        preferredTeas.push(tea);
    }
    console.log(preferredTeas);
    
*/

/*
05. Use a 'for-in' loop to loop through an object containing city populations. 
    Stop the loop when the population of "Berlin" is found and store all previous cities' 
    populations in a new object named 'cityPopulations'.
    let citiesPopulation = 
    "London" : 8900000,
    "New York" : 8400000,
    "Berlin" : 3500000,
    "Paris" : 2200000
}

let cityNewPopulations = {};

//console.log(Object.keys(citiesPopulation));
//console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    if (city === "Berlin") {
        break;
    }
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

*/

/*
06. Use a 'for-in' loop to loop through an object containing city populations.
    Skip any city with a poopulation below 3 million and store the rest in a new object named 'largeCities'.

    let worldCities = {
        "Sydney" : 5000000,
        "Tokyo" : 9000000,
        "Berlin" : 3500000,
        "Paris" : 2200000
    }
    
    let largeCities = {};
    
    for (const city in worldCities) {
        if(worldCities[city] < 3000000) {
            continue;
        }
        
        largeCities[city] = worldCities[city];
    }
    console.log(largeCities);
*/


