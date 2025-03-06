import Usuario from "./Usuario";
import Veiculo from "./Veiculo";

export default interface Viagem{
    id: number;
    destino: string;
    origem: string;
    preco: number;
    hora: string;
    distancia: number;
    velMedia: number;
    data: string;
    veiculo: Veiculo | null;
    usuario: Usuario | null;
    tempoViagem : string;
}