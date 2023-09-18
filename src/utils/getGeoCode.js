const request = require('postman-request');

// let address = process.argv[2]

// passing the address and callback function as arguments........

let geoCode = async function getGeoCode(address) {
    const geoCode = "https://api.mapbox.com/geocoding/v5/mapbox.places/patna.json?access_token=pk.eyJ1IjoiYmhhcmF0LWpoYSIsImEiOiJjbGx5dGpnMzMwZnc4M3FuMTB6b3E1MG1xIn0.OBpwNiUYpoFQqLVZa9jAPQ";
    //const getWeather = "http://api.weatherstack.com/current?access_key=abea3568bf704a3656529724b1839f5f&query=" + latitude + "," + longitude;

    await request({ url: geoCode, json: true }, (error, response) => { // json :true will give us json objects and hence no need to further parse it...
        if (error) {
            console.log("Unable to connect data ")

        } else if (response.body.error) {
            console.log("Unable to find location")
        } else {
            const data1 = response.body.features[0].center;
            const data2 = {
                latitude: data1[1],
                longitude: data1[0]
            }
            return (data2)
        }
    })
};



module.exports = geoCode;