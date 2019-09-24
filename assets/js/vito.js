alert("Goed, je hebt gekozen voor Vito's Storyline. Vito is het hoofd van het New Yorkse maffiafamilie Corleone. Tradities en respect zijn de codewoorden in deze wereld.")
var naam = prompt("Wil je je naam wijzigen?", "Vito"); // Vraagt of je je naam wilt wijzigen
var v1 = prompt("Oke " + naam + ", je moet langs een van je partners om informatie te krijgen over een cartel. Ga je langs Pablo of Emillio?"); // V1 staat voor Vraag 1, die wordt als eerst gesteld aan de speler
var toegang; // Geeft je toegang tot plekken

var pablov1 = prompt("Goed, je bent aangekomen bij Pablo. Doe je de deur open of ga je terug?");
var emilliov1 = prompt("Emillio is nu niet bereikbaar.");

if (v1 = "Pablo") {
    toegang = true;
    pablov1;
    
} else if (v1 = "Emillio") {
    toegang = false;
    emilliov1;
}