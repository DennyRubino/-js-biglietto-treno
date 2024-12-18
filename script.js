//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



//Chiedere il  numero dei chilometri da percorrere
const kilometers = prompt("Quanti chilometri vuoi percorrere?");
//chiedere l'età del passegero
const age = prompt("Quanti anni hai?");
// calcolare il costo del viaggio (0.21 € al km) 
const priceKm = 0.21;
let ticketPrice = kilometers * priceKm;
// - va applicato uno sconto del 20% per i minorenni
if (age < 18){ticketPrice *=0.8}
// - va applicato uno sconto del 40% per gli over 65.
if (age > 65){ticketPrice *= 0.6;}
//Dare al output il prezzo in forma umana
ticketPrice = ticketPrice.toFixed(2);
//Output finale
alert(`Il prezzo totale del tuo viaggio è €${ticketPrice}`);
console.log(`Il prezzo totale del tuo viaggio è €${ticketPrice}`);