/**
 * Initialisiert eine Diashow.
 *
 * path: Pfad für die Diashow. Es wird immer diese URL geladen, und es wird erwartet dass die Bilder wechseln.
 * div: div-Element, in dem die Diashow gezeigt wird. Muss ein Kind-div .pics mit einem Kind .a haben.
 * interval: wie lange ein Bild gezeigt werden soll (in ms)
 */
function initDiashow(path, div, max, interval) {
	$(div + ' .pics img.a').attr('src', path);
	$(div + ' .pics img.a').attr('data-interval', interval);
	setTimeout('slideDiashow("' + div + '")', interval);
}

/**
 * Zeigt das nächste Bild einer Diashow.
 *
 * div: div-Element der Diashow.
 */
function slideDiashow(div) {
	var path = $(div + ' .pics img.a').attr('src');
	$(div + ' .pics img.a').attr('src', "");
	$(div + ' .pics img.a').attr('src', path);
	setTimeout('slideDiashow("' + div + '")', $(div + ' .pics img.a').attr('data-interval'));
}

