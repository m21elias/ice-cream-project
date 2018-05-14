'use strict'

// Array of all data
var signs = [
	{
		name: "Leo",
		image: "img/Aries.png",
		birthday: "July 23 - August 22",
		icecream: "Strawberry.",
		des:" a born natrual leader, King of the jungle. "
        
	},
	{
		name: "Virgo",
		image: "img/Virgo.png",
		birthday: "July 23 - August 22",
		icecream: "Chocolate",
		des:" shy, hard worker and loyal."
       
	},
	{
		name: "Libra",
		image: "img/Libra.jpg",
		birthday: "September 23 - October 22",
		icecream: "Red Velvet.",
		des:" friendly, when you want to be, sharming, and a total hopeless romantic. Being indecisive drives you crazy."
        
	},
	{
		name: "Scorpio",
		image: "img/Scorpio.jpg",
		birthday: "October 23 - November 21",
		icecream: "Forrero Rocher.",
		des:" fierce, stubborn, determined and decisive ."
        
	},
	{
		name: "Sagittarius",
		image: "img/Sagittarius.png",
		birthday: "November 22 - December 21",
		icecream: "Butter Peacan.",
		des:" advanturous, generous and constantly needs to be in touch with the world."
        
	},
	{
		name: "Capricorn",
		image: "img/Capricorn.jpg",
		birthday: "December 22 - January 19",
		icecream: "Dragon Fruit.",
		des:" traditional, masters of self-control and often very serious by nature."
     
	},
	{
		name: "Aquarius",
		image: "img/Aquarius.png",
		birthday: "January 20 - February 18",
		icecream: "Charcaol.",
		des:" humanitarian, shy and quiet which makes you mysterious. Very highl intellectual people who love helping others ."
        
	},
	{
		name: "Pisces",
		image: "img/Pisces.png",
		birthday: "February 19 - March 20",
		icecream: "Chocolate Brownie Fudge.",
		des:" artistic, gentel. Natural givers. You are friendly af, is why you find yourself surrounded by many poeple. "
        
	},
	{
		name: "Aries",
		image: "img/Leo.png",
		birthday: "March 21 - April 19",
        icecream: "Guava.",
        des:" confient, honest and competitive."
	},
	{
		name: "Taurus",
		image: "img/Taurus.png",
		birthday: "April 20 - May 20",
		icecream: "Pistachio.",
		des:" practical, devoted. So full of energy you are the motivater of us all."
       
	},
	{
		name: "Gemini",
		image: "img/Gemini.png",
		birthday: "May 21 - June 20",
		icecream: "Cookies n' Cream and Coffee.",
		des:" too faced! With your two different personalities, you can go from very social to serious depending on the enviornment. You are also curious and adaptable."
       
	},
	{
		name: "Cancer",
		image: "img/Cancer.png",
		birthday: "June 21 - July 22",
		icecream: "Cotton Candy.",
		des:" friendly. There's never a problem that you can't fix. People come to you for advice."
		
        
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
	var info = document.getElementById('info')
   
		// Creating a function, storing it as a variable. This function removes the animate.css classes from an element so that when they get re-applied, the animation happens again
  	var animation = function() {
			container.className = 'form-group displayInfo';
		};

		// Loop through the array
    for(var i = 0; i < signs.length; i++) {
			// If the value selected is signs[0].name or signs[2].name AND the value of i = 2, then do this block of code. The i = 2 is necessary because signs[i].name has a value regardless of the loop, so if a user selects signs[2].name, but the loop has just begun (i = 0), then the conditional will evaluate as 'true' and execute the code, but will display all the signs[0] data, not the signs[2] data.
    	if(this.value == signs[1].name && i == 0) {
					// Change all the data according to what object in the signs array we are targetting
	        sign.textContent = signs[i].name + " you are " + signs[i].icecream;
            icon.src = signs[i].image;
            icon.width = "400";
            icon.height = "400";
			ageDate.textContent = "Birthday:" + signs[i].birthday;
			info.textContent = "You are" + signs[i].des;
           
            

					// Add these classes to 'container' - the last two are from animate.css
	      	container.className == 'form-group displayInfo animated zoomIn';
					// This 'animation' function is called 1 second after the classes are added, using the setTimeout() method, so the animation can take place.

	      	setTimeout(animation, 1000);
				// If the user selects something that doesn't match the above two instances, then run the below code - which is functionality identical, except for some grammar differences.
    	} else if(this.value == signs[i].name) {
	        sign.textContent =  signs[i].name + " you are " + signs[i].icecream;
	      	icon.src = signs[i].image;
	      	icon.width = "250";
            icon.height = "250";
			ageDate.textContent = signs[i].birthday;
			info.textContent = "You are" + signs[i].des;
            container.className = "form-group displayInfo animated zoomIn";

	      	setTimeout(animation, 1000);
    };
  };
};