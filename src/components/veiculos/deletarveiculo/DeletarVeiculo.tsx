import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Veiculo from "../../../models/Veiculo"
import { buscar, deletar } from "../../../service/Service"
import { AuthContext } from "../../../contexts/AuthContext"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarVeiculo() {

    const navigate = useNavigate()

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    const { id } = useParams<{ id: string }>()


    async function buscarVeiculoPorId(id: string) {
        try {
            await buscar(`/veiculo/id/${id}`, setVeiculo, {
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
            buscarVeiculoPorId(id)
        }
    }, [id])


    async function deletarVeiculo() {
        setIsLoading(true)

        try {
            await deletar(`/veiculo/deletar/${id}`, {
                headers: {'Authorization': token}
            })
            ToastAlerta("Veículo apagado com sucesso!", "sucesso")

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
        navigate("/nossosmotoristas")
    }

 
    return (

        <div className='container w-1/3 mx-auto'>
        <h1 className='text-4xl text-center my-4'>Deletar Veículo</h1>
        <p className='text-center font-semibold mb-4'>
            Você tem certeza de que deseja apagar o veículo a seguir?</p>
        <div className='flex flex-col border-slate-300 rounded-3xl overflow-hidden justify-between'>
            <header
                className='flex justify-center text-4xl p-2 text-white italic bg-[#003152]'>
                {veiculo.modelo} 
            </header>
            <p className='flex justify-center p-8 text-3xl h-full bg-slate-200'>{veiculo.motorista}</p>
            <div className="flex bg-gray-200">
                <button
                    className='w-full text-slate-100 bg-slate-800 hover:bg-slate-700 flex items-center justify-center py-2 m-3 rounded-[20px]'
                    onClick={retornar}>
                    Não
                </button>
                <button
                    className='text-slate-100 bg-[#610202] hover:bg-red-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'
                    onClick={deletarVeiculo}>
                        Sim
                </button>
            </div>
        </div>
    </div>

   
  )
}

export default DeletarVeiculo