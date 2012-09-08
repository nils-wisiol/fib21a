/**
 *
 *
 */
function pollCurrentWeatherXML() {
	$.get(
		    'http://google.de',
		    function(data) { alert(data); }
		);
}