console.log('\'Allo \'Allo!');


//puts info into repo-list via the repo master script
var showInfo = _.template($('.info-master').text());
//defines renderObj function
function renderObj (data, destination){
		var rendered = showInfo(data);
		destination.prepend(rendered);
	}

//grabs the profile info
$.getJSON('http://gateway.marvel.com:80/v1/public/characters?name=Gambit&apikey=ecbc9156149622b1e7ffc3da73eea458').done(function(data){
	renderObj(data, $('.container'));
});