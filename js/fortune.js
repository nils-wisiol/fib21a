/**
 * Initialisiert das fortune-Widget.
 *
 * span: span-Element, in der der Spruch angezeigt werden soll
 */
function initFortune(span) {
	refreshFortune(span);
}

/**
 * Aktualisiert den Spruch
 * 
 * span: span-Element, in der der Spruch angezeigt wird
 */
function refreshFortune(span) {
	setTimeout('refreshFortune("' + span + '")', 30 * 60 * 1000);
	
	$.ajax({
		url: '/getFortune.php',
	}).done(function (html) {
		$(span).html(html)
	});
}