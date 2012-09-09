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
	setTimeout('tickWorldclock("' + div + '")', 1000);
	var offset = $(div).attr('data-offset');
	var time = new Date();
	time.setUTCMinutes(time.getUTCMinutes() + new Date().getTimezoneOffset() + parseInt(offset));
	currentHour = (time.getHours() < 10 ? "0" : "") + time.getHours();
	currentMinute = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
	currentSecond = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
	$(div).html(currentHour + '<span class="seperator">:</span>' + currentMinute + '<span class="seperator">:</span>' + currentSecond);
}