import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import * as Components from './Components';
import React from 'react';
import Cadastro from '../cadastro/Cadastro';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    const [signIn, toggle] = React.useState(true);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            <Components.Container>
                <div className="grid grid-cols-2 h-screen place-items-center font-bold">
                    <form className=" mt-10 flex justify-start items-center flex-col w-3/4 gap-4 relative" onSubmit={login}>
                        <div className='grid grid-cols '>
                            <h2 className="text-slate-900 lg:text-[4vw] text-[9vw] mb-7">Entrar</h2>
                        </div>
                        <div className="relative z-0 mb-5 group flex flex-col w-full lg:w-[25vw] text-[18px]">
                            <input className="block py-2.5 lg:py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                                type="text"
                                name="usuario"
                                id="usuario"
                                placeholder=" "
                                value={usuarioLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                            <label htmlFor="usuario" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Endereço de e-mail</label>
                        </div>
                        <div className="relative z-0 mb-5 flex flex-col w-full lg:w-[25vw]">
                            <input className="block py-2.5 lg:py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder=" "
                                value={usuarioLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                            <label htmlFor="Senha" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
                        </div>
                        <button
                            type='submit'
                            className="bg-[#f1af09] transform hover:scale-105 flex justify-center rounded-3xl lg:w-[15vw] w-1/2 text-white py-2">

                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                                <span>Entrar</span>
                            }
                        </button >

                    </form>

                    <div className=" min-w-[90vw] block">
                        < Cadastro />
                    </div>
                </div>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Já possui uma conta?</Components.Title>
                            <Components.Paragraph>
                                Acesse sua conta e aproveite todos os recursos!
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Logar
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Novo por aqui?</Components.Title>
                            <Components.Paragraph>
                                Cadastre-se no nosso site e tenha um ótima experiência
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>

                                Cadastre-se

                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>
        
            </Components.Container>
        </>
    );
}

export default Login;