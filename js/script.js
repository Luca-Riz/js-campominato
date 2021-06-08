// *Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//todo arrivato fino a qui

// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// Consigli del giorno:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

//genera 16 numeri casuali da 1 a 100

var numeriPc = [];

while(numeriPc.length < 16){
    var numRandom = randomNum(1, 100);
    if(!numeriPc.includes(numRandom)) //numeri non duplicati
    {
        numeriPc.push(numRandom);
    }
}

console.log(numeriPc);

//chiedi all'utente (100-16) volte di inserire un numero alla volta sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var arrayUser = [];

//! modificare 20 con 100 alla fine
while(arrayUser.length < level(100) && !numeriPc.includes(numUser)) /* e numUser non in numPc */
{
    var numUser = parseInt(prompt('inserisci un numero da 1 a 100'));
    if (numeriPc.includes(numUser)){
        console.log('hai perso, numero presente nella lista numeri del pc, il tuo risultato è: ' + arrayUser.length);
    } else if (arrayUser.includes(numUser)){
        console.log('hai già inserito questo numero, riprova');
    } else if(!numeriPc.includes(numUser) && !arrayUser.includes(numUser)) //se numero utente non presente in numeriPc e in numeri arrayUser
    {
        arrayUser.push(numUser); //mettili dentro array user
    }  
}

if (arrayUser.length == level(100)) {
    console.log('hai vinto');
}

//* ============================sezione funzioni==============================

//calcolo numero random da 'min' a 'max'
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//calcolo livello, numero massimo numeri - 16 (valori inseriti random dal pc)
function level(numMax){
    return numMax - 16;
}