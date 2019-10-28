
// document.getElementById('n1out').innerHTML = n1;
// Una funzione per capire se la parola è palindroma

var x = prompt("Inserisci la parola : ");
console.log(x);
var verifica = palindroma();


function palindroma() {
     var y = x.split("").reverse().join("") ;
     console.log(y);
     if (x==y) {
         console.log("E' palindroma");
     }else{
         console.log("Non è palindroma");     
     }
}