import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Viagem from "../../../models/Viagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"

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
            alert('Você precisa estar logado')
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
            alert('Veículo apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o veículo.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }
    return (
        <div className='container w-1/3 mx-auto '>
        <h1 className='text-4xl text-center my-4'> Deletar Viagem </h1>
        <p className='text-center font-semibold mb-4'> Você tem certeza de que deseja apagar a viagem a seguir? </p>
        <div className='flex flex-col border-slate-300 rounded-3xl overflow-hidden justify-between mt-10'>
            <header
                className='flex justify-center text-3xl p-2 text-white italic bg-[#003152] '>
                Motorista da viagem: {viagem.veiculo?.motorista}
            </header>
            <p className='flex justify-center pt-6 pb-2 text-2xl h-full bg-slate-200'> Origem: {viagem.origem} </p>
            <p className='flex justify-center pb-6 pt-2 text-2xl h-full bg-slate-200'> Destino: {viagem.destino}</p>

            <div className="flex bg-gray-200">
                <button
                    className='w-full text-slate-100 bg-slate-800 hover:bg-slate-700 flex items-center justify-center py-2 m-3 rounded-[20px]'
                    onClick={retornar}>
                    Não
                </button>
                <button
                    className='text-slate-100 bg-[#610202] hover:bg-red-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'
                    onClick={deletarViagem}>
                        Sim
                </button>
            </div>
        </div>
    </div>
    )
}

export default DeletarViagem