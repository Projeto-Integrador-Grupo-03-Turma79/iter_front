import { ChangeEvent, Fragment, useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import { GoogleMap, useJsApiLoader, DirectionsRenderer, Marker, LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import imagem from "../../assets/Black and Red Dynamic Car Dealer Presentation (1).png";
import CardDestino from "../../components/destino/CardDestino"


function Home() {

    const navigate = useNavigate()

    const [usuarios, setUsuarios] = useState<Usuario>({} as Usuario)

    const { usuario, setDestino } = useContext(AuthContext)
    const token = usuario.token

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.REACT_GOOGLE_MAP_API_KEY,
    })

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>): void {
        setDestino(e.target.value);
    }

    function irParaLogin(): void {
        if (usuario.token) {
            navigate('/viagens')
        } else {
            ToastAlerta('Você precisa estar logado!', 'aviso')
            navigate("/logar")
        }

    }


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#003152]">

                <div className="bg-[#fff] rounded-2xl border-2 border-[#F1AF09] w-full max-w-sm min-h-[200px]  mt-[-50px]">

                    <form className="flex justify-center items-center flex-col gap-6 p-8">
                        <h2 className="text-slate-900 text-3xl text-center mb-4">Inicie a Sua Viagem</h2>

                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col w-full ">

                            <label htmlFor="partida"></label>
                                <input type="text" id="partida" name="partida" placeholder="De onde você está saindo?"
                                    className="border-2 border-[#F1AF09] rounded-t-2xl p-2 placeholder:text-sm"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />

                                <label htmlFor="destino"></label>
                                <input id="destino" name="destino" placeholder="Para onde você está indo?"
                                    className="border-2 border-[#F1AF09] rounded-b-2xl p-2 placeholder:text-sm"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={irParaLogin}
                            className="rounded-4xl bg-[#F1AF09] flex justify-center hover:bg-[#f1af097e] text-white w-1/2 py-2 mt-4"
                        >
                            Ver
                        </button>

                    </form>
                </div>

                <div style={{ width: "100%", height: "85%", borderRadius: "20px", overflow: "hidden" }}>
                    {
                        isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={{ width: "94%", height: "85%", borderRadius: "20px", overflow: "hidden" }}
                                center={{
                                    lat: -23.56535674962746,
                                    lng: -46.69639212509296
                                }}
                                zoom={15}>
                            </GoogleMap>
                        ) : null}
                </div>
            </div>


            <div >
                <CardDestino />
            </div>
        </>
    );
}

export default Home;
