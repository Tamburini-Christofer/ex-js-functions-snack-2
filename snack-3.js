//Definisci una funzione esegui
//Operazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

function eseguiOperazione (num1, num2, callback) {
    return callback(num1, num2)
};

eseguiOperazione(5,5,somma);
eseguiOperazione(5,5,moltiplica);