const axios = require('axios');

const APPID = 'f4040baa907e068e29360361cc63d9ae';

function weatherUrl(city) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    city,
    )}&units=imperial&APPID=${APPID}`;
}

const url = weatherUrl('Paris');

const request = { url };

const promise = axios(request);

promise.then(success, error);

function success(response) {
  console.log(JSON.stringify(response.data, null, 2));
}

function error(err) {
  console.log(JSON.stringify(err.data, null, 2));
}