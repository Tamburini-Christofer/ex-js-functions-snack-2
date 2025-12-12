// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, 
// ma si deve fermare dopo il tempo di stop.

function eseguiEferma (messaggio,time,stop) {
    const tempo = setInterval(()=>{
        console.log(messaggio)
     },time);

    setTimeout(()=>{
        clearInterval(tempo)
    }, stop)
}

eseguiEferma("Ciao belli!", 1000, 5000);