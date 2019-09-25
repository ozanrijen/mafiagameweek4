alert("Goed, je hebt gekozen voor Vito's Storyline. Vito is het hoofd van het New Yorkse maffiafamilie Corleone. Tradities en respect zijn de codewoorden in deze wereld.")
var naam = prompt("Wil je je naam wijzigen?", "Vito"); // Vraagt of je je naam wilt wijzigen
var v1 = prompt("Oke " + naam + ", je moet langs een van je partners om informatie te krijgen over een cartel. Ga je langs Pablo of Emillio?\n1) Pablo\n2) Emillio"); // V1 staat voor Vraag 1, die wordt als eerst gesteld aan de speler

if (v1 == 1) {

} 

else if (v1 == 2) {
    alert("Emillio is nu niet bereikbaar.\nJe besluit om langs Pablo te gaan.");
} 

var v2 = prompt("Goed, je bent aangekomen bij Pablo. Ga op zoek naar hem.\n1) Trap op\n2) Trap af")

if (v2 == 1) {
    alert("Hmm.. Hij is niet op zijn kantoor..\n Je gaat nu de trap af")
    alert(naam + ": Aah.. Pablo.. Je bent niet vergeten wat we hadden besproken, toch?")
    alert("Pablo: Natuurlijk niet " + naam + ", alles zit in die envelop. Is er nog iets anders waarmee ik je kan helpen " + naam + "?")
    alert(naam + ": Het is goed zo Pablo, hier heb je je beloning.")
    alert("Pablo: Dankjewel, laat me weten wanneer je iets nodig hebt.")

} 

else if (v2 == 2) {
    alert(naam + ": Aah.. Pablo.. Je bent niet vergeten wat we hadden besproken, toch?")
    alert("Pablo: Natuurlijk niet " + naam + ", alles zit in die envelop. Is er nog iets anders waarmee ik je kan helpen " + naam + "?")
    alert(naam + ": Het is goed zo Pablo, hier heb je je beloning.")
    alert("Pablo: Dankjewel, laat me weten wanneer je iets nodig hebt.")

}

var v3 = prompt("Oke " + naam + ", je hebt de envolop. Wat ga je doen?\n1) Nu open maken\n2) Thuis open maken")

if (v3 == 1) {
    alert("Ben je gek geworden?! Zulke dingen moeten binnen gesloten deuren.")
}

else if (v3 == 2) {
    alert("Stap in een taxi.")
}

var v4 = prompt("Je bent thuis aangekomen.\n1) Maak de deur open\n2) ..?")

if (v4 == 1) {
    var sleutel = prompt("Heb ik mijn sluitel laten vallen?\n1) Kijk in je zakken")
}

if (sleutel == 1) {
    alert("...")
    alert("Sonny: Goededag vader, is er iets aan de hand?")
    alert(naam + ": Ik kan mijn sleutels niet vinden zoon. Geef me jou sleutels.")
    alert("Sonny: Vader, u had mijn sleutels meegenomen..")
    alert(naam + ": *zucht*")
    alert("Cartel vijanden: *slippende banden*")
    alert(naam + ": ..? ..!? SONNY! DUI.. *WAPENSCHOT*")
    alert("Cartel vijanden: *piepende banden*")
}

else if (v4 == 2) {
    alert("Sonny: Goededag vader, is er iets aan de hand?")
    alert(naam + ": Ik kan mijn sleutels niet vinden zoon. Geef me jou sleutels.")
    alert("Sonny: Vader, u had mijn sleutels meegenomen..")
    alert(naam + ": *zucht*")
    alert("Cartel vijanden: *slippende banden*")
    alert(naam + ": ..? ..!? SONNY! DUI.. *WAPENSCHOT*")
    alert("Cartel vijanden: *rijdt weg met piepende banden*")
}

    