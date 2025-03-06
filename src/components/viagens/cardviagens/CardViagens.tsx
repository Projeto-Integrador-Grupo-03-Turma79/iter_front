
import { Link } from 'react-router-dom'
import Viagem from '../../../models/Viagem'
import Veiculo from '../../../models/Veiculo'
import { useState } from 'react';

interface CardViagensProps {
    viagem: Viagem;
}

function CardViagem({ viagem }: CardViagensProps) {
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto my-4 p-4 border border-gray-300 transition-transform hover:scale-105">

            <div className="flex flex-row items-center gap-4 pb-4 border-b border-gray-300">
                <img
                    src={viagem.veiculo?.fotoMotorista}
                    className="h-16 w-16 object-cover rounded-full border-2 border-gray-400"
                    alt={viagem.destino}
                />
                <div>
                    <h3 className="text-lg font-bold uppercase text-gray-800">{viagem.destino}</h3>
                    <p className="text-sm text-gray-600">Motorista: {viagem.veiculo?.motorista}</p>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-slate-200 border-slate-300 shadow text-black font-extrabold h-12 w-12 rounded-3xl hover:bg-gray-200 transition object-[100 100 100]"
                >
                    {isExpanded ? '-' : '+'}
                </button>
            </div>
            


            <div className="py-4 px-2 text-gray-700 space-y-2">
                <p><strong>Origem:</strong> {viagem.origem}</p>
                <p><strong>Destino:</strong> {viagem.destino}</p>
                <p><strong>Preço:</strong> R$ {viagem.preco}</p>
                {isExpanded && (
                    <><p><strong>Data:</strong>{" "} {new Intl.DateTimeFormat(undefined, {dateStyle: "full",}).format(new Date(viagem.data))}
                    . Às {viagem.hora}</p>
                    <p><strong>Distância:</strong> {viagem.distancia} km</p>
                    <p><strong>Velocidade Média:</strong> {viagem.velMedia} km/h</p><p><strong>Tempo Estimado:</strong> {viagem.tempoViagem}</p></>
                )}
            </div>



            <div className="flex justify-center items-center gap-20 mt-2">
                <Link to={`/editarviagem/${viagem.id}`}
                    className='text-slate-100 bg-black hover:bg-slate-700 w-35 h-8
                    flex items-center justify-center rounded-4xl'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarviagem/${viagem.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-35 h-8
                    flex items-center justify-center rounded-4xl mr-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardViagem