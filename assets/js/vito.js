document.body.style.background = "url('https://media3.giphy.com/media/YeLsS65XBEk7e/source.gif')";
alert("Goed, je hebt gekozen voor Vito's Storyline. Vito is het hoofd van het New Yorkse maffiafamilie Corleone. Tradities en respect zijn de codewoorden in deze wereld.")
var naam = prompt("Wil je je naam wijzigen?", "Vito"); // Vraagt of je je naam wilt wijzigen
var v1 = prompt("Oke " + naam + ", je moet langs een van je partners om informatie te krijgen over een cartel. Ga je langs Pablo of Emillio?\n1) Pablo\n2) Emillio"); // V1 staat voor Vraag 1, die wordt als eerst gesteld aan de speler
var guessplate = false;
var toegang = false;

if (v1 == 1) {
    
} 

else if (v1 == 2) {
    alert("Emillio is nu niet bereikbaar.\nJe besluit om langs Pablo te gaan.");
    console.log("Logged vraag 1");
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
    console.log("Logged vraag 2");
}

var v3 = prompt("Oke " + naam + ", je hebt de envolop. Wat ga je doen?\n1) Nu open maken\n2) Thuis open maken")

if (v3 == 1) {
    alert("Ben je gek geworden?! Zulke dingen moeten binnen gesloten deuren.")
}

else if (v3 == 2) {
    alert("Stap in een taxi.")
    console.log("Logged vraag 3");
}

var v4 = prompt("Je bent thuis aangekomen.\n1) Maak de deur open\n2) ..?");

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
    console.log("Logged vraag 4");
}

var v5 = prompt("Je zoon is dood geschoten. Hij valt niet meer te redden. Wat ga je doen?\n1) Sonny naar het ziekenhuis brengen\n2) In een taxi stappen en ze achtervolgen\n3) Er achteraan rennen");
    
if (v5 == 1) {
    alert("Sonny valt niet meer te redden, je gaat ze kwijt raken. Maak snel een keuze")
    var sonny = prompt("Maak snel een keuze!\n1) In een taxi stappen en ze achtervolgen\n2) Er achteraan rennen")

}

else if (v5 == 2) {
    var kenteken = prompt("[1/3] Snel! Noteer de kenteken voordat je ze kwijt raakt!\nKenteken: FB-(21+17)-KW")
    if (kenteken == 38) {
        toegang = true;
        guessplate = true;
        alert("Mooi, je hebt zijn kenteken genoteerd.\n Het was FB-38-KW")
        console.log("Logged vraag 5");
    }

}

else if (v5 == 3) {
    var rennen = prompt("Ze zijn veel te snel!\n1) Stap snel een taxi in!")
    console.log("Logged vraag 5");
}

if (sonny == 1) {
    kenteken = prompt("Snel! Noteer de kenteken voordat je ze kwijt raakt!\nKenteken: FB-(21+17)-KW")
}

else if (sonny == 2) {
    rennen = prompt("Ze zijn veel te snel!\n1) Stap snel een taxi in!")
    console.log("Logged vraag 5");
}

if (rennen == 1) {
    kenteken = prompt("Snel! Noteer de kenteken voordat je ze kwijt raakt!\nKenteken: FB-(21+17)-KW")
}


if (toegang == false && !guessplate) {
    kenteken = prompt("[2/3] Snel! Noteer de kenteken voordat je ze kwijt raakt!\nKenteken: FB-(21+17)-KW")
 if (kenteken == 38) {
    toegang = true;
    guessplate = true;
    alert("Mooi, je hebt zijn kenteken genoteerd.\n Het was FB-38-KW")
}
}

if (toegang == false && !guessplate) {
    kenteken = prompt("[3/3] Snel! Noteer de kenteken voordat je ze kwijt raakt!\nKenteken: FB-(21+17)-KW\n Let op laatste kans anders start je helemaal opnieuw!")
 if (kenteken == 38) {
    toegang = true;
    guessplate = true;
    alert("Mooi, je hebt zijn kenteken genoteerd.\n Het was FB-38-KW")
    }
}

var v6 = prompt("Wat ga je nu doen?\n1) Het kenteken nummer opzoeken en wraak nemen\n2) Terug naar huis om Sonny te laten begraven")

if (v6 == 1) {
    
}

else if (v6 == 2) {
    var begraven = prompt("De politie en ambulance is daar al aangekomen. Weet je zeker of je wilt gaan?\n1) Ja\n2) Nee")
    if (begraven == 1) {
        alert("Je hebt daar nu geen tijd voor!")
    }
    else if (begraven == 2) {
        console.log("Logged vraag 6");
    }
}

alert("Goed, je hebt zijn kenteken. En nu?")
alert("Waar ga je beginnen met zoeken?")
alert(".. Je bent het hoofd van een New Yorkse maffiafamilie en je vraagt je je dit af?")
var v7 = prompt("Oke, er zijn 2 contacten die je vaker heeft geholpen in het verleden.\nWie kies je?\n1) Mario (Detective)\n2) Pablo (Partner)")

if (v7 == 1) {
    alert("Je hebt besloten om naar Mario te gaan.")
}
else if (v7 == 2) {
    alert("Pablo is nu niet beschrikbaar. Je besluit om naar Mario te gaan.")
    console.log("Logged vraag 7");
}

var v8 = prompt("Je bent aangekomen bij Mario. Je weet ongeveer waar hij woont maar je weet niet welke huisnummer het was.\nWelke huisnummer denk je dat het was?\n1) Huisnummer 79\n2) Huisnummer 81")

if (v8 == 79) {
    var huisnummer79 = prompt("Hallo? Wie bent u?\n1) Mijn naam is "+ naam +".\n2) Ik ben opzoek naar Mario")
    if (huisnummer79 == 1) {
        alert("Oh, jij bent dus "+ naam +". Je bent vast opzoek naar Mario. Hij is boven op zijn kantoor. Kom maar binnen.")
    } else if (huisnummer79 == 2) {
        alert("Hij is boven op zijn kamer. Komt u binnen.")
        console.log("Logged vraag 8");
    }
}
else if (v8 == 81) {
    alert("...\nGeen antwoord, je probeert huisnummer 79 uit.")
    var huisnummer79 = prompt("Hallo? Wie bent u?\n1) Mijn naam is "+ naam +".\n2) Ik ben opzoek naar Mario")
    if (huisnummer79 == 1) {
        alert("Oh, jij bent dus "+ naam +". Je bent vast opzoek naar Mario. Hij is boven op zijn kantoor. Kom maar binnen.")
    } else if (huisnummer79 == 2) {
        alert("Hij is boven op zijn kamer. Komt u binnen.")
        console.log("Logged vraag 8");
    }
}

alert("Mario: Ik verwachtte dat je zou komen.")
alert(naam + ": Is dat zo?")
var v9 = prompt("Mario: Wat kan ik voor je doen?\n1) Geef je notitie met de kenteken erop\n2) Zeg dat je zoon is vermoord door een cartel");

if (v9 == 1) {
    alert("Mario: Wat is dit?")
    alert(naam + ": Dit is een kentekennummer die me gaat leiden naar degene die mijn zoon heeft vermoord.")
} else if (v9 == 2) {
    alert(naam + ": Mijn zoon is vermoord door een cartel.")
    console.log("Logged vraag 9");
}

alert("Mario: WAT?! SONNY IS DOOD?!..")
alert(naam + ": ...")
alert("Mario: ...")
alert(naam + ": Zoek deze kenteken en breng me naar zijn locatie.")
alert("Mario: .. Oke, geef me 1 a 2 uurtjes.")
var v10 = prompt("Mario: Wat ga jij nu doen?\n1) Blijf wachten op kantoor\n2) Ga terug naar huis")

if (v10 == 1) {
    alert(naam + ": Ik wacht hier.")
    alert("Mario: Oke.")
    alert("1 uur later..")
} else if (v10 == 2) {
    alert(naam + ": Ik ga terug naar huis.")
    alert("Mario: Oke, ik kom wel naar je toe wanneer ik meer weet.")
    alert("1 uur later..")
    alert("*deurbel*")
    var deurbel = prompt("Ga je de deur open doen?\n1) Ja\n2) Nee")
    if (deurbel == 2){
        alert("Kijk via het raam.")
        var raam = prompt("Oh, het is Mario.\n1) Doe de deur open.")
        if (raam == 1) {
            alert("Mario: Oke, ik heb informatie kunnen vinden. Het gaat om een italiaanse cartel. Ze zijn vaak in het zuiden bij het El Pacho Café. Neem de trap naar boven en je zult ze treffen tijdens hun vergadering.")
            alert(naam + ": Oké, bedankt.")
        }
    }   else if (deurbel == 1) {
        alert("Oke, ik heb informatie kunnen vinden. Het gaat om een italiaanse cartel. Ze zijn vaak in het zuiden bij het El Pacho Café. Neem de trap naar boven en je zult ze treffen tijdens hun vergadering.")
        alert(naam + ": Oké, bedankt.")
        console.log("Logged vraag 10");
    }
}

var v11 = prompt("Je weet waar ze nu zijn. Wat is jou plan?\n1) Mijn handlangers roeppen en een strategie bedenken\n2) Alleen naar binnen gaan")

if (v11 == 1) {
    alert("Je handlangers hebben je bericht binnen. Ze verzamelen zich in het hoofdzaal.")
}
else if (v11 == 2) {
    alert("Het is te gevaarlijk om alleen te gaan! Laat al je mannen verzamelen in het hoofdzaal!")
    console.log("Logged vraag 11");
}

var v12 = prompt("Je mannen staan voor je klaar in het hoofdzaal. Wat is je strategie?\n1) Je stormt binnen en vermoord iedereen\n2) Je gaat rustig naar binnen en praat met een van de mensen daar")

if (v12 == 1) {
    alert("Stap in de auto en rij naar hun locatie.")
    alert("Jullie zijn aangekomen.")
    var finale = prompt("Je staat voor El Pacho Cafe. Wat ga je doen?\n1) Deur open maken\n2) Deur open trappen")
    if (finale == 1) {
    alert("*" + naam +" en zijn mannen schieten iedereen die in de weg staat*")
    alert("Marco: Pak ze allemaal!")
    alert("*schoten*")
    alert(naam + ": Snel! Iedereen naar boven! Marco en Silvo blijf beneden en laat ons weten wanneer er iets is.")
    var finaledeur = prompt("Je bent boven, je ziet 3 deuren. Welke deur kies je?1) Deur 3\n2) Deur 1\n3) Deur 2")
    if (finaledeur == 1 || 3) {
        alert("Verkeerde kamer.. Je zoekt de andere deuren.")
        alert("Het was Deur 1.")
    }
    else if (finaledeur == 2) {
        alert("Het was Deur 1.")
    }
    alert("Je bent binnen. Wacht.. Wat!?")
    alert("...")
    alert(naam + ": Emillio!?")
    alert("Emillio: Oh " + naam + ", leuk dat je gezellig bij ons aansluit.")
    alert(naam + ": Wat is dit?!")
    alert("Emillio: Dit is een vergadering.")
    alert(naam + ": *pakt pistool*, heb jij mijn zoon vermoord?")
    alert("Emillio: Jou zoon?")
    alert(naam + ": *richt het pistool naar zjin hoofd*, jij hebt hem vermoord..")
    alert("Emillio: *lacht*")
    var eindschot = prompt("Wat ga je doen?\n1) Schieten\n2) ..?")
    if (eindschot == 1) {
        alert(naam + ": Wat zijn je laatste woorden?")
        alert("Emillio: Vaffanculo!")
        alert("*wapenschot*")
    }
    else if (eindschot == 2) {
        alert(naam + ": *slaat Emillio bewustenloos*")
        alert(naam + ": Bind Emillio vast en schiet de rest dood.")
        alert("Handlangers: Oke baas!")
    }
    }
    else if (finale == 2) {
        alert("*" + naam +" en zijn mannen schieten iedereen die in de weg staat*")
        alert("Marco: Pak ze allemaal!")
        alert("*schoten*")
        alert(naam + ": Snel! Iedereen naar boven! Marco en Silvo blijf beneden en laat ons weten wanneer er iets is.")
        var finaledeur = prompt("Je bent boven, je ziet 3 deuren. Welke deur kies je?1) Deur 3\n2) Deur 1\n3) Deur 2")
        if (finaledeur == 1 || 3) {
            alert("Verkeerde kamer.. Je zoekt de andere deuren.")
            alert("Het was Deur 1.")
        }
        else if (finaledeur == 2) {
            alert("Het was Deur 1.")
        }
        alert("Je bent binnen. Wacht.. Wat!?")
        alert("...")
        alert(naam + ": Emillio!?")
        alert("Emillio: Oh " + naam + ", leuk dat je gezellig bij ons aansluit.")
        alert(naam + ": Wat is dit?!")
        alert("Emillio: Dit is een vergadering.")
        alert(naam + ": *pakt pistool*, heb jij mijn zoon vermoord?")
        alert("Emillio: Jou zoon?")
        alert(naam + ": *richt het pistool naar zjin hoofd*, jij hebt hem vermoord..")
        alert("Emillio: *lacht*")
        var eindschot = prompt("Wat ga je doen?\n1) Schieten\n2) ..?")
        if (eindschot == 1) {
            alert(naam + ": Wat zijn je laatste woorden?")
            alert("Emillio: Vaffanculo!")
            alert("*wapenschot*")
        }
        else if (eindschot == 2) {
            alert(naam + ": *slaat Emillio bewustenloos*")
            alert(naam + ": Bind Emillio vast en schiet de rest dood.")
            alert("Handlangers: Oke baas!")
        }
        }
}
else if (v12 == 2) {
    alert("Stap in de auto en rij naar hun locatie.")
    alert("Jullie zijn aangekomen.")
    var finale = prompt("Je staat voor El Pacho Cafe. Wat ga je doen?\n1) Deur open maken\n2) Deur open trappen")
    if (finale == 1) {
    alert(naam + ": Wie is jullie baas?")
    alert("Vijand: *trekt pistool*")
    alert("*" + naam +" en zijn mannen schieten iedereen die in de weg staat*")
    alert("Marco: Pak ze allemaal!")
    alert("*schoten*")
    alert(naam + ": Snel! Iedereen naar boven! Marco en Silvo blijf beneden en laat ons weten wanneer er iets is.")
    var finaledeur = prompt("Je bent boven, je ziet 3 deuren. Welke deur kies je?1) Deur 3\n2) Deur 1\n3) Deur 2")
    if (finaledeur == 1 || 3) {
        alert("Verkeerde kamer.. Je zoekt de andere deuren.")
        alert("Het was Deur 1.")
    }
    else if (finaledeur == 2) {
        alert("Het was Deur 1.")
    }
    alert("Je bent binnen. Wacht.. Wat!?")
    alert("...")
    alert(naam + ": Emillio!?")
    alert("Emillio: Oh " + naam + ", leuk dat je gezellig bij ons aansluit.")
    alert(naam + ": Wat is dit?!")
    alert("Emillio: Dit is een vergadering.")
    alert(naam + ": *pakt pistool*, heb jij mijn zoon vermoord?")
    alert("Emillio: Jou zoon?")
    alert(naam + ": *richt het pistool naar zjin hoofd*, jij hebt hem vermoord..")
    alert("Emillio: *lacht*")
    var eindschot = prompt("Wat ga je doen?\n1) Schieten\n2) ..?")
    if (eindschot == 1) {
        alert(naam + ": Wat zijn je laatste woorden?")
        alert("Emillio: Vaffanculo!")
        alert("*wapenschot*")
    }
    else if (eindschot == 2) {
        alert(naam + ": *slaat Emillio bewustenloos*")
        alert(naam + ": Bind Emillio vast en schiet de rest dood.")
        alert("Handlangers: Oke baas!")
    }
    }
    else if (finale == 2) {
        alert("*" + naam +" en zijn mannen schieten iedereen die in de weg staat*")
        alert("Marco: Pak ze allemaal!")
        alert("*schoten*")
        alert(naam + ": Snel! Iedereen naar boven! Marco en Silvo blijf beneden en laat ons weten wanneer er iets is.")
        var finaledeur = prompt("Je bent boven, je ziet 3 deuren. Welke deur kies je?1) Deur 3\n2) Deur 1\n3) Deur 2")
        if (finaledeur == 1 || 3) {
            alert("Verkeerde kamer.. Je zoekt de andere deuren.")
            alert("Het was Deur 1.")
        }
        else if (finaledeur == 2) {
            alert("Het was Deur 1.")
        }
        alert("Je bent binnen. Wacht.. Wat!?")
        alert("...")
        alert(naam + ": Emillio!?")
        alert("Emillio: Oh " + naam + ", leuk dat je gezellig bij ons aansluit.")
        alert(naam + ": Wat is dit?!")
        alert("Emillio: Dit is een vergadering.")
        alert(naam + ": *pakt pistool*, heb jij mijn zoon vermoord?")
        alert("Emillio: Jou zoon?")
        alert(naam + ": *richt het pistool naar zjin hoofd*, jij hebt hem vermoord..")
        alert("Emillio: *lacht*")
        var eindschot = prompt("Wat ga je doen?\n1) Schieten\n2) ..?")
        if (eindschot == 1) {
            alert(naam + ": Wat zijn je laatste woorden?")
            alert("Emillio: Vaffanculo!")
            alert("*wapenschot*")
        }
        else if (eindschot == 2) {
            alert(naam + ": *slaat Emillio bewustenloos*")
            alert(naam + ": Bind Emillio vast en schiet de rest dood.")
            alert("Handlangers: Oke baas!")
            console.log("Logged vraag 12");
        }
        }
}


























