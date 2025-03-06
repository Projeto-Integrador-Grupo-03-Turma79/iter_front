import { Link } from "react-router-dom"
import Veiculo from "../../../models/Veiculo"

interface CardVeiculosProps{
  veiculo: Veiculo
}

function CardVeiculo({veiculo}: CardVeiculosProps)  {


    return (

        <div className="justify-center items-center grid grid-rows-1 bg-slate-200 rounded-xl p-1 pb-5 max-w-[25vw]">
          
            <div className="mt-2 flex flex-row items-center justify-between">
                <img alt="" src={veiculo.fotoMotorista} 
                    className="ml-6 mr-6 size-20 object-cover rounded-full bg-gray-50" />
          
                <div className="min-w-0 flex-auto p-5">
                    <p className="text-[18px] font-semibold text-gray-900 text-start object-top">{veiculo.motorista}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500 text-start">
                    {veiculo.marca}  {veiculo.modelo}  {veiculo.cor}</p>
                    <p className="text-sm/6 text-[#090909] font-bold">{veiculo.placa}</p>
                </div>

            </div>
            
            <div className="flex justify-center items-center gap-20 mt-2">
                <Link to={`/editarveiculo/${veiculo.id}`}
                    className='text-slate-100 bg-black hover:bg-slate-700 w-35 h-8
                    flex items-center justify-center rounded-4xl'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarveiculo/${veiculo.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-35 h-8
                    flex items-center justify-center rounded-4xl mr-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>

        
  )
}

export default CardVeiculo