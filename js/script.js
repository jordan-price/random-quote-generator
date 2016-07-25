//Create an array of javaScript objects to hold the data for the quotes
	var quotes = [

		{
			quote: "You mustn't be afraid to dream a little bigger, darling.",
			source: "Eames (Tom Hardy)",
			citation: "Inception",
			year: "2010",
			tag: "Movie",
		},
		{
			quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
			source: "Thomas Alva Edison",
			citation: "Harper's Monthly Magazine",
			year: "1902",
			tag: "Innovator",
		},
		{
			quote: "Stay hungry. Stay foolish",
			source: "Steve Jobs",
			citation: "Stanford Univerisy Commencement Speech",
			year: "2005",
			tag: "Innovator",
		},
		{
			quote: "Imagination is more important than knowledge.",
			source: "Albert Einstein",
			citation: "What Life Means to Einstein",
			year: "1929",
			tag: "Physicist",
		},
		{
			quote: "No! Try not. Do, or do not. There is no try.",
			source: "Yoda",
			citation: "Star Wars Episode V: The Empire Strikes Back",
			year: "1980",
			tag: "Movie",
		},
		{
			quote: "It always seems impossible, until it is done.",
			source: "Nelson Mandela",
			citation: "QI",
			year: "2001",
			tag: "Politician",
		},
		{
			quote: "Success always demands a greater effort.",
			source: "Winston Churchill",
			citation: "Their Finest Hour",
			year: "1949",
			tag: "Politician",
		}
	];

	var usedQuotes = [];

	var colors = [
		'firebrick', 
		'lightgray', 
		'lightblue', 
		'lightgreen'
	];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
	function buttonClick (printfunction) {
		document.getElementById('loadQuote').addEventListener("click", printfunction, false);
	}

	buttonClick(printQuote);
	buttonClick(changeColor);

// create a function named getRandomQuote
	function getRandomNumber () {
		// select a random quote object from the quotes array
		return Math.floor(Math.random() * quotes.length);
	}

	function getRandomQuote (randomNumber) {		
		// returns the randomly selected quote object
		var quoteObj = quotes[randomNumber];

		return quoteObj;
	}

// create a function named printQuote

	function printQuote () {
		// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
		
		// TODO: Don't display a random quote more than once until ALL quotes from the array have been displayed.
		if(!quotes.length){
           quotes = quotes.concat(usedQuotes);
           usedQuotes = [];
 		}

 		var randomNumber = getRandomNumber();
		var quoteObj = getRandomQuote(randomNumber);



		// printQuote constructs a string using the different properties of the quote object using the following HTML template:
		var quoteText = quoteObj.quote;
		var source = quoteObj.source;
		var citation = quoteObj.citation;
		var year = quoteObj.year;
		var tag = quoteObj.tag;

		var quoteHTML = '';

		quoteHTML +='<p class="quote">' + quoteText + ' </p> <p class="source">' + source;

		// printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
		if (citation !== null) {
			quoteHTML += '<span class="citation"> ' + citation + '</span>';
		}
    
		if (year !== null) {
			quoteHTML += '<span class="year"> ' + year + ' </span>';		
		}
		if (tag !== null) {
			quoteHTML += '<br><a href="#"><span class="tag">' + tag + ' </span></a>';		
		}

		quoteHTML += '</p>';
		    
		// printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: 
		document.getElementById('quote-box').innerHTML = quoteHTML;

		 if(quotes.length){
      		usedQuotes.push(quotes[randomNumber]);
      		quotes.splice(randomNumber, 1);
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
		var bgColor = document.getElementById('change_bg');
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



