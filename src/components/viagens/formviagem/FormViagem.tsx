import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Viagem from "../../../models/Viagem";
import { buscar, atualizar, cadastrar } from "../../../service/Service"
import Veiculo from "../../../models/Veiculo";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { SelectEstado } from "./SelectEstado";
import { SelectCidade } from "./SelectCidade";
import { RotatingLines } from "react-loader-spinner";

function FormViagem() {

    const navigate = useNavigate();

    const [viagem, setViagem] = useState<Viagem>({
        tempoViagem: "0h"
    } as Viagem)
    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const [veiculo, setVeiculo] = useState<Veiculo>({ id: 0, modelo: '', marca: '', cor: '', placa: '', motorista: '', fotoMotorista: '' })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const [selectedUf, setSelectedUf] = useState("");

    console.log(selectedUf);


    async function buscarViagemPorId(id: string) {
        try {
            await buscar(`/viagem/id/${id}`, setViagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarVeiculoPorId(id: string) {
        try {
            await buscar(`/veiculo/id/${id}`, setVeiculo, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarVeiculo() {
        try {
            await buscar('/veiculo/all', setVeiculos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
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
        buscarVeiculo()
        if (id !== undefined) {
            buscarViagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setViagem({
            ...viagem,
            veiculo: veiculo,
        })
    }, [veiculo])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        let novoValor = value;
        if (name === "data") {
            const dataFormatada = new Date(value).toISOString().split("T")[0]; // Mantém YYYY-MM-DD sem fuso horário
            novoValor = dataFormatada;
        }
        setViagem({
            ...viagem,
            [e.target.name]: e.target.value,
            veiculo: veiculo,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate("/viagens")
    }

    async function gerarNovoViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/viagem/atualizar`, viagem, setViagem, {
                    headers: { Authorization: token },
                })
                ToastAlerta("A viagem foi atualizado com sucesso!", "sucesso")
            } catch (error: any) {
                ToastAlerta("Erro ao atualizar a viagem.", "erro")
            }
        } else {
            try {
                await cadastrar(`/viagem/criar`, viagem, setViagem, {
                    headers: { Authorization: token },
                })
                ToastAlerta("A Viagem foi cadastrada com sucesso!", "sucesso")
            } catch (error: any) {
                ToastAlerta("Erro ao cadastrar a viagem.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }


    return (

        <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
            <div className="bg-[#FFFDD0] p-10 rounded-lg shadow-lg w-[50%]">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    {id === undefined ? 'Cadastrar Viagem' : 'Editar Veiculo'}
                </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoViagem}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="origem">Origem da sua viagem</label>
                    <SelectEstado onChange={setSelectedUf} />
                    <SelectCidade
                        uf={selectedUf}
                        onChange={(cidadeSelecionada: string) => 
                            atualizarEstado({ target: { name: "origem", value: cidadeSelecionada } } as ChangeEvent<HTMLInputElement>)
                        }
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="destino">Destino da sua viagem</label>
                    <SelectEstado onChange={setSelectedUf} />
                    <SelectCidade
                        uf={selectedUf}
                        onChange={(cidadeSelecionada: string) =>
                            atualizarEstado({ target: { name: "destino", value: cidadeSelecionada} } as ChangeEvent<HTMLInputElement>)
                        }
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="valor">valor</label>
                    <input type="text" placeholder="valor da viagem"
                        name='preco' className="border-b-2 border-black focus:outline-none p-2 bg-transparent" 
                        value={viagem.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="hora">Horário da sua viagem</label>
                    <input type="text" placeholder="Horário da viagem"
                        name='hora' className="border-b-2 border-black focus:outline-none p-2 bg-transparent" 
                        value={viagem.hora} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="data">Data da sua viagem</label>
                    <input type="date" name='data'
                        className="border-b-2 border-black focus:outline-none p-2 bg-transparent" value={viagem.data}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="distancia">Distância da sua viagem</label>
                    <input type="text" placeholder="Distância da viagem"
                        name='distancia' className="border-b-2 border-black focus:outline-none p-2 bg-transparent" value={viagem.distancia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>                

                <div className="flex flex-col gap-2">
                    <p>Veículo da Viagem</p>
                    <select name="veiculo" id="veiculo" className='border-black focus:outline-none p-2 bg-transparent'
                        onChange={(e) => buscarVeiculoPorId(e.currentTarget.value)}
                    >
                        <option defaultValue="" selected disabled>Selecione um Veículo</option>
                        {veiculos.map((veiculo) => (
                            <option key={veiculo.id} value={veiculo.id}>{veiculo.modelo}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="mt-4 bg-[#003152] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#22253d] transition">
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>

            </form>
            </div>
        </div>
    );
}

export default FormViagem;