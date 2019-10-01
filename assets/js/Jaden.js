alert("Je hebt gekozen voor het verhaal van Emilio!");
var name = prompt("Wil je de naam wijzigen?","Emilio");

alert("Top! Je naam is nu "+name+"!");
var awnser = prompt("Het is 8 December 1972, je moet naar een vergadering, maar je wilt ook naar Vito om informatie te verstrekken\nWat doe je?\n1) Je gaat naar de vergadering\n 2)Je gaat naar Vito");

    if(awnser == 1){
        alert("Je stapt je auto in, en rijdt naar het gebouw");

    }
    else if(awnser == 2){
        alert("Vito is nu niet beschikbaar.\nGa naar de vergadering");
        alert("Je stapt je auto in en gaat naar de vergadering.");
    };
alert("Je bent aangekomen bij de vergadering");
alert("Je bespreekt met Mario dat Vito langs Pablo gaat");
alert("Ezio: "+name+" Ik wil dat je naar Pablo gaat, en gaat kijken waar Vito is.");

    awnser = prompt("na de vergadering besluit Ezio om jou naar Pablo te sturen, om Vito te bespioneren.\nGa je akkoord?\n1) Ja\n2) Nee");

    if(awnser == 1) {
        alert("Je vertrekt en je gaat richting Pablo");
    }
    else if(awnser == 2){
        alert("Je bent verplicht van Mario om daar heen te gaan, anders...");
        alert("Je vertrekt en je gaat richting Pablo");
    }
    alert("Je bent aangekomen bij Pablo!");

    awnser = prompt("Je hebt een aantal keuzes wat je gaat doen.\n1) Bel aan\n2) Kijk stiekem door het raam\n3) Ga via de tuin naar binnen");
    if(awnser == 1) {
        alert("Pablo: Hey "+name+"!, Je loopt Vito net mis.");
        alert(name+": Hey Pablo, Wat deed Vito hier?");
        alert("Pablo: Ooh niks bijzonders, gewoon een aantal dingetjes regelen.");
        alert(name+": Ooh weet je toevallig ook waar hij heen ging?");
        alert("Pablo: Jazeker, hij gaat even naar zijn huis toe.");
        alert(name+": Oke, dan ga ik even langs, bedankt!");
    }
    else if(awnser == 2) {
        alert("Je kijkt stiekem door het raam.");
        alert("Je ziet Pablo in de keuken staan.");
        alert("Je probeert Vito te zoeken maar je kan hem niet vinden.");
        alert("Je besluit om alsnog aan te bellen bij Pablo.")
        alert("Pablo: Hey "+name+"!, Je loopt Vito net mis.");
        alert(name+": Hey Pablo, Wat deed Vito hier?");
        alert("Pablo: Ooh niks bijzonders, gewoon een aantal dingetjes regelen.");
        alert(name+": Ooh weet je toevallig ook waar hij heen ging?");
        alert("Pablo: Jazeker, hij gaat even naar zijn huis toe.");
        alert(name+": Oke, dan ga ik even langs, bedankt!");
    }
    else if(awnser == 3) {
        alert("Je loopt via een steegje naar de tuin.");
       awnser = prompt("Je ziet het hek van Pablo.\n1) Maak het hek open.\n2) Kijk stiekem door het hek heen.");
        if (awnser == 1) {
            alert("Je doet het hek open en loopt naar binnen.");
            alert("Je kijkt stiekem door het raam.");
            alert("Je ziet Pablo in de keuken staan.");
            alert("Je probeert Vito te zoeken maar je kan hem niet vinden.");
            alert("Je besluit om alsnog aan te bellen bij Pablo.")
            alert("Pablo: Hey "+name+"!, Je loopt Vito net mis.");
            alert(name+": Hey Pablo, Wat deed Vito hier?");
            alert("Pablo: Ooh niks bijzonders, gewoon een aantal dingetjes regelen.");
            alert(name+": Ooh weet je toevallig ook waar hij heen ging?");
            alert("Pablo: Jazeker, hij gaat even naar zijn huis toe.");
            alert(name+": Oke, dan ga ik even langs, bedankt!");
        }
        else if(awnser == 2) {
            alert("Je gluurt naar binnen maar je ziet alleen Pablo");
            alert("Je probeert Vito te vinden maar je kan he niet zien.");
            alert("Je besluit om alsnog naar binnen te gaan en met Pablo te praten.");
            alert("Pablo: Hey "+name+"!, Je loopt Vito net mis.");
            alert(name+": Hey Pablo, Wat deed Vito hier?");
            alert("Pablo: Ooh niks bijzonders, gewoon een aantal dingetjes regelen.");
            alert(name+": Ooh weet je toevallig ook waar hij heen ging?");
            alert("Pablo: Jazeker, hij gaat even naar zijn huis toe.");
            alert(name+": Oke, dan ga ik even langs, bedankt!");
        }
    }
    alert("*TELEFOON GAAT* Het is Ezio.");
    alert(name+": Hallo?");
    alert("Ezio: "+name+"! Weet je al waar Vito is?!");
    alert(name+": Ja hij gaat nu naar zijn huis toe.");
    alert("Ezio: Oke top, stuur iemand naar zijn huis om hem goed te laten schrikken.");
    alert(name+": Oke, waar zal ik heen komen?");
    alert("Ezio: Ga naar het El Pacho Cafe, ik verwacht wel dat Vito daar dalijk is.");
    awnser = prompt("Van Ezio moet je naar het El Pacho Cafe om Vito op te wachten\n1) Ga naar het El Pacho Cafe.\n2) Ga eerst naar huis.");
    if (awnser == 1) {
        alert("Je stapt je auto in en je rijdt naar het El Pacho Cafe.");
        alert("Je bent aangekomen.");
        alert("Ezio: Mooi, je bent er. We moeten nog een aantal mensen regelen.");
        alert("Ezio: Ik heb te horen gekregen dat Vito hier met veel mensen gaat zijn.");
        alert(name+": Hoezo? Hoe kan dat?.");
        alert("Ezio: Ik heb zijn zoon dood geschoten. En nu komt hij goed voorbereid en met veel mensen hier heen.");
        alert(name+": JE HEBT WAT?! Dat is nooit afgesproken dat we dat zouden doen!");
        alert("Ezio: Ja, maar daar hebben we nu geen tijd voor om dat te discusseren. Regel mensen die hier ons komen helpen!");
    }
    else if (awnser == 2) {
        alert("Je stapt je auto in een je rijdt richting je huis");
        alert("*TELEFOON GAAT* Ezio:"+name+"! Waar blijf je!");
        alert(name+": Ik wil eerst naar huis gaan Ezio.");
        alert("Ezio: Ik heb geen tijd om het uit te leggen maar je moet onmiddelijk hier naar toe komen.");
        awnser = prompt("Keer je om en ga je er direct heen?\n1) Ja\n2) Nee");
        if (awnser == 1) {
            alert("Ezio: Oke mooi! Ik zie je zo.");
            alert("Je keert om en gaat richting het cafe.");
            alert("Je bent aangekomen.");
            alert("Ezio: Mooi, je bent er. We moeten nog een aantal mensen regelen.");
            alert("Ezio: Ik heb te horen gekregen dat Vito hier met veel mensen gaat zijn.");
            alert(name+": Hoezo? Hoe kan dat?.");
            alert("Ezio: Ik heb zijn zoon dood geschoten. En nu komt hij goed voorbereid en met veel mensen hier heen.");
            alert(name+": JE HEBT WAT?! Dat is nooit afgesproken dat we dat zouden doen!");
            alert("Ezio: Ja, maar daar hebben we nu geen tijd voor om dat te discusseren. Regel mensen die hier ons komen helpen!");
        }
        else if(awnser == 2) {
            alert("Ezio: "+name+"! Je komt nu hier heen! Ander hebben het fatale gevolgen!");
            alert("Je besluit om naar het Cafe te gaan.");
            alert("Je keert om en gaat richting het cafe.");
            alert("Je bent aangekomen.");
            alert("Ezio: Mooi, je bent er. We moeten nog een aantal mensen regelen.");
            alert("Ezio: Ik heb te horen gekregen dat Vito hier met veel mensen gaat zijn.");
            alert(name+": Hoezo? Hoe kan dat?.");
            alert("Ezio: Ik heb zijn zoon dood geschoten. En nu komt hij goed voorbereid en met veel mensen hier heen.");
            alert(name+": JE HEBT WAT?! Dat is nooit afgesproken dat we dat zouden doen!");
            alert("Ezio: Ja, maar daar hebben we nu geen tijd voor om dat te discusseren. Regel mensen die hier ons komen helpen!");
        }
    }
    awnser = prompt("Je moet mensen regelen! Wie bel je?\n1) Fernandez\n2) Cilvio\n3) Allebei");
        if(awnser == 1) {
            alert("Je hebt zo veel mogelijk mensen nodig! Je belt ze allebij");
        }
        else if(awnser == 2) {
            alert("Je hebt zo veel mogelijk mensen nodig! Je belt ze allebij");
        }
        else if(awnser == 3) {
            alert("Top, Je belt ze allebij op.");
        }
    alert("*30 MINUTEN LATER* "+name+": Top jullie zijn er!");
    awnser = prompt("")
