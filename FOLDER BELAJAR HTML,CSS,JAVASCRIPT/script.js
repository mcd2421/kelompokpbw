const txtElement = ['Danitra Wirayuda Utomo', 'Dafa Fachrizqi Aiman','Raden Azhar Fadhlur R'];
let count = 0;
let txtIndex = 0;
let currentTxt ='';
let words= '';

(function ngetik(){

	if(count == txtElement.length){
		count=0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.HTML-CSS-JAVASCRIPT').textContent =words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex=0;
	}

	setTimeout(ngetik, 75 );

})();