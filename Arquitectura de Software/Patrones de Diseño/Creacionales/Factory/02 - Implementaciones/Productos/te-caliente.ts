import { Bebida } from "../../01 - Abstracciones/Clases/bebida";

export class TeCaliente extends Bebida {
    preparar(): void {
        console.log("Preparando un té caliente con hojas de té y un toque de miel.");
    }
    servir(): void {
        console.log("Sirviendo el té caliente en una taza con una rodaja de limón como decoración.");
    }
}