"use strict";

const api_key = "ea1a4398b9141469d52fad9568c0a369";
const imageBaseURL = "https://image.tmdb.org/t/p/";

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };


