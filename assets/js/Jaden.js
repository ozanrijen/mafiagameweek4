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
alert("Mario: "+name+" Ik wil dat je naar Pablo gaat, en gaat kijken waar Vito is.");

var awnser = prompt("na de vergadering besluit Mario om jou naar Pablo te sturen, om Vito te bespioneren.\nGa je akkoord?\n1) Ja\n2) Nee");

    if(awnser == 1) {
        alert("Je vertrekt en je gaat richting Pablo");
    }
    else if(awnser == 2){
        alert("Je bent verplicht van Mario om daar heen te gaan, anders...");
        alert("Je vertrekt en je gaat richting Pablo");
    }
alert("Je bent aangekomen bij Pablo!");

var awnser = prompt("Je hebt een aantal keuzes wat je gaat doen.\n1) Bel aan\n2) Kijk stiekem door het raam\n3) Ga via de tuin naar binnen");
    if(awnser == 1) {
        alert("Pablo: Hey "+name+"!, Je loopt Vito net mis.");
        alert(name+": Hey Pablo, Wat deed Vito hier?");
        alert("Pablo: Ooh niks bijzonders, gewoon een aantal dingetjes regelen.")
    }