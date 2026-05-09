import { Bebida } from "../../01 - Abstracciones/Clases/bebida";

export class Frutino extends Bebida {
    preparar(): void {
        console.log("Preparando un frutiño con ingredientes frescos y una pizca de azúcar.");
    }
    servir(): void {
        console.log("Sirviendo el frutiño en un vaso alto con una rodaja de fruta como decoración.");
    }
}