var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();


function setContent() {
	if (window.name == "")
	{
		window.name = "default";
	}

	s = window.name + ".json";

	$.getJSON( "posts/" + s, function( data ) {

		document.getElementById('pageDate').innerHTML = data.date;
		document.getElementById('pageTitle').innerHTML = data.title;
		document.getElementById('pageContent').innerHTML = data.body;

	});
}

function goToPage(id) {
	window.name = id;
	setContent();
}

function home() {
	window.name = "default";
	setContent();
}

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;
