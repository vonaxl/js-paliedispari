
// document.getElementById('n1out').innerHTML = n1;
// Una funzione per capire se la parola è palindroma

var x = prompt("Inserisci la parola : ");
console.log(x);
var verifica = palindroma();

// prima separiamo la parola , cambiamo le posizioni delle lettere e li mettiamo insieme
function palindroma() {
     var y = x.split("").reverse().join("") ;
     console.log(y);
     if (x==y) {
         console.log("E' palindroma");
     }else{
         console.log("Non è palindroma");     
     }
}