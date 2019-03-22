'use strict';

//GET Request
function getDogImages(numImg) {
    console.log(`https://dog.ceo/api/breeds/image/random/${numImg}`)
    fetch(`https://dog.ceo/api/breeds/image/random/${numImg}`)
        .then(response => response.json())
        .then(responseJson => showResults(responseJson, numImg))
        .catch(error => alert("Something's gone wrong, try again later."));
}

//Displays The Results
function showResults(responseJson) {
    console.log(responseJson);
    $('.results').append(`<h2>So cute!</h2>`);
    for (let i=0; i < responseJson.message.length; i++) {
        $('.results').removeClass('hidden');
        $('.results').append(`<img src="${responseJson.message[i]}" class="results-imgs">`);
    }
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