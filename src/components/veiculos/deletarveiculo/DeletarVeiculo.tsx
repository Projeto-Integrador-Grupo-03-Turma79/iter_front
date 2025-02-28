import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Veiculo from "../../../models/Veiculo"
import { buscar, deletar } from "../../../service/Service"

function DeletarVeiculo() {

    const navigate = useNavigate()

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()


    async function buscarVeiculoPorId(id: string) {
        try {
            await buscar(`/veiculo/${id}`, setVeiculo)
        } catch (error: any) {
            alert("eror")
            navigate("/")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarVeiculoPorId(id)
        }
    }, [id])


    async function deletarVeiculo() {
        setIsLoading(true)

        try {
            await deletar(`/veiculo/${id}`)
            alert('Veículo apagado com sucesso')

        } catch (error: any) {
            alert('Erro ao deletar o tema.')
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
            
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                
                <header className='py-2 px-6 bg-slate-200 font-bold text-2xl'>
                    Veículo
                </header>
               
                <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.motorista}</p>
               
                <div className="flex">
                    
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                   
                    <button 
                        className='w-full bg-slate-200  hover:bg-slate-100 flex items-center justify-center'
                                   onClick={deletarVeiculo}>
                      
                            Sim
                        
                    </button>

                </div>

            </div>

        </div>
  )
}

export default DeletarVeiculo