import {message, arrayOfCountries} from "./arr.js";
console.log(message);

let index = -1;
var input = $("input");
var results = $("#results");




input
    .on("input", function () {
        const inputValue = input.val();
        findAndShowResults(inputValue);
    })
    .on("focus", function () {
        results.show();
    })
    .on("blur", function () {
        results.hide();
    })

    .on("keydown", function (e) { 
        if(e.keyCode === 40){
            console.log(e.keyCode);
            // results.children().eq(index).removeAttr("background-color", "red"); //check how it removes styling
            index++;
            results.children().eq(index).css( "background-color", "red" ).css("width", "150px").css("border-radius", "5px").css("opacity", "0.5");
        }else if(e.keyCode === 38){
            console.log(e.keyCode);
            index--;
            results.children().eq(index).css( "background-color", "blue" );
        // }else if(e.keyCode === 13){ //Enter focused result to the input field.
        //     .select();
        }
    });

function findResults(str) {
    const filteredCountries = arrayOfCountries.filter(country => {
        let countryToLowerCase = country.toLowerCase();
        let strToLowerCase = str.toLowerCase(); // gets a string
        return countryToLowerCase.startsWith(strToLowerCase); // returns an array
    });
    return filteredCountries.slice(0, 4);
}

function findAndShowResults(val) {
    const foundResults = findResults(val); // gets the value from the input field
    if(val === 0){ // if there is no value -> 
        results.hide(); //hides the results
    }
    //findAndShowResults if empty array - show nothing after input
    if(val === []){
        results.hide();
    }
    renderResults(foundResults);
}

function renderResults(filteredCountries) {
    const finalHTML = getResultsHtml(filteredCountries);
    results.html(finalHTML);
}

function getResultsHtml(filteredCountries){
    let htmlString = '';
    if(filteredCountries.length === 0){// if it's empty -> 
        return 'No results'; //return 'No results'
    }else{ 
        for (let i=0; i < filteredCountries.length; i++){ // else return a string containing div tags for every result item
            htmlString += '<div>' + filteredCountries[i] + '</div>'; //append HTML element to htmlString
        }
        return htmlString;
    }   
}
