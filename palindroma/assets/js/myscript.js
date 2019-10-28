
// document.getElementById('n1out').innerHTML = n1;
// Una funzione per capire se la parola è palindroma

var x = prompt("Inserisci la parola : ");
console.log(x);
document.getElementById('xOut').innerHTML = x;
var verifica = palindroma();

// prima separiamo la parola , cambiamo le posizioni delle lettere e li mettiamo insieme
function palindroma() {
     var y = x.split("").reverse().join("") ;
     console.log(y);
     document.getElementById('yOut').innerHTML = y;
     if (x==y) {
         console.log("E' palindroma");
         return true
     }else{
         console.log("Non è palindroma");  
        return false
     }
}

if (verifica==true) {
    document.getElementById('zOut').innerHTML = "La parola è palindroma";
} else {
    document.getElementById('zOut').innerHTML = "La parola non è palindroma";
}