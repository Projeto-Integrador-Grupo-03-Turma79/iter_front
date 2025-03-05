import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom"; // Importando o hook de navegação

function Home() {
    const navigate = useNavigate(); // Usando o hook para navegação

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>): void {
        console.log(e.target.value);
    }

    function irParaLogin(): void {
        
        navigate("/login");
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
                            className="border-2 border-slate-700 rounded p-2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="destino">Destino:</label>
                        <input
                            id="destino"
                            name="destino"
                            placeholder="Destino"
                            className="border-2 border-slate-700 rounded p-2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type="button" 
                        onClick={irParaLogin} 
                        className="rounded 
                        bg-[#003152]  flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2"
                    >
                        Ver
                    </button>
                    <hr className="border-slate-800 w-full" />
                </form>

                <div className="flex justify-center">
                    <img
                        src="https://i.imgur.com/Hq1oMm7.jpeg"
                        alt="Imagem Página Home"
                        className="w-200"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
