import { ContratoDeBebidas } from "../01 - Abstracciones/Interfaces/contrato-de-bebidas";

export function prepararBebida(bebida: ContratoDeBebidas): void {
    bebida.preparar();
}

export function servirBebida(bebida: ContratoDeBebidas): void {
    bebida.servir();
}