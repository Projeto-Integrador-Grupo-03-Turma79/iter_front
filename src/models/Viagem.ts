import Usuario from "./Usuario";
import Veiculo from "./Veiculo";

export default interface Viagem{
    id: number;
    destino: string;
    origem: string;
    preco: number;
    distancia: number;
    velMedia: number;
    data: string;
    usuario: Usuario | null;
    veiculo: Veiculo | null;
}