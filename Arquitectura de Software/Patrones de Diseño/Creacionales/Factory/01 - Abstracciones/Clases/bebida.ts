import { ContratoDeBebidas } from "../Interfaces/contrato-de-bebidas";

export abstract class Bebida implements ContratoDeBebidas {
    abstract preparar(): void;
    abstract servir(): void;
}