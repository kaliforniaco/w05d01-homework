// DEPENDENCIES
const express = require('express');
const app = express();


const Missions = require('./models/marsMissions');
//XX run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
//XX ejs has not been installed
//XX views folder has not been created
//XX views/missions folder has not been created

// PORT
const port = 3003;
/*
// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: ""
  }
];
*/
// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
app.get('/missions', (req,res) => {
  res.render('index.ejs', {
    missions: Missions
  })
})

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('./missions/:index', (res,req) => {
  res.render('show.ejs', {
    missions: Missions[req.params.index]
  }
})

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
