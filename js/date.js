/**
 * Initialisiert eine Datumsanzeige.
 *
 * div: div-Element, in dem das Datum gezeigt wird.
 * zone: Zeitzone, die angezeigt werden sollen (Differenz der Zeit zu UTC in Minuten)
 */
function initDate(div, offset) {
	$(div).attr('data-offset', offset);
	tickDate(div);
}

/**
 * Überprüft das Datumfeld und aktualisiert ggf. die Anzeige
 * 
 * div: div-Element, in dem das Datum gezeigt wird. 
 */
function tickDate(div) {
	setTimeout('tickDate("' + div + '")', 1000 * 60);
	var offset = $(div).attr('data-offset');
	var time = new Date();
	time.setUTCMinutes(time.getUTCMinutes() + new Date().getTimezoneOffset() + parseInt(offset));
	currentDay = (time.getDate() < 10 ? "0" : "") + time.getDate();
	currentMonth = ((time.getMonth() + 1) < 10 ? "0" : "") + (time.getMonth() + 1);
	currentYear = time.getYear() - 100;
	$(div).html(currentDay + '<span class="seperator">.</span>' + currentMonth + '<span class="seperator">.</span>' + currentYear);
}