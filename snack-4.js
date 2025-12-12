// Crea un generatore di funzioni creaTimer

function creaTimer (time) {
    return (() => {
        setTimeout(() => {
            console.log("tempo scaduto!");
        }, time)
    })
}