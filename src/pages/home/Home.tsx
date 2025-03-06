import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import imagem from "../../assets/Black and Red Dynamic Car Dealer Presentation (1).png";

function Home() {

    const navigate = useNavigate()

    const [ usuarios, setUsuarios ] = useState<Usuario>({} as Usuario)

    const { usuario } = useContext(AuthContext)
    const token = usuario.token

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>): void {
        console.log(e.target.value);
    }

    function irParaLogin(): void {
        if (usuario.token) {
            navigate("/viagens")
        } else {
            ToastAlerta('Você precisa estar logado!', 'aviso')
            navigate("/logar")
        }

    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4">
                    <h2 className="text-slate-900 text-5xl">Inicie a Sua Viagem</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="partida">Partida:</label>
                        <input
                            type="text"
                            id="partida"
                            name="partida"
                            placeholder="Partida"
                            className="border-2 border-slate-700 rounded-4xl p-2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="destino">Destino:</label>
                        <input
                            id="destino"
                            name="destino"
                            placeholder="Destino"
                            className="border-2 border-slate-700 rounded-4xl p-2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type="button" 
                        onClick={irParaLogin} 
                        className="rounded-4xl 
                        bg-black  flex justify-center hover:bg-slate-800 text-white w-1/2 py-2"
                    >
                        Ver
                    </button>
                    <hr className="border-slate-800 w-full" />
                </form>

                <div className="flex justify-center">
                    <img
                        src={imagem}
                        alt="Imagem Página Home"
                        className="aspect-square object-cover w-175 rounded-4xl shadow-xl"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
