import { Bebida } from "../../01 - Abstracciones/Clases/bebida";

export class Agua extends Bebida {
    preparar(): void {
        console.log("Preparando un vaso de agua cristalina y refrescante.");
    }
    servir(): void {
        console.log("Sirviendo el agua en un vaso transparente con hielo y una rodaja de limón.");
    }
}