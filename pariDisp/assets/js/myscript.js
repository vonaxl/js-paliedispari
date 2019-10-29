var x = prompt("scegli tra pari(0) o dispari(1), inserisci il numero");
if (x==0) {
    console.log("Hai scelto PARI");
}else{
    console.log("Hai scelto DISPARI");
}

var y = parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log("Il numero inserito dal player è "+y);

var total = somma();
console.log("la somma dei numeri è "+total);
pariDisp();


function somma() {

    var pc= Math.floor(Math.random() * 6 +1);
    console.log("Il numero del pc è "+pc);
    ris = y+pc;
    
    return ris;
}

function pariDisp() {
    if (total%2==0 && x==0) {
        console.log("Tu hai vinto");
    }else if (total % 2 !=0 && x==1) {
        console.log("Tu hai vinto");
    } else {
        console.log("Mi dispiace ma il computer ha vinto");
    }
}
