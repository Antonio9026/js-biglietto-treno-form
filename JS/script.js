// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
// Bonus:
// al click su annulla, si svuotano i campi e scopare il biglietto
// usare una select per far scegliere la fascia d’età all’utente

// queryselector nome e cognome utente
const usernameInputElement = document.querySelector("[name='username']");

// numero di chilometri da percorrere parseInt(document.getElementById("inputKm").value)
const chilometri = document.getElementById("km");

// - Età del passeggero
const ageInput = document.getElementById("age");

// discount 
let discount = 0// calcolo il prezzo del biglietto
console.log();
// buttons
const genera = document.querySelector(".genera")
const annulla = document.querySelector(".annulla")

genera.addEventListener("click", function () {

    //USER INPUT
    const userName = usernameInputElement.value; //Nome e Cognome
    const userKm = chilometri.value; // il numero di chilometri che vuole percorrere [userKm] 
    const userAge = ageInput.value; // l’età del passeggero [userAge] (parseInt();)
    let ticketPrice = chilometri.value * 0.21;
    if (userAge === "minor") {
        discount = 0.20;
    } else if (userAge === "over") {
        discount = 0.40;
    } else {
        discount = 0
    }
    document.getElementById("passenger_dait").innerHTML = userName;


    //     // genero numero carrozza
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 20) + 1;

    //     //  genero codice CP
    document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 10000;


    //  sottraggo al prezzo prezzo del biglietto intero lo sconto minorenni 
    const scontoMinorenne = ticketPrice * discount;
    prezzoScontato = ticketPrice - scontoMinorenne;

    // console.log(prezzoScontato.toFixed(2));

    // stampo in pagina prezzo sconto minorenni
    document.getElementById("prezzo").innerHTML = prezzoScontato.toFixed(2) + " €";

    // genero tipo di offerta
    document.getElementById("type_offer").innerHTML = "Biglietto offerta";

    const scontoOver65 = ticketPrice * discount;
    // console.log(scontoOver65.toFixed(2));

    prezzoScontato = ticketPrice - scontoOver65;
    // console.log( prezzoScontato.toFixed(2));

    // stampo in pagina prezzo sconto over65
    document.getElementById("prezzo").innerHTML = prezzoScontato.toFixed(2) + " €";
    
    // genero tipo di offerta
    document.getElementById("type_offer").innerHTML = "Biglietto offerta";

    // stampo in pagina prezzo maggiorenni
    document.getElementById("prezzo").innerHTML = ticketPrice.toFixed(2) - discount + " €";
    // genero tipo di offerta
    document.getElementById("type_offer").innerHTML = "Biglietto standard";

    });


annulla.addEventListener("click",
    //    funzione di refresh pagina
    function goBack() {
        window.history.go(0);
        usernameInputElement.value = ""
        chilometri.value = ""
        ageInput.value = ""
    }

);
