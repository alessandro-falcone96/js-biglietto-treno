// Esercitazione: Calcolo del prezzo del treno

var km = prompt("Quanti km vuoi percorrere?");
var eta = prompt("Quanti anni hai?");

var prezzo = km * 0.21;

if (eta < 18) {
  prezzo = prezzo * (80 / 100);
} else if (eta > 65) {
  prezzo = prezzo * (60 / 100);
}
alert("Il prezzo del biglietto è: " + prezzo);
