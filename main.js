'use strict'

// Array of all data
var signs = [
	{
		name: "Leo",
		image: "img/Aries.png",
		birthday: "July 23 - August 22",
        icecream: "Strawberry.",
        
	},
	{
		name: "Virgo",
		image: "img/Virgo.png",
		birthday: "July 23 - August 22",
        icecream: "Chocolate",
       
	},
	{
		name: "Libra",
		image: "img/Libra.jpg",
		birthday: "September 23 - October 22",
        icecream: "Red Velvet.",
        
	},
	{
		name: "Scorpio",
		image: "img/Scorpio.jpg",
		birthday: "October 23 - November 21",
        icecream: "Forrero Rocher.",
        
	},
	{
		name: "Sagittarius",
		image: "img/Sagittarius.png",
		birthday: "November 22 - December 21",
        icecream: "Butter Peacan.",
        
	},
	{
		name: "Capricorn",
		image: "img/Capricorn.jpg",
		birthday: "December 22 - January 19",
        icecream: "Dragon Fruit.",
     
	},
	{
		name: "Aquarius",
		image: "img/Aquarius.png",
		birthday: "January 20 - February 18",
        icecream: "Charcaol.",
        
	},
	{
		name: "Pisces",
		image: "img/Pisces.png",
		birthday: "February 19 - March 20",
        icecream: "Chocolate Brownie Fudge.",
        
	},
	{
		name: "Aries",
		image: "img/Leo.png",
		birthday: "March 21 - April 19",
        icecream: "Guava.",
        
	},
	{
		name: "Taurus",
		image: "img/Taurus.png",
		birthday: "April 20 - May 20",
        icecream: "Pistachio.",
       
	},
	{
		name: "Gemini",
		image: "img/Gemini.png",
		birthday: "May 21 - June 20",
        icecream: "Cookies n' Cream and Coffee.",
       
	},
	{
		name: "Cancer",
		image: "img/Cancer.png",
		birthday: "June 21 - July 22",
        icecream: "Cotton Candy.",
        
	}
];





// For loop used to create the option tags for the dropdown
for(var i = 0; i < signs.length; i++) {
	// Store the actual dropdown as a variable
	var dropdown = document.getElementById('myLineup');
	// Create an option element
	var selection = document.createElement('option');

	// Give the option element a value
	selection.value = signs[i].name;
	// Set the text of the option element
	selection.textContent = signs[i].name;
	// Append the option element to the dropdown
	dropdown.appendChild(selection);
}

// Using 'dropdown' because we created that variable in the above for loop
dropdown.onchange = function() {
		// Targeting several elements from the HTML and storing them as variables
  	var container = document.getElementById('displayInfo');
  	var sign = document.getElementById('sign');
    var image = document.getElementById('icon');
  	var ageDate = document.getElementById('agedate');
    var creamFlavor = document.getElementById('flavor');
   
		// Creating a function, storing it as a variable. This function removes the animate.css classes from an element so that when they get re-applied, the animation happens again
  	var animation = function() {
			container.className = 'form-group displayInfo';
		};

		// Loop through the array
    for(var i = 0; i < signs.length; i++) {
			// If the value selected is signs[0].name or signs[2].name AND the value of i = 2, then do this block of code. The i = 2 is necessary because signs[i].name has a value regardless of the loop, so if a user selects signs[2].name, but the loop has just begun (i = 0), then the conditional will evaluate as 'true' and execute the code, but will display all the signs[0] data, not the signs[2] data.
    	if(this.value == signs[1].name && i == 0) {
					// Change all the data according to what object in the signs array we are targetting
	        sign.textContent = signs[i].name + " You are " + signs[i].icecream;
            icon.src = signs[i].image;
            icon.width = "400";
            icon.height = "400";
	      	ageDate.textContent = "Birthday:" + signs[i].birthday;
           
            

					// Add these classes to 'container' - the last two are from animate.css
	      	container.className == 'form-group displayInfo animated zoomIn';
					// This 'animation' function is called 1 second after the classes are added, using the setTimeout() method, so the animation can take place.

	      	setTimeout(animation, 1000);
				// If the user selects something that doesn't match the above two instances, then run the below code - which is functionality identical, except for some grammar differences.
    	} else if(this.value == signs[i].name) {
	        sign.textContent =  signs[i].name + " You are " + signs[i].icecream;
	      	icon.src = signs[i].image;
	      	icon.width = "250";
            icon.height = "250";
            ageDate.textContent = signs[i].birthday;
            container.className = "form-group displayInfo animated zoomIn";

	      	setTimeout(animation, 1000);
    };
  };
};