// Crea una funzione stampaOgniSecondo con setInterval

function stampaOgniSecondo () {
    const time = setInterval(() => {
        console.log("1 secondo")
    }, 1000);

    return time;
}

const interval = stampaOgniSecondo();

clearInterval(interval);