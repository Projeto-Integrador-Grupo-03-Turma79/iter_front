import { Link, useNavigate } from "react-router-dom";
import CardViagens from "../cardviagens/CardViagens";
import { useState, useContext, useEffect } from "react";
import Viagem from "../../../models/Viagem";
import { buscar } from "../../../service/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { DNA, ThreeDots } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaViagens() {

    const navigate = useNavigate();

    const [viagens, setViagens] = useState<Viagem[]>([]);

    const { usuario, handleLogout, destino } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarViagens() {
        if ( destino == "" ) { 
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
        } else { 

            try {
                await buscar(`/viagem/destino/${destino}`, setViagens, {
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
    }

    useEffect(() => {
        if (token === '') {
           ToastAlerta('Você precisa estar logado!', 'aviso')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarViagens()
    }, [viagens.length])

    return (
        <>
         {viagens.length === 0 && (
                            <ThreeDots
                            visible={true}
                            height="500"
                            width="100"
                            color="#000000"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass="flex flex-col justify-center items-center align-middle "
                            />)
                    }

          <div className="flex justify-center w-full pt-10 pb-5 bg-[#003152]">
            <div className="container flex flex-col mx-2">
                <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {viagens.map((viagem) => (
                        <div key={viagem.id} className="self-start">
                            <CardViagens viagem={viagem} />
                        </div>
                    ))}
                </div>
                <div className="flex-col flex justify-center items-center mt-20 mb-15"> 
                    <Link to={"/cadastrarviagem"} className=' min-w-[35vh] min-h-[10vh] text-2xl text-white font-bold bg-[#F1AF09] hover:bg-[#F1AF09]  flex items-center justify-center py-2 m-3 rounded-full shadow-2xl transition-transform hover:scale-108 '>
                        <button>Cadastrar Viagem</button>
                    </Link>
                </div>
            </div>
         </div>
        </>
    )
}

export default ListaViagens;