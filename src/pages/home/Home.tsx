import { useState, ChangeEvent, FormEvent } from "react";
import MapPage from "../../components/maps/MapPage";

function Home() {
    const [partida, setPartida] = useState("");
    const [destino, setDestino] = useState("");
    const [rota, setRota] = useState<{ partida: string; destino: string } | null>(null);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>, campo: "partida" | "destino") {
        if (campo === "partida") {
            setPartida(e.target.value);
        } else {
            setDestino(e.target.value);
        }
    }

    function enviarFormulario(e: FormEvent) {
        e.preventDefault();
        if (partida && destino) {
            setRota({ partida, destino });
        } else {
            alert("Por favor, insira a partida e o destino.");
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <form 
                    onSubmit={enviarFormulario} 
                    className="flex justify-center items-center flex-col w-1/2 gap-4"
                >
                    <h2 className="text-slate-900 text-5xl">Inicie a Sua Viagem</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="partida">Partida:</label>
                        <input
                            type="text"
                            id="partida"
                            name="partida"
                            placeholder="Partida"
                            className="border-2 border-slate-700 rounded p-2"
                            value={partida}
                            onChange={(e) => atualizarEstado(e, "partida")}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="destino">Destino:</label>
                        <input
                            type="text"
                            id="destino"
                            name="destino"
                            placeholder="Destino"
                            className="border-2 border-slate-700 rounded p-2"
                            value={destino}
                            onChange={(e) => atualizarEstado(e, "destino")}
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded bg-[#003152] flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2"
                    >
                        Ver Rota
                    </button>
                </form>

                <div className="flex justify-center h-160 w-160">
                    <MapPage rota={rota} />
                </div>
            </div>
        </>
    );
}

export default Home;
