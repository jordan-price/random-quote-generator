
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
function buttonClick (printfunction) {
	document.getElementById('loadQuote').addEventListener("click", printfunction, false);
}

buttonClick(printQuote);
buttonClick(changeColor);

// create a function named getRandomQuote

	function getRandomQuote () {
		// select a random quote object from the quotes array
		var randomNumber = Math.floor(Math.random() * quotes.length);

		// TODO: Don't display a random quote more than once until ALL quotes from the array have been displayed.

		// returns the randomly selected quote object
		return randomNumber;
	}

	function noRepeat() {}


// create a function named printQuote

	function printQuote () {
		// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
		var randomObjNumber = getRandomQuote();

		if(!quotes.length){
           quotes = quotes.concat(usedQuotes);
           usedQuotes = [];
 		}

		// printQuote constructs a string using the different properties of the quote object using the following HTML template:
		var quote = quotes[randomObjNumber].quote;
		var source = quotes[randomObjNumber].source;
		var citation = quotes[randomObjNumber].citation;
		var year = quotes[randomObjNumber].year;
		var tag = quotes[randomObjNumber].tag;

		var quoteHTML = '';

		quoteHTML +='<p class="quote">' + quote + ' </p> <p class="source">' + source;

		// printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
		if (citation != null) {
			quoteHTML += '<span class="citation"> ' + citation + '</span>';
		};
		if (year != null) {
			quoteHTML += '<span class="year"> ' + year + ' </span>';		
		};
		// if (tag != null) {
		// 	quoteHTML += '<span class="tag"> ' + tag + ' </span>';		
		// };

		quoteHTML += '</p>'
		    
		// printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: 
		document.getElementById('quote-box').innerHTML = quoteHTML;

		 if(quotes.length){
      		usedQuotes.push(quotes[randomObjNumber]);
      		quotes.splice(randomObjNumber, 1);
   		}

	}


// TODO: Randomly change the background color of the page, when the quote changes

	function getRandomColor () {
		// Get Random Color
		var randomColor = colors[Math.floor(Math.random() * colors.length)];
		return randomColor;
	}

	function changeColor () {
		var color = getRandomColor();

		//change color
		var bgColor = document.getElementById('change_bg')
		bgColor.style.background = color;

		return bgColor;
}

// TODO: Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. 
	var nIntervId;

	switchQuote();
	switchBgColor();
	function switchQuote () {
		nIntervId = setInterval(printQuote, 30000);

	}

	function switchBgColor () {
		nIntervId = setInterval(changeColor, 30000);

	}



