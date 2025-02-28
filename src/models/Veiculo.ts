export default interface Veiculo {
    id: number
    modelo: string
    marca: string
    cor: string
    placa: string
    motorista: string
    foto: string
    viagem?: Viagem[] | null
}