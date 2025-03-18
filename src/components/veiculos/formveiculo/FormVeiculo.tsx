import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Veiculo from "../../../models/Veiculo";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines, ThreeDots } from "react-loader-spinner";

function FormVeiculo() {

    const navigate = useNavigate();

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()


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

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'aviso')
            navigate('/')
        }
    }, [token])



    useEffect(() => {
        if (id !== undefined) {
            buscarVeiculoPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/nossosmotoristas")
    }

    console.log(veiculo)

    async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/veiculo/atualizar`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Veículo foi atualizado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o veículo.", "erro")
                }
            }
        } else {
            try {
                await cadastrar(`/veiculo/criar`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Veículo foi cadastrada com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o veículo.", "erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
            <div className="bg-[#FFFDD0] p-10 rounded-lg shadow-lg w-[70%] sm:w-[40%]">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 flex ju">
                    {id === undefined ? 'Cadastrar Motorista' : 'Editar Cadastro de Motorista'}
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={gerarNovoVeiculo}>

                    <div className="flex flex-col">
                        <label htmlFor="motorista" className="text-gray-800">Nome do motorista</label>
                        <input type="text" name="motorista" placeholder="Nome do motorista"
                            className="border-b-2 border-gray-700 focus:outline-none p-2 bg-transparent"
                            value={veiculo.motorista} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col gap-2">

                        <label htmlFor="foto">Foto</label>

                        <input type="text" placeholder="Foto"
                            name='fotoMotorista' className="border-2 border-slate-700 rounded p-2" value={veiculo.fotoMotorista}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="modelo" className="text-gray-800">Modelo do seu veículo</label>
                        <input type="text" name="modelo" placeholder="Modelo do veículo"
                            className="border-b-2 border-black focus:outline-none p-2 bg-transparent"
                            value={veiculo.modelo} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="marca" className="text-gray-800">Marca do seu veículo</label>
                        <input type="text" name="marca" placeholder="Marca do veículo"
                            className="border-b-2 border-gray-700 focus:outline-none p-2 bg-transparent"
                            value={veiculo.marca} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="placa" className="text-gray-800">Placa</label>
                        <input type="text" name="placa" placeholder="Placa"
                            className="border-b-2 border-gray-700 focus:outline-none p-2 bg-transparent"
                            value={veiculo.placa} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="cor" className="text-gray-800">Cor do veículo</label>
                        <input type="text" name="cor" placeholder="Cor do veículo"
                            className="border-b-2 border-gray-700 focus:outline-none p-2 bg-transparent"
                            value={veiculo.cor} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <button type="submit" className="mt-4 bg-[#003152] text-white py-2 px-6 rounded-full shadow-md hover:scale-105 transition flex justify-center ">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }
                    </button>
                    <button onClick={retornar} className="bg-[#444444] text-white py-2 px-6 rounded-full shadow-md hover:scale-105 transition flex justify-center ">
                        <span>Cancelar</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormVeiculo