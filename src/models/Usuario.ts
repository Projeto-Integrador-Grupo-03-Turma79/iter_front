import Viagem from "./Viagem";

export default interface Usuario{
    celular: string | number | readonly string[];
    
    id:  number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    viagem?: Viagem[] | null;
}