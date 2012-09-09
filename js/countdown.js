/**
 * Initialisiert einen Countdown
 * 
 * div:    div-Element, in dem die Weltuhr gezeigt wird.
 * year:   Jahr des Zielzeitpunkts
 * month:  Monat des Zielzeitpunkts
 * day:    Tag des Zielzeitpunkts
 * hour:   Stunde des Zielzeitpunkts
 * minute: Minute des Zielzeitpunkts
 * second: Sekunde des Zielzeitpunkts
 */
function initCountdown(div, year, month, day, hour, minute, second) {
	$(div).attr('data-year', year);
	$(div).attr('data-month', month);
	$(div).attr('data-day', day);
	$(div).attr('data-hour', hour);
	$(div).attr('data-minute', minute);
	$(div).attr('data-second', second);
	tickCountdown(div);
}

/**
 * Aktualisiert den Countdown
 * 
 * div: Das Element, in dem der Countdown gezeigt wird.
 */
function tickCountdown(div) {
	setTimeout('tickCountdown("' + div + '")', 1000);
	
	var year = $(div).attr('data-year');
	var month = $(div).attr('data-month');
	var day = $(div).attr('data-day');
	var hour = $(div).attr('data-hour');
	var minute = $(div).attr('data-minute');
	var second = $(div).attr('data-second');
	
	var currentTime = new Date();
	var targetTime = new Date(year, month, day, hour, minute, second);
	
	var secondsOffset = (targetTime.getTime() - currentTime.getTime()) / 1000;
	secondsOffset = (secondsOffset < 0 ? 0 : secondsOffset);
    
	var leftDays = Math.floor((secondsOffset / 60 / 60 / 24));
	var leftHours = Math.floor((secondsOffset / 60 / 60)) % 24;
	var leftMinutes = Math.floor((secondsOffset - leftHours * 60 * 60 - leftDays * 60 * 60 * 24) / 60);
	var leftSeconds = Math.floor(secondsOffset - leftHours * 60 * 60 - leftDays * 60 * 60 * 24 - leftMinutes * 60);
	
	leftDaysString = (leftDays < 100 ? "0" : "") + leftDays;
	leftDaysString = (leftDays < 10 ? "0" : "") + leftDaysString;
	leftHoursString = (leftHours < 10 ? "0" : "") + leftHours;
	leftMinutesString = (leftMinutes < 10 ? "0" : "") + leftMinutes;
	leftSecondsString = (leftSeconds < 10 ? "0" : "") + leftSeconds;
	$(div).html(leftDaysString + '<span class="unit">days</span>' + leftHoursString + '<span class="unit">hours</span>' + leftMinutesString + '<span class="unit">minutes</span>' + leftSecondsString + '<span class="unit">seconds</span>');
}
