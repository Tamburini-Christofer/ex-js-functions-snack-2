// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, 
// incrementando un contatore e stampandolo.

function creaContatoreAutomatico (intervallo) {
    let count = 0;
    return () => {
        setInterval(() => {
            count++;
            console.log(count)
        }, intervallo)
    }
}

const start = creaContatoreAutomatico(2000);
start();