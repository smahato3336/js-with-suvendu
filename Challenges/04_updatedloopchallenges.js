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

/*
07. Write a 'forEach' loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"], 
    Stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'.
    
    let allTeaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
    let availableTeas = [];
    
    allTeaTypes.forEach(function(teas) {
        if (teas === "chai") {
            return;
        }
        availableTeas.push(teas);
    })
    console.log(availableTeas);
*/

/*
08. Write a 'forEach' loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
    Skip "Sydney" and store the other cities in a new array named 'traveledCities.
    let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
    let traveledCities = [];
    
    worldCities.forEach((cities) => {
        if(cities === "Sydney"){
            return;
        }
        traveledCities.push(cities);
    })
    console.log(traveledCities);
*/

/*
09. Write a 'for' loop that iterates through the array [2, 5, 7, 9], Skip the value of '7'
    and multiply the rest by 2, Store the results in a new array named 'doubledNumbers'.
    let numbers = [2, 5, 7, 9];
    let doubledNumbers = [];
    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 7) {
            continue;
        }
        doubledNumbers.push(numbers[i] * 2);
    }
    console.log(doubledNumbers);
*/

/*
10. Use a 'for-of' loop to iterate through the array ["Chai", "Green Tea", "Black Tea", "Jasmine Tea", "Herbal Tea"], and
    stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named 'shortTeas'.
    let myTeas = ["Chai", "Green Tea", "Jasmine Tea", "Black Tea", "Herbal Tea"];
    let shortTeas = [];
    
    for (const tea of myTeas) {
        if(tea.length > 10) {
            break;
        }
        shortTeas.push(tea);
    }
    console.log(shortTeas);
*/
