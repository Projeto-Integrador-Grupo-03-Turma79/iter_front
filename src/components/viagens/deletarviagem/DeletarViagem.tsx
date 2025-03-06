import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Viagem from "../../../models/Viagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarViagem() {
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
                ToastAlerta("Erro ao deletar o veículo.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Viagem</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a viagem a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Viagem
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>Título da Viagem</p>
                    <p>Texto da Viagem</p>
                </div>
                <div className="flex">
                <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                   
                    <button 
                        className='w-full bg-slate-200  hover:bg-slate-100 flex items-center justify-center'
                                   onClick={deletarViagem}>
                      
                            Sim
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarViagem