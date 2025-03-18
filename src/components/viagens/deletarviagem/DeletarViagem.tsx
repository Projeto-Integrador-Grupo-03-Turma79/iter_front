import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Viagem from "../../../models/Viagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { RotatingLines } from "react-loader-spinner"

export default function DeletarViagem() {
    const navigate = useNavigate()

    const [viagem, setViagem] = useState<Viagem>({} as Viagem)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    const { id } = useParams<{ id: string }>()


    async function buscarViagemPorId(id: string) {
        try {
            await buscar(`/viagem/id/${id}`, setViagem, {
                headers: { 'Authorization': token}
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'aviso')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarViagemPorId(id)
        }
    }, [id])


    async function deletarViagem() {
        setIsLoading(true)

        try {
            await deletar(`/viagem/deletar/${id}`, {
                headers: {'Authorization': token}
            })
              ToastAlerta("Viagem apagado com sucesso!", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar a viagem.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }
    return (
    <div className="h-[80vh] flex justify-center items-center bg-[#efefef]">
        <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative  rounded-lg shadow-sm bg-[#003152]">
                <button onClick={retornar} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="#F1AF09" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className="mb-2 text-xl font-normal text-white">Tem certeza que quer deletar essa viagem?</h3>
                    <h2 className="mb-8 text-[16px] font-normal text-white">De {viagem.origem} para {viagem.destino}.</h2>
                    <button onClick={deletarViagem} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim, deletar</span>
                        }
                    </button>
                    <button onClick={retornar} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    )
}