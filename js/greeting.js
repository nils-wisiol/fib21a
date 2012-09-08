/**
 * Zeigt eine angemessene Begrüßung an 
 * 
 * div: div-Element, in dem die Begrüßung angezeigt wird 
 */
function greet(div) {
	var time = new Date();
	
	// Begüßung nach Datum/Uhrzeit auswählen
	var greeting = "";
	if (time.getHours() > 4 && time.getHours() <= 12)
		greeting = "Good Mording";
	else if (time.getHours() > 12 && time.getHours() <= 18)
		greeing = "Have a nice day";
	else if (time.getHours() > 18 && time.getHours() <= 22)
		greeting = "Good Evening";
	else if (time.getHours() > 22 || time.getHours() < 4)
		greeting = "Have a good night"
	
	greeting = greeting + ", gentlemen"
	
	$(div).html(greeting);
			
	setTimeout('greet("' + div + '")', 60 * 60 * 1000); // Einmal pro Stunde aktualisieren
}