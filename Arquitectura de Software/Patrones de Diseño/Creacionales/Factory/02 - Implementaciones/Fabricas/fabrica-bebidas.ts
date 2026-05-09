import { Agua } from "../Productos/agua";
import { CafeDeLaCasa } from "../Productos/cafe-de-la-casa";
import { Frutino } from "../Productos/frutino";
import { TeCaliente } from "../Productos/te-caliente";

export class FabricaDeBebidas {
    static prepararBebida(tipo: string) {
        switch (tipo) {
            case "Cafe":
                return new CafeDeLaCasa();
            case "Té":
                return new TeCaliente();
            case "Jugo":
                return new Frutino();
            case "Agua":
                return new Agua();
            default:
                throw new Error("Tipo de bebida no reconocido");
        }
    }
}