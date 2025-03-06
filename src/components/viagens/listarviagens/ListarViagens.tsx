import { Link, useNavigate } from "react-router-dom";
import CardViagens from "../cardviagens/CardViagens";
import { useState, useContext, useEffect } from "react";
import Viagem from "../../../models/Viagem";
import { buscar } from "../../../service/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { DNA } from "react-loader-spinner";


function ListaViagens() {

    const navigate = useNavigate();

    const [viagens, setViagens] = useState<Viagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarViagens() {
        try {
            await buscar('/viagem/all', setViagens, {
                headers: {
                    Authorization: token,
                },
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
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarViagens()
    }, [viagens.length])

    return (
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col mx-2">
                <div className="container mx-auto my-4 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {viagens.map((viagem) => (
                        <div key={viagem.id} className="self-start">
                            <CardViagens viagem={viagem} />
                        </div>
                    ))}
                </div>
                <div className="flex-col flex justify-center items-center "> 

                    <hr className=""/> 
                    <Link to={"/cadastrarviagem"} className=' min-w-[35vh] min-h-[10vh] text-2xl text-white font-bold bg-black hover:bg-slate-700 flex items-center justify-center py-2 m-3 rounded-[64px] shadow-2xl transition-transform hover:scale-102 '>
                        <button>Cadastrar Viagem</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListaViagens;