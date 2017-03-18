/**
 * FielName: app.js
 * 
 * @author Samuel Jimoh
 * @date March 18th, 2017
 * 
 * StudentID: 300999999
 * website: websitelink
 * @description This file is the main javascript file for the web site
 */


// IIFE - Immediately Invoked Function Expression
(function (){
    "use strict";

    switch(document.title) {
        case "Home":
        console.log("You are at home");
        break;
        case "About Me":
        console.log("You are at the about me page");
        break;
    }

})();