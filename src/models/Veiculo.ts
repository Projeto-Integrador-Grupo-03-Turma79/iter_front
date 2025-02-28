
import Viagem from "./Viagem";

export default interface Veiculo {
    id: number;
    modelo: string;
    marca: string;
    cor: string;
    placa: string;
    motorista: string;
    fotoMotorista: string;
    viagem?: Viagem[] | null;
}