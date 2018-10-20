let searchURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
let counter = 0;

function setup() {
	noCanvas();

	userInput = select('#userInput');
	
	searchButton = select('#search-button');
	searchButton = document.getElementById('search-button');

	searchButton.addEventListener('click', beginSearch);

	function beginSearch() {
			let input = userInput.value();
			counter = 0;
			goWiki(input);
	}

	function goWiki(input) {
		if(counter < 10) {
			let url = searchURL + input;
			let data = loadJSON(url, gotData, 'jsonp');
			counter++; 
		}
	}

	function gotData(data) {
		//console.log(data);
		let randomIndex = floor(random(data[1].length));
		//console.log(randomIndex);
		let query = data[1][randomIndex];
		query = query.replace(/\s/g, "_");
		createDiv(query);
		let dataURL = contentURL + query;
		loadJSON(dataURL, gotContent, 'jsonp');
	}

	function gotContent(data) {
		//console.log(data);
		console.log(data[0]);
		let pageNumber = Object.keys(data.query.pages)[0]; 
		//console.log(pageNumber);
		let content = (data.query.pages[pageNumber].revisions[0]['*']);
		let wordRegEx = /\b\w{4,}\b/g;
		let words = content.match(wordRegEx);
		let word = random(words);
		goWiki(word);
	}
}