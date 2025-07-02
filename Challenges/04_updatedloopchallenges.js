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

