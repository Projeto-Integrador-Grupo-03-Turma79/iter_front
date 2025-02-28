import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Veiculo from "../../../models/Veiculo";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormVeiculo() {

    const navigate = useNavigate();

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()


    async function buscarVeiculoPorId(id: string) {
        try {
            await buscar(`/veiculo/id/${id}`, setVeiculo)
        } catch (error: any) {
            alert("error")
            navigate("/nossosmotoristas")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarVeiculoPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/veiculo")
    }

    async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/veiculo/atualizar`, veiculo, setVeiculo)
                alert("O Veículo foi atualizado com sucesso!")
            } catch (error: any) {
                alert("Erro ao atualizar o veículo.")
            }
        } else {
            try {
                await cadastrar(`/veiculo/criar`, veiculo, setVeiculo)
                alert("O Veículo foi cadastrada com sucesso!")
            } catch (error: any) {
                alert("Erro ao cadastrar o veículo.")
            }
        }

    setIsLoading(false)
    retornar()
}

    return (

        <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Veiculo' : 'Editar Veiculo'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoVeiculo}>

        <div className="flex flex-col gap-2">
               
               <label htmlFor="motorista">Motorista</label>

               <input type="text" placeholder="Motorista"
                      name='motorista'className="border-2 border-slate-700 rounded p-2" value={veiculo.motorista}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>
           
        <div className="flex flex-col gap-2">
               
               <label htmlFor="modelo">Modelo do seu veículo</label>

               <input type="text" placeholder="Modelo do Carro"
                      name='modelo'className="border-2 border-slate-700 rounded p-2" value={veiculo.modelo}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>


           <div className="flex flex-col gap-2">
               
               <label htmlFor="marca">Marca do seu veículo</label>

               <input type="text" placeholder="Marca do Carro"
                      name='marca'className="border-2 border-slate-700 rounded p-2" value={veiculo.marca}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>

           <div className="flex flex-col gap-2">
               
               <label htmlFor="cor">Cor do seu veículo</label>

               <input type="text" placeholder="Cor do Carro"
                      name='cor'className="border-2 border-slate-700 rounded p-2" value={veiculo.cor}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>

           <div className="flex flex-col gap-2">
               
               <label htmlFor="placa">Placa do seu veículo</label>

               <input type="text" placeholder="Placa do Carro"
                      name='placa'className="border-2 border-slate-700 rounded p-2" value={veiculo.placa}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>

           <div className="flex flex-col gap-2">
               
               <label htmlFor="foto">Foto</label>

               <input type="text" placeholder="Foto"
                      name='foto'className="border-2 border-slate-700 rounded p-2" value={veiculo.foto}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>

            <button className="rounded-[64px] shadow-2xl text-white font-bold bg-black hover:bg-[#373737] w-1/2 py-2 mx-auto flex justify-center" 
                type="submit">
            Cadastrar
            </button>

        </form>
    </div>
  )
}

export default FormVeiculo