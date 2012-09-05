/**
 * Initialisiert eine Diashow.
 *
 * path: Pfad-Präfix für die Bilder der Diashow. Die Bilder heißen 1.jpg, 2.jpg, ...
 * div: div-Element, in dem die Diashow gezeigt wird. Muss ein Kind-div .pics mit zwei Kindern .a und .b haben.
 * max: Höchste Bildernummer, die geladen werden soll.
 * interval: wie lange ein Bild gezeigt werden soll (in ms)
 */
function initDiashow(path, div, max, interval) {
  $(div + ' .pics').attr('data-current', 1);
  $(div + ' .pics').attr('data-max', max);
  $(div + ' .pics').attr('data-interval', interval);
  $(div + ' .pics').attr('data-path', path);
  
  $(div + ' .pics img.a').attr('src', path + '1.jpg');
  setTimeout('slideDiashow("' + div + '")', interval);
}

/**
 * Zeigt das nächste Bild einer Diashow.
 *
 * div: div-Element der Diashow.
 */
function slideDiashow(div) {
  var current = $(div + ' .pics').attr('data-current');
  var max = $(div + ' .pics').attr('data-max');
  var interval = $(div + ' .pics').attr('data-interval');
  var path = $(div + ' .pics').attr('data-path');
  var next = current == max ? 1 : parseInt(current) + 1;
  
  $(div + ' .pics img.a').attr('src', path + next + '.jpg');
  $(div + ' .pics').attr('data-current', next);
  setTimeout('slideDiashow("' + div + '")', interval);
}

