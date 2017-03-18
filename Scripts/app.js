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

    // define an array of HTML elements
    var paragraphElements = [];

    // second way to define an array
    //var paragraphs = new Array(); 

    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");

    // define your paragraphs array
    var paragraphs = [];

    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");

    // check to see if sendButton exists
    if(sendButton)
    {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }

    
    
    // event handler function
    function sendButtonClick(event)
    {
        console.log("clicked!");
    }

    // create a reference to the firstName field
    var firstName = document.getElementById("firstName");

    // create a reference to the form
    var contactForm = document.getElementById("contactForm");

    if (contactForm)
    {

        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event)
        {
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }

    /**
     * This function shows the input from each form field
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() 
    {
        console.log("++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("++++++++++++++++++++++");
    }
    

    // data for my pages
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph.</span> It is only visible on the first page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem ex, ullamcorper ac commodo nec, vestibulum vel augue. Sed eleifend quam ac nunc placerat, tempor pellentesque nulla sollicitudin. Vivamus dictum, risus vel cursus ornare, orci mauris posuere ligula, vitae malesuada massa tortor vel est. Proin id augue ultricies, suscipit nunc ac, consequat nulla. Morbi quis enim ut tortor sagittis viverra. Sed feugiat hendrerit ornare. Duis vitae ligula ut sem pellentesque scelerisque.";
    paragraphs[1] = "<span class='firstSentence'>This is my second paragraph.</span> It is only visible on the second page Etiam egestas, diam nec iaculis faucibus, lectus ex rutrum libero, et sollicitudin dolor nisl id mi. Nullam ac augue neque. Fusce blandit, diam non maximus semper, est metus mattis nulla, vitae pharetra mauris metus vel metus. Praesent placerat sagittis lacus ac tincidunt. Phasellus porta nibh felis, in feugiat neque condimentum in. Ut augue mauris, vulputate vel mattis nec, ullamcorper vel neque. Cras aliquam luctus tellus. Suspendisse nec nisi sit amet enim porta malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
    paragraphs[2] = "<span class='firstSentence'>This is my third paragraph.</span> It is only visible on the third page Aenean a ultrices est, vitae posuere risus. Nullam elit lectus, bibendum placerat pretium at, dictum non nulla. Integer vulputate mi sed ex ullamcorper, vitae feugiat elit molestie. Pellentesque a nibh risus. Nunc bibendum erat felis, euismod mollis libero porta rhoncus. Suspendisse vitae purus accumsan, ornare mauris vel, pellentesque magna. Sed nulla dolor, suscipit at tincidunt ut, varius nec ex.";

    
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length-1;

    // if paragraoh exists then populate each paragraph on the page 
    for (var index = paragraphElementsLength; index >= 0; index--) 
    {
        if(paragraphElements[index])
        {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
   
    }



})();