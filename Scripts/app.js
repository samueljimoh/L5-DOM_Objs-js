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
(function () {
    "use strict";

    /**
     * This function uses the document.title to switch javascript function
     * when the page switches  
     * 
     * @function PageSwitcher
     * @return {void}
     */
    function PageSwitcher() {

        switch(document.title) {
            case "Home":
            Home();
            break;
            case "About Me":
            About();
            break;
            case "Contact Me":
            Contact();
            break;
            case "Projects":
            Projects();
            break;
        }
    }

    /**
     * This function injects some text into the first paragraph of a page based in it's 
     * document.title property
     * 
     * @function InitialText
     * @returns {void}
     */
    function InitialText() {
        var paragraph = document.getElementsByTagName("p")[0];

        paragraph.textContent = "This is my first paragraph on the " + document.title + " page";
        
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();

        //var firstParagraph = document.querySelectorAll("div.row p")[0];

        //firstParagraph.style.color = "red";

        
    }

    /**
     * This function provides JavaScript code for the About page
     * 
     * @function About
     * @returns {void}
     */
    function About() {
        InitialText();
    }

    /**
     * This function provides JavaScript code for the Contact page
     * 
     * @function Contact
     * @returns {void}
     */
    function Contact() {
        
    }

    /**
     * This function provides JavaScript code for the Projects page
     * 
     * @function Projects
     * @returns {void}
     */
    function Projects() {
        InitialText();
    }

    window.addEventListener("load", PageSwitcher);


})();