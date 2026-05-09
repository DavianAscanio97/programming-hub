import { Bebida } from "../../01 - Abstracciones/Clases/bebida";

export class CafeDeLaCasa extends Bebida {
    preparar(): void {
        console.log("Preparando un café de la casa con granos seleccionados y un toque especial.");
    }

    servir(): void {
        console.log("Sirviendo el café de la casa en una taza elegante con un poco de espuma.");
    }
}