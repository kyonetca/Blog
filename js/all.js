function setContent() {
	if (window.name == "")
	{
		window.name = "default";
	}

	s = window.name + ".json";

	$.getJSON( "posts/" + s, function( data ) {

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
