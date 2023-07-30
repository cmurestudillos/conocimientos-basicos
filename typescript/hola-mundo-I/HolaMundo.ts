class HolaMundo {
    fullName: string;
    constructor(public firstWord: string, public secondWord: string) {
        this.fullName = firstWord + " " + secondWord;
    }
}

interface Mensaje {
    firstWord: string;
    secondWord: string;
}

function greeter(mensaje : Mensaje) {
    return mensaje.firstWord + " " + mensaje.secondWord;
}

let mensaje = new HolaMundo("Hola", "Mundo");

document.body.innerHTML = greeter(mensaje);