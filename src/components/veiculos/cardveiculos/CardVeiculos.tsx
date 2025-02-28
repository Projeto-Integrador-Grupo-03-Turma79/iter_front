import { Link } from "react-router-dom"
import Veiculo from "../../../models/Veiculo"

interface CardVeiculosProps{
  veiculo: Veiculo
}

function CardVeiculo({veiculo}: CardVeiculosProps)  {


    return (

      <div className='flex flex-col rounded-3xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-slate-200 font-bold text-2xl'>
          Informações
      </header>

      <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.motorista}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.modelo}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.marca}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.cor}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.placa}</p>
      {/* <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.viagem}</p> */}

      
      <div className="flex">
          <Link to='' 
              className='w-full bg-slate-200 hover:bg-slate-100 rounded flex items-center justify-center py-2'>
              <button>Editar</button>
          </Link>

          <Link to='' className=' bg-slate-200 hover:bg-red-700 w-full flex items-center justify-center'>
              <button>Deletar</button>
          </Link>
      </div>

  </div>
        
  )
}

export default CardVeiculo