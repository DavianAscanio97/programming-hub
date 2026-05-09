import { TipoBebida } from "../01 - Abstracciones/Tipos/tipo-bebida";
import { FabricaDeBebidas } from "../02 - Implementaciones/Fabricas/fabrica-bebidas";
import { prepararBebida, servirBebida } from './preparar-bebida';


console.log("Factory Pattern - Uso");

const primerPedido: TipoBebida = "Cafe";
const segundaOrden: TipoBebida = "Té";
const tercerPedido: TipoBebida = "Jugo";


const bebida1 = FabricaDeBebidas.prepararBebida(primerPedido);
const bebida2 = FabricaDeBebidas.prepararBebida(segundaOrden);
const bebida3 = FabricaDeBebidas.prepararBebida(tercerPedido);

console.log(`Primer pedido: ${primerPedido}`);
prepararBebida(bebida1);
bebida1.servir();

console.log(`Segunda orden: ${segundaOrden}`);
prepararBebida(bebida2);
bebida2.servir();

console.log(`Tercer pedido: ${tercerPedido}`);
prepararBebida(bebida3);
bebida3.servir();
