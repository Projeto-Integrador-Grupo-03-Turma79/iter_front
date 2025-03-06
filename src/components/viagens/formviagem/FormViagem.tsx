import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Viagem from "../../../models/Viagem";
import { buscar, atualizar, cadastrar } from "../../../service/Service"
import Veiculo from "../../../models/Veiculo";


function FormViagem() {

    const navigate = useNavigate();

    const [viagem, setViagem] = useState<Viagem>({} as Viagem)
    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const [veiculo, setVeiculo] = useState<Veiculo>({ id: 0, modelo: '', marca:'', cor:'', placa:'', motorista:'', fotoMotorista:'' })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


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
            alert('Você precisa estar logado');
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
                await atualizar(`/viagem/atualizar`,viagem, setViagem,{
                    headers: { Authorization: token },
                })
                alert("A viagem foi atualizado com sucesso!.")
            } catch (error: any) {
                alert("Erro ao atualizar o veículo.")
            }
        } else {
            try {
                await cadastrar(`/viagem/criar`, viagem, setViagem,{
                    headers: { Authorization: token },
                })
                alert("A Viagem foi cadastrada com sucesso!")
            } catch (error: any) {
                alert("Erro ao cadastrar a viagem.")
            }
        }

        setIsLoading(false)
        retornar()
    }


    return (

        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Viagem' : 'Editar Viagem'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoViagem}>

                <div className="flex flex-col gap-2">

                    <label htmlFor="origem">Origem</label>

                    <input type="text" placeholder="Origem"
                        name='origem' className="border-2 border-slate-700 rounded p-2" value={viagem.origem}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="destino">destino da sua viagem</label>

                    <input type="text" placeholder="destino da viagem"
                        name='destino' className="border-2 border-slate-700 rounded p-2" value={viagem.destino}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="preco">Preço da sua viagem</label>

                    <input type="text" placeholder="Preço da viagem"
                        name='preco' className="border-2 border-slate-700 rounded p-2" value={viagem.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="hora">Horário da sua viagem</label>

                    <input type="text" placeholder="Horário da viagem"
                        name='hora' className="border-2 border-slate-700 rounded p-2" value={viagem.hora}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="data">Data da sua viagem</label>

                    <input type="text" placeholder="data da viagem"
                        name='data' className="border-2 border-slate-700 rounded p-2" value={viagem.data}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="distancia">Distância da sua viagem</label>

                    <input type="text" placeholder="distancia da viagem"
                        name='distancia' className="border-2 border-slate-700 rounded p-2" value={viagem.distancia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="velMedia">Velociadade média da sua viagem</label>

                    <input type="text" placeholder="velocidade média da viagem"
                        name='velMedia' className="border-2 border-slate-700 rounded p-2" value={viagem.velMedia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">

                    <label htmlFor="tempoViagem">tempo da sua viagem</label>

                    <input type="text" placeholder="tempo da viagem"
                        name='tempoVigem' className="border-2 border-slate-700 rounded p-2" value={viagem.tempoViagem}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Veiculo da Viagem</p>
                    <select name="veiculo" id="veiculo" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarVeiculoPorId(e.currentTarget.value)}
                    >
                        <option defaultValue="" selected disabled>Selecione um Veiculo</option>

                        {veiculos.map((veiculo) => (
                            <>
                                <option value={veiculo.id} >{veiculo.modelo}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button className="rounded-[64px] shadow-2xl text-white font-bold bg-black hover:bg-[#373737] w-1/2 py-2 mx-auto flex justify-center mb-7"
                    type="submit">
                    Cadastrar
                </button>

            </form>
        </div>
    );
}

export default FormViagem;