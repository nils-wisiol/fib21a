/**
 * Initialisiert eine Weltuhr.
 *
 * div: div-Element, in dem die Weltuhr gezeigt wird.
 * zone: Zeitzone, die angezeigt werden sollen (Differenz der Zeit zu UTC in Minuten)
 */
function initWorldclock(div, offset) {
	$(div).attr('data-offset', offset);
	tickWorldclock(div);
}

/**
 * Dreht die Weltuhr weiter.
 * 
 * div: div-Element, in dem die Weltuhr gezeigt wird. 
 */
function tickWorldclock(div) {
	var offset = $(div).attr('data-offset');
	var time = new Date();
	time.setUTCMinutes(time.getUTCMinutes() + new Date().getTimezoneOffset() + parseInt(offset));
	$(div).html(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
	setTimeout('tickWorldclock("' + div + '")', 1000);
}