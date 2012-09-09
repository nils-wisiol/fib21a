/**
 * Initialisiert das currently-playing-widget.
 *
 * div: div-Element, in der aktuell gespielte Song angezeigt wird
 */
function initCurrentlyPlaying(div) {
	refreshCurrentlyPlaying(div);
}

/**
 * Aktualisiert den Inhalt des currently-playing-widget.
 * 
 * div: div-Element, in der aktuell gespielte Song angezeigt wird
 */
function refreshCurrentlyPlaying(div) {
	setTimeout('refreshCurrentlyPlaying("' + div + '")', 10 * 1000);
	
	$.ajax({
		url: 'https://musik.enit.biz/rss-fib21a.php?type=now_playing',
	}).done(function (html) {
		$(div).html(html)
	});
}