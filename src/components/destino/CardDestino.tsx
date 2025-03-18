import { Link } from "react-router-dom"
import Viagem from '../../models/Viagem'
import Rio from '../../assets/rio.jpeg'
import Salvador from '../../assets/salvador.jpeg'
import Lencois from '../../assets/LM.jpeg'


function CardDestino() {

  return (
    <>
      <div className="flex justify-center gap-10 flex-wrap">

      <div className="max-w-70 bg-white border border-gray-200 rounded-2xl shadow-sm m-10">
        
        <div className="h-60 ">
          <img className="rounded-t-lg h-full w-full object-cover" src={Rio} alt="" />
        </div>

        <div className="p-5 max-h-60 bg-white pb-60 rounded-b-3xl">
          <a href="#">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Destino: </p>
            <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Rio de Janeiro</p>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">O Rio de Janeiro é um dos destinos turísticos mais icônicos do Brasil. Não perca a chance de explorar!</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none">
            <Link to='/viagens' className='hover:underline'>Saiba Mais</Link>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>



      <div className="max-w-70 bg-white border border-gray-200 rounded-lg shadow-sm justify-center items-center m-10">
        
        <div className="h-60 ">
          <img className="rounded-t-lg h-full w-full object-cover" src={Salvador} alt="" />
        </div>

        <div className="p-5 max-h-60 bg-white pb-60 rounded-b-3xl">
          <a href="#">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Destino: </p>
            <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Salvador</p>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Salvador é um dos destinos turísticos mais icônicos do Brasil, com lindas praias. Não perca a chance de explorar!</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none">
            <Link to='/viagens' className='hover:underline'>Saiba Mais</Link>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>


      <div className="max-w-70 bg-white border border-gray-200 rounded-lg shadow-sm justify-center items-center m-10">
        
        <div className="h-60 ">
          <img className="rounded-t-lg h-full w-full object-cover" src={Lencois} alt="" />
        </div>

        <div className="p-5 max-h-60 bg-white pb-60 rounded-b-3xl">
          <a href="#">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Destino: </p>
            <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Lençois Maranhenses</p>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Os Lençois Maranhenses são um dos destinos turísticos mais icônicos do Brasil. Não perca a chance de explorar!</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none">
            <Link to='/viagens' className='hover:underline'>Saiba Mais</Link>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>

      </div>

    </>
  )
}

export default CardDestino