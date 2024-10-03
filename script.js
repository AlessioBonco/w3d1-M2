/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


function crazySum (numero1,numero2){ 
let somma = (numero1+numero2);
    if (numero1===numero2){
       return (somma*3)
    }
    else {
       return (somma)
    }
}

console.log (crazySum(4,4))



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/


function boundary (numeroIntero){
    if (numeroIntero > 19 && numeroIntero <101 || numeroIntero === 400)  {
       return (true)
    }
    else {
       return (false)
    }
}
console.log (boundary(400))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (frase){
   let frasesplit=  frase.split('');
   let frasereverse= frasesplit.reverse ();
   let frasejoin = frasereverse.join ('');
   return frasejoin
}
console.log (reverseString('epicode'))



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
function upperFirst(string) {
    return string
        .split(' ')  // Divide la stringa in un array di parole
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Rende maiuscola la prima lettera di ogni parola
        .join(' ');  // Riunisce l'array in una stringa
}
console.log (upperFirst('Prima lettera maiuscola di ogni parola'))





/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
function giveMeRandom (n){
    let array1 = []
    for (i = 0; i < n ; i++){
        array1.push(Math.floor(Math.random () * 11));
    }
    return array1
}
console.log (giveMeRandom(10))
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2){
    let areaRettangolo = (l1*l2);
    return areaRettangolo
}
console.log (area (12,18))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (Nfornito){
if (Nfornito <= 19){
return (19-Nfornito)
}
else if ((Nfornito-19)>19){
   return ((Nfornito-19)*3)
}
else {
    return (Nfornito-19)
}
}
console.log (crazyDiff (50))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string) {
    if (string.startsWith("code")) {
        return string;
    }
     else {
        return "code" + string;
    }
}

console.log (codify('epicode'))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
function check3and7(numero) {
    return numero % 3 === 0 || numero % 7 === 0;
}
console.log(check3and7(10))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
 function cutString (testo){
   let nuovotesto = testo.slice (1,-1)
   return nuovotesto
 }
console.log (cutString('ciao,come va'))