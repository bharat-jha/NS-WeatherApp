const request = require('postman-request');
const colors = require('colors');
var d2 = 0;
var weather_description = "";
var address = process.argv[2];
var feel_temp = 0;

// This is async functions to get weather from the latittude and longitude 

async function getWeather(address) {
    const data5 = await getGeoCode(address)
    const url = "http://api.weatherstack.com/current?access_key=abea3568bf704a3656529724b1839f5f&query=" + data5.latitude + "," + data5.longitude;
    const response = await fetch(url);
    const data3 = await response.json()
    weather_description = data3.current.weather_descriptions;
    feel_temp = data3.current.feelslike;
    return ([weather_description, feel_temp])
};

// 

async function getGeoCode(address) {
    const geoCode = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiYmhhcmF0LWpoYSIsImEiOiJjbGx5dGpnMzMwZnc4M3FuMTB6b3E1MG1xIn0.OBpwNiUYpoFQqLVZa9jAPQ";
    const response = await fetch(geoCode)
    if (!response.ok) { throw new Error("Network Response is not good") }
    const resp = await response.json();
    // const data4 = [resp.features[0].center[0], resp.features[0].center[1]];
    const data2 = {
        latitude: resp.features[0].center[1],
        longitude: resp.features[0].center[0]
    }
    return (data2);

};

address_01 = ['patna', 'bhagalpur', 'delhi', 'mumbai']

// getGeoCode(address).then(resp1 => { console.log(resp1) }).catch(err => { console.log(err) });

async function main(address = "new delhi") {

    try {
        const finalTemp = await getWeather(address)

        //console.log("Current Temperature of " + colors.green(address) + " is " + weather_description + " C and feel like " + feel_temp + "C");
        return (finalTemp)
    } catch (err) {
        console.error("Main Error ", err)
    }
};



module.exports = { main: main, d2: d2 }