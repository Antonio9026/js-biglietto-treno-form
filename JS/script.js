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


const usernameInputElement = document.querySelector("[name='username']");

// numero di chilometri da percorrere parseInt(document.getElementById("inputKm").value)
const chilometri = document.getElementById("km").value;

// - Età del passeggero
const ageInput = document.getElementById("age");


// calcolo il prezzo del biglietto

let ticketPrice = chilometri * 0.21;
console.log();
// buttons
const genera = document.querySelector(".genera")
const annulla = document.querySelector(".annulla")

    genera.addEventListener("click", function () {
       const username = usernameInputElement.value;
        console.log(username);
        const distanza = chilometri.value;
        console.log(distanza);
        const age = ageInput.value;
        console.log(age);
        document.getElementById("passenger_dait").innerHTML = username;

        // genero numero carrozza
         document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 20) + 1;

        //  genero codice CP
        document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 10000;

        if (age < 18) {
            const scontoMin = ticketPrice * 0.20;
            // console.log(scontoMin.toFixed(2));
            //  sottraggo al prezzo prezzo del biglietto intero lo sconto minorenni 
            let prezzoScontato = ticketPrice - scontoMin;
            // console.log(prezzoScontato.toFixed(2));
            document.getElementById("prezzo").innerHTML = + prezzoScontato.toFixed(2) + " €";
            // genero tipo di offerta
            document.getElementById("type_offer").innerHTML = "Biglietto offerta";
        } else if (age >= 65) {
           const scontoOver65 = ticketPrice * 0.40;
            // console.log(scontoOver65.toFixed(2));
          prezzoScontato = ticketPrice - scontoOver65;
            // console.log( prezzoScontato.toFixed(2));
            document.getElementById("prezzo").innerHTML = prezzoScontato.toFixed(2) + " €";
             // genero tipo di offerta
            document.getElementById("type_offer").innerHTML = "Biglietto offerta";
        } else {
            document.getElementById("prezzo").innerHTML =  ticketPrice.toFixed(2) + " €";
             // genero tipo di offerta
            document.getElementById("type_offer").innerHTML = "Biglietto standard";
        };
    });


   annulla.addEventListener("click", 
   
    function goBack() {
        window.history.go(0);
        usernameInputElement.value = ""
        chilometri.value = ""
        age.value = ""
    }

  )
  