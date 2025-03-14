import { ReactNode } from "react";

export default interface UsuarioLogin {
    
    id: number;
    nome: string;
    celular: number;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
}