//  Loading the required packages for the NodeJS ... 

const path = require('path');
const express = require('express');
const hbs = require('hbs');

const { main, d2 } = require("../utils/getWeather")




// Initializing the  express Module here ....
const app = express()

// There are two paths provided by the NodeJS which we will study now 

const stat_filePath = path.join(__dirname, '../public');
const partials = path.join(__dirname, '../templates/partials');
const viewPath = path.join(__dirname, '../templates/views');

// Configuring the express template engine ....
app.set('view engine', 'hbs');
app.set('views', viewPath)
app.use(express.static(stat_filePath));
hbs.registerPartials(partials)

// Creating some route for the application ... /Users/bharat.jha/Documents/Bharat/learning/nodejs/udemy_NodeJS/Bharat_Codes/Weather-app/web-server/src/app.js

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        City: "New Delhi",
        name: "Bharat"

    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: "This is Help Section of Our Page",
        City: "New Delhi",
        name: "Bharat"

    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Weather App",
        City: "New Delhi",
        name: "Bharat"

    })
});

app.get('/weather', (req, res) => {
    if (!req.query.address) { return res.send({ error: " Please provide address to check for the weather" }) } else {
        city = (req.query.address).toString()
        main(city).then((data) => {
            res.render('weather', { city, weather: data[0].toString(), feel_like: data[1] + "c" })
        })

    }
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        City: "New Delhi",
        name: "Bharat",
        errorMsg: "Help Section not found "

    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        City: "New Delhi",
        name: "Bharat",
        errorMsg: "Page Not Found "

    })
});

app.listen(3000, () => {
    console.log("Server is Up and running ");
})