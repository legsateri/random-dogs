'use strict';

//GET Request
function getDogImages(numImg) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numImg}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson, numImg))
        .catch(error => alert("Something's gone wrong, try again later."));
}

//Displays The Results
function showResults(responseJson, numImg) {
    console.log(responseJson.message);
    $('.results').append(`<h2>So cute!</h2>`);
    for (let i=0; i < numImg; i++) {
        $('.results').append(`<img src="${responseJson.message[i]}" class="results-imgs">`);
    }
    $('.results').removeClass('hidden');
}

//Event Listener On Form Submission
function watchForSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let numImg = $('.js-img-input').val();
        $('.results').empty();
        getDogImages(numImg);
    });
}

//Triggers Initial Console Message
$(function() {
    console.log('App is all loaded and waiting.')
    watchForSubmit();
});