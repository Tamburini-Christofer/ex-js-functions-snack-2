// Crea una funzione stampaOgniSecondo con setInterval

function stampaOgniSecondo (messaggio) {
    setInterval(() => {
        console.log(messaggio)
    }, 1000);
}

const interval = stampaOgniSecondo();

clearInterval(interval);