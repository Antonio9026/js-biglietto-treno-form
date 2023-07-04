
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
    console.log(ticketPrice );
    if (userAge === "minor") {
        discount = 0.20;
          //  sottraggo al prezzo prezzo del biglietto intero lo sconto minorenni 
    const scontoMinorenne = ticketPrice * discount;
 
    let prezzoScontato = ticketPrice - scontoMinorenne;
 //
     // console.log(prezzoScontato.toFixed(2));
 
     // stampo in pagina prezzo sconto minorenni
     document.getElementById("prezzo").innerHTML = prezzoScontato.toFixed(2) + " €";
 
     // genero tipo di offerta
     document.getElementById("type_offer").innerHTML = "Biglietto offerta";
    } else if (userAge === "over") {
        discount = 0.40;
        const scontoOver65 = ticketPrice * discount;
        // console.log(scontoOver65.toFixed(2));
    
        prezzoScontato = ticketPrice - scontoOver65;
        // console.log( prezzoScontato.toFixed(2));
    
        // stampo in pagina prezzo sconto over65
        document.getElementById("prezzo").innerHTML = prezzoScontato.toFixed(2) + " €";
    
        // genero tipo di offerta
        document.getElementById("type_offer").innerHTML = "Biglietto offerta";
    
    } else {
        discount = 0
         // stampo in pagina prezzo maggiorenni
    document.getElementById("prezzo").innerHTML = ticketPrice.toFixed(2)  + " €";
    // genero tipo di offerta
    document.getElementById("type_offer").innerHTML = "Biglietto standard";
    }
    document.getElementById("passenger_dait").innerHTML = userName;


    //     // genero numero carrozza
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 20) + 1;

    //     //  genero codice CP
    document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 10000;




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
