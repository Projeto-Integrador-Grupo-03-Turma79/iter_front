import { Link } from "react-router-dom"
import Veiculo from "../../../models/Veiculo"
import { useState } from "react";

interface CardVeiculosProps{
  veiculo: Veiculo
}



function CardVeiculo({veiculo}: CardVeiculosProps)  {

    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded,setIsExpanded] = useState(false);

    return (

        <div className=" relative w-full max-w-sm bg-white  rounded-lg shadow-xl drop-shadow-xl dark:bg-[#eceaea] ">
            <div className="flex justify-end px-4 pt-4">
                <button onClick={() => setIsOpen(!isOpen)} className="inline-block p-1.5">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute right-4 top-12 z-10 text-base list-none bg-[#003152] divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                        <ul className="py-2">
                            <li>
                                <Link to={`/editarveiculo/${veiculo.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#41637c] dark:text-gray-200 dark:hover:text-white">Editar Motorista</Link>
                            </li>
                            <li>
                            <Link to={`/deletarveiculo/${veiculo.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#41637c] dark:text-gray-200 dark:hover:text-white">Deletar Motorista</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-28 h-28 mb-5 rounded-full shadow-lg border-4 border-[#F1AF09] " src={veiculo.fotoMotorista} alt="Foto do motorista da viagem"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 "><strong>{veiculo.motorista}</strong></h5>
                <span className="text-gray-500 "><strong>{veiculo.marca} {veiculo.modelo} {veiculo.cor}</strong></span>
                <span className="text-black text-[18px] pt-7"><strong>Placa</strong></span>
                <div className="flex md:mt-2 ">
                    <button onClick={() => setIsExpanded(!isExpanded)} className="inline-block text-black font-bold bg-[#b4b4b4] w-30  rounded-full text-[18px] p-1 py-2">
                        {veiculo.placa}
                    </button>   
                </div>
            </div>
        </div>
        
  )
}

export default CardVeiculo