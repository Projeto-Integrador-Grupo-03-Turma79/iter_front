import Viagem from "./Viagem";

export default interface Usuario{
    celular: number;
    id:  number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    viagem?: Viagem[] | null;
}