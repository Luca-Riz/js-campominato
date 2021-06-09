// *Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// Consigli del giorno:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

var elabora = document.getElementById('bInizia');

// *pulsante inizia
elabora.addEventListener("click", function(){

    var lev = document.getElementById('lev').value;    
    
    //genera 16 numeri casuali da 1 a lev(100,80,50)
    var numeriPc = [];
    
    while(numeriPc.length < 16){
        var numRandom = randomNum(1, lev);
        if(!numeriPc.includes(numRandom)) //numeri non duplicati
        {
            numeriPc.push(numRandom);
        }
    }
    
    console.log(numeriPc);
    
    //chiedi all'utente (lev-16) volte di inserire un numero alla volta sempre compreso tra 1 e lev. L’utente non può inserire più volte lo stesso numero.
    
    var arrayUser = [];
    
    while(arrayUser.length < level(lev) && !numeriPc.includes(numUser)) /* e numUser non in numPc */
    {
        var numUser = parseInt(prompt('Inserisci un numero da 1 a '+lev));
        if (numeriPc.includes(numUser)){
            document.getElementById("bomb").classList.remove("d-none");
            document.getElementById("bomb").classList.add("d-block");
            alert('Hai perso, numero presente nella lista numeri del pc, il tuo risultato è: ' + arrayUser.length);
        } else if (arrayUser.includes(numUser)){
            alert('Hai già inserito questo numero, riprova');
        } else if(numUser <= 0)  /*controllo 0 e numeri negativi*/  {
            alert('Inserire solo numeri positivi')
        } else if(!numeriPc.includes(numUser) && !arrayUser.includes(numUser)) //se numero utente non presente in numeriPc e in numeri arrayUser
        {
            arrayUser.push(numUser); //mettili dentro array user
        }  
    }
    
    if (arrayUser.length == level(lev)) {
        console.log('Hai vinto');
    }

});

//* ============================sezione funzioni==============================

//calcolo numero random da 'min' a 'max'
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//calcolo livello, numero massimo numeri - 16 (valori inseriti random dal pc)
function level(numMax){
    return numMax - 16;
}