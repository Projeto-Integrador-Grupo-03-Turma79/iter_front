import { useState } from "react";
import Viagem from '../../../models/Viagem';

interface CardViagensProps {
    viagem: Viagem;
}

function CardViagem({ viagem }: CardViagensProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between transition-all duration-300">
            {/* Cabeçalho do card */}
            <div className="flex w-full bg-indigo-400 py-2 px-4 items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src={viagem.veiculo?.fotoMotorista}
                        className="h-12 w-12 rounded-full"
                        alt={viagem.destino}
                    />
                    <h3 className="text-lg font-bold uppercase">{viagem.destino}</h3>
                </div>

                {/* Botão de Expandir */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-white text-black font-extrabold h-8 w-8 rounded-3xl hover:bg-gray-200 transition"
                >
                    {isExpanded ? '-' : '+'}
                </button>
            </div>

            {/* Informações básicas */}
            <div className="p-4">
                <h4 className="text-lg font-semibold uppercase">{viagem.veiculo?.modelo}</h4>
                <p>Cor: {viagem.veiculo?.cor}</p>
                <p>Valor: R${viagem.preco}</p>
                <p>
                    Data:{" "}
                    {new Intl.DateTimeFormat(undefined, {
                        dateStyle: "full",
                    }).format(new Date(viagem.data))}
                    . Às {viagem.hora}
                </p>
            </div>

            {/* Se expandido, exibe mais informações */}
            {isExpanded && (
                <div className="p-4 bg-gray-100 border-t border-gray-300">
                    <p><strong>Distância:</strong> {viagem.distancia} km</p>
                    <p><strong>Tempo de viagem:</strong> {viagem.tempoViagem}</p>
                    <p><strong>Motorista:</strong> {viagem.veiculo?.motorista}</p>
                    <p><strong>Placa do veículo:</strong> {viagem.veiculo?.placa}</p>
                </div>
            )}
        </div>
    );
}

export default CardViagem;
