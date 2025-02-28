import { useNavigate } from "react-router-dom"
import CardVeiculo from "../cardveiculos/CardVeiculos"
import { useEffect, useState } from "react"
import Veiculo from "../../../models/Veiculo"
import { buscar } from "../../../service/Service"

function ListarVeiculos() {

    const navigate = useNavigate();

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    async function buscarVeiculos() {
        try {
            await buscar('/veiculo/all', setVeiculos)
        } catch (error: any) {
            alert("eror")
            navigate("/nossosmotoristas")
        }
    }

     useEffect(() => {
        buscarVeiculos()    
    }, [veiculos.length])


    return (

        <>
              <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                             {veiculos.map((veiculo) => (<CardVeiculo key={veiculo.id} veiculo={veiculo} /> ))}
                    </div>
                </div>
            </div>
        </>

  )
}

export default ListarVeiculos