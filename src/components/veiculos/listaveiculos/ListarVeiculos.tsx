import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import CardVeiculo from "../cardveiculos/CardVeiculos"
import { useContext, useEffect, useState } from "react"
import Veiculo from "../../../models/Veiculo"
import { buscar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function ListarVeiculos() {

    const navigate = useNavigate();

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    async function buscarVeiculos() {
        try {
            await buscar('/veiculo/all', setVeiculos, {
                headers: { Authorization: token }})
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
        buscarVeiculos()    
    }, [veiculos.length])


    return (

        <>
              <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-6">
                             {veiculos.map((veiculo) => (<CardVeiculo key={veiculo.id} veiculo={veiculo} /> ))}
                    </div>
                </div>
            </div>

            <div className="flex-col flex justify-center items-center "> 
                    <Link to={"/cadastrarveiculo"} className=' min-w-[35vh] min-h-[10vh] text-2xl text-white font-bold bg-black hover:bg-slate-700 flex items-center justify-center py-2 m-3 rounded-[64px] shadow-2xl transition-transform hover:scale-102 '>
                        <button>Cadastrar Veículo</button>
                    </Link>
                </div>
        </>

  )
}

export default ListarVeiculos