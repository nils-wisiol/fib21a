/**
 * Passt CSS eines iframe an
 * 
 * iframe: Name des iframe (name-Attribut!)
 * path:   Pfad einer CSS-Datei, die angewendet werden soll
 * 
 * Wichtig: funktioniert nur bei abgeschalteter same-origin-policy!
 */
function styleIframe(iframe, path) {
	var cssLink = document.createElement("link") 
	cssLink.href = path; 
	cssLink .rel = "stylesheet"; 
	cssLink .type = "text/css"; 
	frames[iframe].document.body.insertBefore(cssLink, frames[iframe].document.body.firstChild);
}