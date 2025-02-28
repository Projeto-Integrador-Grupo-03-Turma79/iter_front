import Viagem from '../../../models/Viagem'

interface CardViagensProps {
    viagem: Viagem
}

function CardViagem({ viagem }: CardViagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={viagem.veiculo?.fotoMotorista}
                        className='h-12 rounded-full'
                        alt={viagem.destino} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {viagem.destino}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{viagem.veiculo?.modelo}</h4>
                    <p>Cor: {viagem.veiculo?.cor}</p>
                    <p>Valor: {viagem.preco}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(viagem.data))}</p>
                </div>
            </div>
        </div>
    )
}

export default CardViagem